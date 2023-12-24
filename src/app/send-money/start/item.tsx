"use client";
import { Input } from "@/components/ui/input";
import { BanknoteIcon, Search } from "lucide-react";
import { Label } from "../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import {
  CardProp,
  countries,
  payerCardData,
  recevoireCardData,
} from "../../../lib/data";
import Link from "next/link";

type Recevoire = "especes" | "compte-bancaire";
type Payer = "carte-credit" | "payer-especes" | "transfert-bancaire";

export function Component() {
  const [valueRecevoire, setValueRecevoire] =
    useState<Recevoire>("compte-bancaire");
  const [valuePayer, setValuePayer] = useState<Payer>("carte-credit");

  console.log("Payer val", valuePayer);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2 p-4 bg-white shadow">
        <h1 className="text-2xl font-normal mb-4 border-b">
          Envoyer de l'argent en ligne
        </h1>
        <div className="mb-4">
          <h2 className="font-normal mb-2">
            À qui souhaitez-vous envoyer de l'argent ?
          </h2>
          <RadioGroup defaultValue="option-one" className="flex gap-8 py-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">
                Envoi vers un bénéficiaire existant
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">
                Envoi vers une nouvelle personne
              </Label>
            </div>
          </RadioGroup>
          <ComboboxForm />
        </div>
        <div className="mb-4 border-y py-2 pb-8">
          <h2 className="font-normal mb-2 text-lg">
            Combien souhaitez-vous envoyer ?
          </h2>
          <div className="flex gap-4 items-center mb-4">
            <div className="border w-full py-[4px]">
              <div className="text-[11px] px-3">Montant envoyé</div>
              <div className="flex">
                <Input
                  defaultValue="267.00"
                  id="sendAmount"
                  className="w-full h-6 border-none focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 mt-[-2px]"
                />
                <div className="px-2 text-sm">EUR</div>
              </div>
            </div>
            {/* <ArrowLeftRight className="h-10 w-10" /> */}
            {/* <div className="border w-full py-[4px]">
              <div className="text-[11px] px-3">Receiver gets</div>
              <div className="flex">
                <Input
                  defaultValue="267.00"
                  id="sendAmount"
                  className="w-full h-6 border-none focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 mt-[-2px]"
                />
                <div className="px-2 text-sm">XAF</div>
              </div>
            </div> */}
          </div>

          {/* <div className="text-center text-sm">
            <div className="font-semibold">
              1.00 EUR = CFA Franc BEAC (XAF) 2
            </div>
            <div className="text-[12px]">
              Exchange rate varies with delivery and payment method.Details
            </div>
          </div> */}
        </div>
        <div className="mb-4">
          <h2 className="font-normal mb-8">
            Comment le bénéficiaire souhaite-t-il recevoir l’argent?
          </h2>
          <div className="flex gap-4">
            {/* {recevoireCardData.map(data => ( */}
            <RadioGroup defaultValue="especes" className="flex gap-4">
              <RadioGroupItem
                value={valueRecevoire}
                id="especes"
                onClick={() => setValueRecevoire("especes")}
                className="hidden"
              />
              <Label htmlFor="especes">
                <RecevoirCard
                  {...recevoireCardData[0]}
                  isSelected={valueRecevoire === "especes"}
                />
              </Label>
              <RadioGroupItem
                value={valueRecevoire}
                id="compte-bancaire"
                onClick={() => setValueRecevoire("compte-bancaire")}
                className="hidden"
              />
              <Label htmlFor="compte-bancaire">
                <RecevoirCard
                  {...recevoireCardData[1]}
                  isSelected={valueRecevoire === "compte-bancaire"}
                />
              </Label>
            </RadioGroup>
            {/* ))} */}
          </div>
          <div className="border-b mt-6"></div>
        </div>
        <div className="mb-4">
          <h2 className="font-normal mb-2">
            Comment voudriez-vous payer?{" "}
            <span className="text-[#1f698d]">
              Frais <sup className="text-[10px]">31</sup>
            </span>
          </h2>
          <div className="flex space-x-2">
            <RadioGroup defaultValue="carte-credit" className="flex gap-4">
              <RadioGroupItem
                value={valuePayer}
                id="carte-credit"
                onClick={() => setValuePayer("carte-credit")}
                className="hidden"
              />
              <Label htmlFor="carte-credit">
                <PayerCard
                  {...payerCardData[0]}
                  isSelected={valuePayer === "carte-credit"}
                />
              </Label>
              <RadioGroupItem
                value={valuePayer}
                id="payer-especes"
                onClick={() => setValuePayer("payer-especes")}
                className="hidden"
              />
              <Label htmlFor="payer-especes">
                <PayerCard
                  {...payerCardData[1]}
                  isSelected={valuePayer === "payer-especes"}
                />
              </Label>
              <RadioGroupItem
                value={valuePayer}
                id="transfert-bancaire"
                onClick={() => setValuePayer("transfert-bancaire")}
                className="hidden"
              />
              <Label htmlFor="transfert-bancaire">
                <PayerCard
                  {...payerCardData[2]}
                  isSelected={valuePayer === "transfert-bancaire"}
                />
              </Label>
            </RadioGroup>
          </div>
        </div>

        <div className="border-y py-4 text-[#3ca7c3] mb-4">
          <div className="text-sm">
            Appliquer la promotion/les points de récempense
          </div>
        </div>
        <Link
          href="/receiver"
          className={buttonVariants({
            className: "w-full bg-[#125f86] hover:bg-[#125f86]",
          })}
        >
          Continuer
        </Link>
      </div>
      <TransferSummary />
    </div>
  );
}

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const FormSchema = z.object({
  code: z.string({
    required_error: "Please select a language.",
  }),
});

export function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    console.log("Form data", data);
  }

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenChange() {
    setIsOpen(!isOpen);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover open={isOpen} onOpenChange={handleOpenChange}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between py-7",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <div className="flex">
                        <Image
                          src={
                            field.value
                              ? countries.find(
                                  country => country.code === field.value
                                )?.flag!
                              : ""
                          }
                          width={40}
                          height={40}
                          alt="flag"
                          className="mr-2"
                        />
                        <div>
                          <div className="text-left text-[12px] text-black">
                            Send to
                          </div>
                          {field.value
                            ? countries.find(
                                country => country.code === field.value
                              )?.country
                            : "Select language"}
                        </div>
                      </div>
                      <Search className="ml-2 h-8 w-8 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col w-[615px] mt-[-4px] p-0 h-[500px] overflow-y-auto">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {countries.map(country => (
                        <CommandItem
                          value={country.code}
                          key={country.code}
                          onSelect={() => {
                            form.setValue("code", country.code!);
                            handleOpenChange();
                          }}
                        >
                          {/* <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              country.code === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          /> */}
                          <Image
                            src={country.flag}
                            width={40}
                            height={40}
                            alt="flag"
                            className="mr-2"
                          />
                          {country.country}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

function RecevoirCard({ isSelected, icon, title: description }: CardProp) {
  return (
    <div
      className={cn(
        "p-4 bg-white border-2 border-black rounded py-20 w-[200px] h-[140px] relative",
        isSelected && "bg-[#045e86] text-white border-[#045e86] shadow-2xl"
      )}
    >
      {isSelected && (
        <div className="absolute bg-green-500 rounded-full p-[2px] top-[-14px] right-[-8px]">
          <Check size={30} strokeWidth={3} />
        </div>
      )}
      <div className="flex flex-col items-center justify-center mt-[-40px] ">
        <Avatar className="mt-[-10px] mb-4">
          <AvatarFallback
            className={cn(
              "border border-black",
              isSelected && "bg-[#045e86] border-white"
            )}
          >
            <BanknoteIcon
              className={cn(" ", isSelected && "bg-[#045e86] text-white")}
            />
          </AvatarFallback>
        </Avatar>
        <div className="text-lg font-semibold">{description}</div>
      </div>
    </div>
  );
}
function PayerCard({ isSelected, icon, title, description }: CardProp) {
  return (
    <>
      <div
        className={cn(
          " bg-white border-2 border-black rounded pt-20 w-[190px] h-[220px] relative flex flex-col justify-between",
          isSelected && "bg-[#045e86] text-white border-[#045e86] shadow-2xl"
        )}
      >
        {isSelected && (
          <div className="absolute bg-green-500 rounded-full p-[2px] top-[-14px] right-[-8px]">
            <Check size={30} strokeWidth={3} />
          </div>
        )}
        <div className="flex flex-col items-center justify-center mt-[-40px]">
          <Avatar className="mt-[-10px] mb-4">
            <AvatarFallback
              className={cn(
                "border border-black",
                isSelected && "bg-[#045e86] border-white"
              )}
            >
              <BanknoteIcon
                className={cn(" ", isSelected && "bg-[#045e86] text-white")}
              />
            </AvatarFallback>
          </Avatar>
          <div className="text-lg font-semibold text-center leading-5">
            {title}
          </div>
        </div>

        <div
          className={cn(
            "border-t-2 py-2",
            isSelected ? "border-white" : "border-black"
          )}
        >
          <div>{description}</div>
        </div>
      </div>
    </>
  );
}

export function TransferSummary() {
  return (
    <div className="">
      <div className="px-4 py-6 bg-[#f3faff] shadow h-fit">
        <h2 className="text-xl font-normal mb-4 border-b">Synthèse</h2>
        {/* <div className="justify-between mb-2">
          <div className="border-b text-sm">
            Exchange Rates<sup>2</sup>
          </div>
          <div className="text-right text-lg py-4 border-b">
            1.00 EUR = 3.2994 TND
          </div>
        </div> */}
        <div className="flex flex-col">
          <div className="flex justify-between mb-2 ">
            <span className="text-sm">Montant du transfert</span>
            <span>267.00 EUR</span>
          </div>
          <div className="flex justify-between mb-2">
            <button className="text-sm text-right">Frais de transfert</button>
            <span>+ 1.90 EUR</span>
          </div>
          <div className="flex justify-between mb-2">
            <button className="text-sm text-right">
              Réduction promotionnelle
            </button>
            <span className="text-[#255e80] text-sm font-semibold text-right">
              Appliquer la promotion
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-sm">Total du transfert</span>
            <span>270.90 EUR</span>
          </div>
          <div className="mb-2">
            <div className="text-sm border-b">Total Le bénéficiaire reçoit</div>
            <div className="text-right">267.00EUR</div>
          </div>
          <div className="flex justify-between mt-4 border-t">
            <span className="text-sm">
              Disponibilité:<sup>1, 8</sup>
            </span>
            <span className="max-w-[60%]">
              Généralement le même jour ouvrable bancaireGénéralement le même
              jour ouvrable bancaire
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
