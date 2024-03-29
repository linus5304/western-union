"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit2Icon, UserPlus } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Form, useForm } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";
import { z } from "zod";
import { InputField } from "../../components/InputField";
import { SelectField } from "../../components/SelectField";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { fondOption, motifOptions } from "../../lib/data";
import {
  BeneficiareType,
  InfoTransactionType,
  beneficiareSchema,
  newInfoTransaction,
} from "../../lib/types";
import { TransferSummary } from "../send-money/start/item";
import { v4 as uuidv4 } from "uuid";

export function Component() {
  const [infoTransactionList, setInfoTransactionList] = useLocalStorage<
    InfoTransactionType[]
  >("infoTransactionList", []);
  // const [infoTransaction, setInfoTransaction] =
  //   useLocalStorage<InfoTransactionType>(
  //     "infoTransaction",
  //     infoTransactionList[]
  //   );
  const [beneficiaireList, setBeneficiaireList] = useLocalStorage<
    BeneficiareType[]
  >("beneficiaireList", []);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  const queryTransactionId = params.get("transactionId");
  const infoTransaction = infoTransactionList.find(
    item => item.id === queryTransactionId
  );

  // if(!infoTransaction) return (<>Loading...</>)

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="flex flex-col space-y-6 col-span-2">
        <div>
          <h1 className="text-2xl font-semibold">
            Informations sur le bénéficiaire
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Une fois que votre argent a été retiré, il ne peut plus être
            restitué.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            L'identité de votre bénéficiaire sera vérifiée en agence Western
            Union.
          </p>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
            <li>
              Entrez le nom de votre bénéficiaire tel qu'il apparaît sur sa
              pièce d'identité.
            </li>
          </ul>
        </div>
        <NouveauBeneficier transaction={infoTransaction} />

        <div>
          <label className="block text-lg font-semibold text-gray-600">
            Bénéficiaire du pays sélectionné
          </label>
          {beneficiaireList.map((beneficiaire, idx) => (
            <BeneficierExistant
              transactionId={infoTransaction?.id ?? ""}
              {...beneficiaire}
              key={beneficiaire.id ?? idx}
            />
          ))}
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-600">
            Bénéficiaires d'autres pays
          </label>
          <div className="flex flex-col gap-2">
            {/* <BeneficierExistant isDisabled />
            <BeneficierExistant isDisabled />
            <BeneficierExistant isDisabled /> */}
          </div>
        </div>
        <div className="text-[10px] border-b border-dotted border-gray-500 pb-12">
          <sup>1</sup> Le service et les fonds peuvent être retardés ou
          indisponibles en fonction de différents facteurs, notamment du Service
          sélectionné, des options de remise différée sélectionnées, du montant
          envoyé, du pays de destination, de la disponibilité des devises, des
          aspects réglementaires et de protection des clients, des exigences
          d’identification, des restrictions de remise, des heures d’ouverture
          des points de vente et du décalage horaire (collectivement les «
          Restrictions »). Des restrictions supplémentaires peuvent s’appliquer.
          Reportez-vous à nos conditions générales pour plus d’informations.
          <br />
          <br />
          <sup>6</sup>
          Votre Bénéficiaire peut retirer l’argent que vous lui avez transféré
          dans un point de vente Western Union de France . <br />
          <br /> <sup>7</sup>
          Veuillez saisir le nom du Bénéficiaire tel qu’il apparaît sur la pièce
          d’identité qu’il présentera pour récupérer ces fonds.
        </div>
      </div>
      <TransferSummary
        montantTransfer={infoTransaction?.montantTransfer ?? 0}
      />
    </div>
  );
}

interface NouveauBeneficierType {
  transaction: InfoTransactionType | undefined;
}

function NouveauBeneficier({ transaction }: NouveauBeneficierType) {
  const router = useRouter();
  const [beneficiaireList, setBeneficiaireList] = useLocalStorage<
    BeneficiareType[]
  >("beneficiaireList", []);
  const [infoTransactionList, setInfoTransactionList] = useLocalStorage<
    InfoTransactionType[]
  >(`infoTransactionList`, []);
  // console.log(`Transactions - ${infoTransaction.id}`, infoTransaction);
  const form = useForm<z.infer<typeof beneficiareSchema>>({
    resolver: zodResolver(beneficiareSchema),
    defaultValues: {
      prenom: "",
      deuxiemePrenom: "",
      nomFamille: "",
      email: "",
      motif: "",
      originFond: "",
      telephone: "",
    },
  });

  const infoTransaction = infoTransactionList.find(
    item => item.id === transaction?.id
  );

  function onSubmit(values: z.infer<typeof beneficiareSchema>) {
    console.log(values);

    const beneficiare = { ...values, id: uuidv4() };

    setBeneficiaireList([...beneficiaireList, { ...beneficiare }]);
    setInfoTransactionList(
      infoTransactionList.map(item => {
        if (item.id === transaction?.id) {
          item.beneficiare = beneficiare;
        }
        return item;
      })
    );

    form.reset();

    router.push(`/payment?transactionId=${infoTransaction?.id}`);
  }

  return (
    <Form {...form}>
      <form>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-white border border-[#b4d3e5] px-4 rounded shadow-lg">
              <div className="flex items-center gap-2">
                <UserPlus size={36} />
                <div className="font-light text-[#637cb7]">
                  Ajouter un nouveau bénéficiaire
                </div>
              </div>
              <div></div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4 flex gap-8 w-[96%] mx-auto bg-white">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex w-full gap-4">
                    <InputField
                      control={form.control}
                      formState={form.formState}
                      label="Prénom"
                      name="prenom"
                      type="text"
                      className="min-w-[300px]"
                    />
                    <InputField
                      control={form.control}
                      formState={form.formState}
                      label="Deuxiemme prénom"
                      name="deuxiemePrenom"
                      type="text"
                      className="min-w-[340px]"
                    />
                  </div>
                  <div className="flex w-full gap-4">
                    <InputField
                      control={form.control}
                      formState={form.formState}
                      label="Nom de famille"
                      name="nomFamille"
                      type="text"
                      className="min-w-[300px]"
                    />
                  </div>
                  <div className="flex w-full gap-4">
                    <InputField
                      control={form.control}
                      formState={form.formState}
                      label="Code Pays"
                      name="codePays"
                      type="text"
                      className="max-w-[80px] flex-1"
                    />
                    <InputField
                      control={form.control}
                      formState={form.formState}
                      label="Télépphone"
                      name="telephone"
                      type="text"
                      className="min-w-[300px]"
                    />
                  </div>
                  <div className="flex w-full gap-4">
                    <SelectField
                      control={form.control}
                      formState={form.formState}
                      label="Motif du transfert"
                      name="motif"
                      type="text"
                      className="w-[340px]"
                      options={motifOptions}
                    />
                  </div>
                  <div className="flex w-full gap-4">
                    <SelectField
                      control={form.control}
                      formState={form.formState}
                      label="Origine des fonds"
                      name="originFond"
                      type="text"
                      className="w-[340px]"
                      options={fondOption}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#125f86] hover:bg-[#125f86]"
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    Continuer
                  </Button>
                  <Button
                    size="lg"
                    className="p-6 hover:bg-none"
                    variant="ghost"
                  >
                    Annuler
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </Form>
  );
}

function BeneficierExistant({
  transactionId,
  isDisabled,
  ...itemBen
}: { isDisabled?: boolean; transactionId: string } & BeneficiareType) {
  const router = useRouter();

  const [beneficiaireList, setBeneficiaireList] = useLocalStorage<
    BeneficiareType[]
  >("beneficiaireList", []);

  const [infoTransactionList, setInfoTransactionList] = useLocalStorage<
    InfoTransactionType[]
  >(`infoTransactionList`, []);

  const form = useForm<z.infer<typeof beneficiareSchema>>({
    resolver: zodResolver(beneficiareSchema),
    defaultValues: {
      prenom: itemBen.prenom,
      deuxiemePrenom: itemBen.deuxiemePrenom,
      nomFamille: itemBen.nomFamille,
      email: itemBen.email,
      motif: "",
      originFond: "",
      telephone: itemBen.telephone,
    },
  });

  function onSubmit(values: z.infer<typeof beneficiareSchema>) {
    setBeneficiaireList(
      beneficiaireList.map(ben => {
        if ((ben.id = itemBen.id)) {
          ben.motif = values.motif;
          ben.originFond = values.originFond;
        }
        return ben;
      })
    );

    setInfoTransactionList(
      infoTransactionList.map(item => {
        if (item.id === transactionId && item.beneficiare) {
          item.beneficiare = {
            ...itemBen,
            motif: values.motif,
            originFond: values.originFond,
          };
        }
        return item;
      })
    );

    form.reset();

    router.push(`/payment?transactionId=${transactionId}`);
  }
  return (
    <Form {...form}>
      <form>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="bg-white border border-[#b4d3e5] px-4 rounded shadow-lg"
              disabled={isDisabled}
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src="" alt="@shadcn" />
                    <AvatarFallback className="text-white bg-[#cbcbcb] text-xl">
                      PF
                    </AvatarFallback>
                  </Avatar>
                  <Image
                    src="/cmr-flag-round.svg"
                    alt="cmr"
                    height={15}
                    width={15}
                    className="absolute rounded-none top-6 left-6"
                  />
                </div>
                <div className="font-light text-[#637cb7]">{`${itemBen.nomFamille} ${itemBen.prenom}`}</div>
              </div>
              <div></div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4 flex gap-8 w-[96%] mx-auto bg-[#f2fafe]">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex justify-between text-lg border-b text-gray-600">
                    <p>Informations personnelles du bénéficiaire</p>
                    <Edit2Icon className="stroke-blue-400" />
                  </div>
                  <div className="mb-6">{`${itemBen.nomFamille} ${itemBen.prenom}`}</div>
                  <div className="flex w-full gap-4">
                    <SelectField
                      control={form.control}
                      formState={form.formState}
                      label="Motif du transfert"
                      name="motif"
                      type="text"
                      className="w-[340px]"
                      options={motifOptions}
                    />
                  </div>
                  <div className="flex w-full gap-4">
                    <SelectField
                      control={form.control}
                      formState={form.formState}
                      label="Origine des fonds"
                      name="originFond"
                      type="text"
                      className="w-[340px]"
                      options={fondOption}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#125f86] hover:bg-[#125f86]"
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    Continuer
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </Form>
  );
}
