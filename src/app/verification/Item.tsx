"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { CustomInputField } from "../../components/CustomInputField";
import {
  niveauDuPosteOptions,
  occupationOptions,
  relationDestinataireOptions,
} from "../../lib/data";
import { TransferSummary } from "../send-money/start/item";
import { useLocalStorage } from "usehooks-ts";
import { InfoTransactionType, identiteSchema } from "../../lib/types";

export function Component() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const [infoTransactionList, setInfoTransactionList] = useLocalStorage<
    InfoTransactionType[]
  >("infoTransactionList", []);

  const queryTransactionId = params.get("transactionId");

  const transaction = infoTransactionList.find(
    trans => trans.id === queryTransactionId
  );

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="flex flex-col space-y-0 col-span-2">
          <div className="bg-white p-4 h-[410px]">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-normal">Confirmez votre identité</h1>
              <p className="text-sm text-gray-700">
                Veuillez fournir les informations suivantes à votre sujet.
              </p>
            </div>
            <div className="pb-24">
              <Identite />
            </div>
          </div>
        </div>
        <TransferSummary montantTransfer={transaction?.montantTransfer ?? 0} />
      </div>
      <div className="border-b w-[80%] border-gray-400 border-dashed mb-10 flex mx-auto"></div>
      <div className="text-[10px] border-b border-dotted border-gray-500 pb-12 w-[80%] text-left">
        <sup>1</sup> Le service et les fonds peuvent être retardés ou
        indisponibles en fonction de différents facteurs, notamment du Service
        sélectionné, des options de remise différée sélectionnées, du montant
        envoyé, du pays de destination, de la disponibilité des devises, des
        aspects réglementaires et de protection des clients, des exigences
        d’identification, des restrictions de remise, des heures d’ouverture des
        points de vente et du décalage horaire (collectivement les «
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
  );
}

function Identite() {
  const router = useRouter();


  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const queryTransactionId = params.get("transactionId");

  const [infoTransactionList, setInfoTransactionList] = useLocalStorage<
    InfoTransactionType[]
  >(`infoTransactionList`, []);

  const transaction = infoTransactionList.find(
    trans => trans.id === queryTransactionId
  );

  const form = useForm<z.infer<typeof identiteSchema>>({
    resolver: zodResolver(identiteSchema),
    defaultValues: {
      occupation: transaction?.identite?.occupation ?? "",
      niveauDuPoste: transaction?.identite?.niveauDuPoste ?? "",
      relationAvecDestinataire: transaction?.identite?.relationAvecDestinataire ?? "",
    },
  });

  function onSubmit(values: z.infer<typeof identiteSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setInfoTransactionList(
      infoTransactionList.map(item => {
        if (item.id === queryTransactionId) {
          item.identite = values;
        }
        return item;
      })
    );

    router.push(`/send-money/app/review?transactionId=${queryTransactionId}`);
  }

  return (
    <>
      <Form {...form}>
        <form>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col w-full gap-4">
              <CustomInputField
                control={form.control}
                setValue={form.setValue}
                formState={form.formState}
                label="Occupation"
                name="occupation"
                type="text"
                className="w-[340px]"
                options={occupationOptions}
              />
              <CustomInputField
                control={form.control}
                setValue={form.setValue}
                formState={form.formState}
                label="Niveau du poste"
                name="niveauDuPoste"
                type="text"
                className="w-[340px]"
                options={niveauDuPosteOptions}
              />
              <CustomInputField
                control={form.control}
                setValue={form.setValue}
                formState={form.formState}
                label="Relation avec le destinataire du transfert"
                name="relationAvecDestinataire"
                type="text"
                className="w-[340px]"
                options={relationDestinataireOptions}
              />
            </div>
            <div className="border-b border-dashed"></div>
            <Button size="lg" onClick={form.handleSubmit(onSubmit)}>
              Continuer
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
