"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "../../components/InputField";
import { TransferSummary } from "../send-money/start/item";
import Link from "next/link";
import {
  formatBankAccountNumber,
  formatCVC,
  formatExpirationDate,
} from "../../lib/utils";
import {
  InfoTransactionType,
  PaymentCardType,
  paymentSchema,
} from "../../lib/types";
import { useLocalStorage } from "usehooks-ts";

export function Component() {
  const [infoTransactionList, setInfoTransactionList] = useLocalStorage<
    InfoTransactionType[]
  >("infoTransactionList", []);
  const [infoTransaction, setInfoTransaction] =
    useLocalStorage<InfoTransactionType>(
      "infoTransaction",
      infoTransactionList[0]!
    );
  const [beneficiaireList, setBeneficiaireList] = useLocalStorage<
    InfoTransactionType[]
  >("beneficiaireList", []);
  const [paymentCardList, setPaymentCardList] = useLocalStorage<
    PaymentCardType[]
  >("paymentCardList", []);

  function handleUpdateTransaction(value: PaymentCardType) {
    setInfoTransaction({ ...infoTransaction, paymentCard: value });
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="flex flex-col space-y-6 col-span-2">
        <div>
          <h1 className="text-2xl font-normal">Informations de paiement</h1>
        </div>
        <NouvelleCarte handleUpdateInfoTransaction={handleUpdateTransaction} />

        <div>
          <label className="block text-lg font-normal text-gray-600">
            Sélectionner une carte
          </label>
          {paymentCardList.map(card => (
            <CarteExistante {...card} />
          ))}
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-600">
            Bénéficiaires d'autres pays
          </label>
          <div className="flex flex-col gap-2">
            {paymentCardList.map(card => (
              <CarteExistante {...card} />
            ))}
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
      <TransferSummary montantTransfer={infoTransaction.montantTransfer ?? 0} />
    </div>
  );
}

interface CarteProps {
  handleUpdateInfoTransaction: (val: PaymentCardType) => void;
}

function NouvelleCarte({ handleUpdateInfoTransaction }: CarteProps) {
  const [paymentCardList, setPaymentCardList] = useLocalStorage<
    PaymentCardType[]
  >("paymentCardList", []);
  const router = useRouter();
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      numeroDeCarte: "",
      dateExpiration: "",
      cvv: "",
    },
  });

  function onSubmit(values: z.infer<typeof paymentSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    handleUpdateInfoTransaction(values);
    setPaymentCardList([...paymentCardList, values]);
    console.log(values);

    router.push('/receiver');
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-white border border-[#b4d3e5] px-4 rounded shadow-lg">
          <div className="flex items-center gap-2">
            <CreditCard size={24} className="stroke-blue-400" />
            <div className="font-light text-[#637cb7] text-sm">
              Ajouter une nouvelle carte
            </div>
          </div>
          <div></div>
        </AccordionTrigger>
        <AccordionContent>
          <Form {...form}>
            <form>
              <div className="p-4 flex gap-8 w-[96%] mx-auto bg-white">
                <div className="flex flex-col gap-4 w-full">
                  <div className="border p-2 w-[50%] border-gray-300 rounded shadow-lg flex flex-col gap-4">
                    <InputField
                      control={form.control}
                      formState={form.formState}
                      label="Numéro de carte"
                      name="numeroDeCarte"
                      type="text"
                      handleFormat={formatBankAccountNumber}
                    />
                    <div className="flex gap-2">
                      <InputField
                        control={form.control}
                        formState={form.formState}
                        label="MM/YY"
                        name="dateExpiration"
                        type="text"
                        handleFormat={formatExpirationDate}
                        className="max-w-40"
                      />
                      <InputField
                        control={form.control}
                        formState={form.formState}
                        label="CVV"
                        name="cvv"
                        type="text"
                        handleFormat={formatCVC}
                      />
                    </div>
                  </div>
                  <Button
                    className="p-6 bg-[#045e86] hover:bg-[#045e86]"
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
            </form>
          </Form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function CarteExistante({ numeroDeCarte, dateExpiration }: PaymentCardType) {
  const router = useRouter();
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cvv: "",
      dateExpiration,
      numeroDeCarte
    },
  });

  function onSubmit(values: z.infer<typeof paymentSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    router.push("/send/review");
  }
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-white border border-[#b4d3e5] px-4 rounded shadow-lg h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/master_card.webp"
              height={30}
              width={30}
              alt="Master card"
            />
            <div className="font-normal text-sm text-left mr-52">
              <div className="text-[11px]">Se terminant en</div>
              <div className="font-semibold">{numeroDeCarte.slice(15, 19)}</div>
            </div>
            <div className="">{dateExpiration}</div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-4 flex gap-8 w-[96%] mx-auto bg-white">
            <div className="flex flex-col gap-4 w-full">
              <div className="border p-2 w-[50%] border-gray-300 rounded shadow-lg flex flex-col gap-4">
                <InputField
                  control={form.control}
                  formState={form.formState}
                  label="CVV"
                  name="cvv"
                  type="text"
                  className="w-full"
                />
              </div>
              <Button size="lg" className="p-6 bg-[#045e86] hover:bg-[#045e86]">
                Continuer
              </Button>
              <Button size="lg" className="p-6 hover:bg-none" variant="ghost">
                Annuler
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
