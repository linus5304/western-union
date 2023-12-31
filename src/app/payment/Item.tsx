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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputField } from "../../components/InputField";
import { TransferSummary } from "../send-money/start/item";
import Link from "next/link";

export function Component() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="flex flex-col space-y-6 col-span-2">
        <div>
          <h1 className="text-2xl font-normal">Informations de paiement</h1>
        </div>
        <NouvelleCarte />

        <div>
          <label className="block text-lg font-normal text-gray-600">
            Sélectionner une carte
          </label>
          <CarteExistante />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-600">
            Bénéficiaires d'autres pays
          </label>
          <div className="flex flex-col gap-2">
            <CarteExistante />
            <CarteExistante />
            <CarteExistante />
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
      <TransferSummary />
    </div>
  );
}

type NouvelleCarteType = {
  numeroDeCarte: string;
  dateExpiration: string;
  cvv: string;
};

const formSchema = z.object({
  numeroDeCarte: z.string({
    required_error:
      "Désolé, nous ne pouvons pas accepter cette carte pour le paiement. Veuillez essayer une autre carte.",
  }),
  dateExpiration: z.string().optional(),
  cvv: z.string({
    required_error:
      "Veuillez vérifier et saisir à nouveau le nom de famille de votre bénéficiaire",
  }),
});

function NouvelleCarte() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numeroDeCarte: "",
      dateExpiration: "",
      cvv: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const recipient: NouvelleCarteType = {
      numeroDeCarte: values.numeroDeCarte,
      dateExpiration: values.dateExpiration ?? "",
      cvv: values.cvv,
    };

    router.push("/send/review");
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
          <div className="p-4 flex gap-8 w-[96%] mx-auto bg-white">
            <div className="flex flex-col gap-4 w-full">
              <div className="border p-2 w-[50%] border-gray-300 rounded shadow-lg flex flex-col gap-4">
                <InputField
                  control={form.control}
                  formState={form.formState}
                  label="Numéro de carte"
                  name="numeroDeCarte"
                  type="text"
                />
                <div className="flex gap-2">
                  <InputField
                    control={form.control}
                    formState={form.formState}
                    label="MM/YY"
                    name="dateExpiration"
                    type="text"
                  />
                  <InputField
                    control={form.control}
                    formState={form.formState}
                    label="CVV"
                    name="cvv"
                    type="text"
                  />
                </div>
              </div>
              <Link href="/verification" className={buttonVariants({ className: "p-6 bg-[#045e86] hover:bg-[#045e86]" })}>
                Continuer
              </Link>
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

function CarteExistante() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cvv: "",
      dateExpiration: "",
      numeroDeCarte: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const recipient: NouvelleCarteType = {
      numeroDeCarte: values.numeroDeCarte,
      dateExpiration: values.dateExpiration ?? "",
      cvv: values.cvv,
    };

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
              <div className="font-semibold">1762</div>
            </div>
            <div className="">10/26</div>
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
