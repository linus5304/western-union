"use client";
import { Input } from "@/components/ui/input";
import {
  ArrowLeftRight,
  BanknoteIcon,
  CheckIcon,
  CreditCardIcon,
  CurrencyIcon,
  MoveIcon,
  Search,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { Label } from "../../../components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  FormDescription,
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
import { useState } from "react";
import { countries } from "../../../lib/data";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

export function Component() {
  const [isSelected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(!isSelected);
  }
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2 p-4 bg-white shadow">
        <h1 className="text-2xl font-normal mb-4 border-b">
          Send Money Online
        </h1>
        <div className="mb-4">
          <h2 className="font-normal mb-2">
            To whom do you want to send money?
          </h2>
          <RadioGroup defaultValue="option-one" className="flex gap-8 py-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Send to an existing receiver</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Send to someone new</Label>
            </div>
          </RadioGroup>
          <ComboboxForm />
        </div>
        <div className="mb-4 border-y py-2 pb-8">
          <h2 className="font-normal mb-2 text-lg">
            How much do you want to send?
          </h2>
          <div className="flex gap-4 items-center mb-4">
            <div className="border w-full py-[4px]">
              <div className="text-[11px] px-3">Send amount</div>
              <div className="flex">
                <Input
                  defaultValue="267.00"
                  id="sendAmount"
                  className="w-full h-6 border-none focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 mt-[-2px]"
                />
                <div className="px-2 text-sm">EUR</div>
              </div>
            </div>
            <ArrowLeftRight className="h-10 w-10" />
            <div className="border w-full py-[4px]">
              <div className="text-[11px] px-3">Receiver gets</div>
              <div className="flex">
                <Input
                  defaultValue="267.00"
                  id="sendAmount"
                  className="w-full h-6 border-none focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 mt-[-2px]"
                />
                <div className="px-2 text-sm">XAF</div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm">
            <div className="font-semibold">
              1.00 EUR = CFA Franc BEAC (XAF) 2
            </div>
            <div className="text-[12px]">
              Exchange rate varies with delivery and payment method.Details
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">
            How does your receiver want the money?
          </h2>
          <div className="flex gap-6">
            <div
              className={cn(
                "p-4 bg-white border-2 border-black rounded py-20 w-[200px] h-[140px] relative",
                !isSelected && "bg-[#045e86] text-white border-[#045e86]"
              )}
              onClick={handleSelected}
            >
              {!isSelected && (
                <div className="absolute bg-green-500 rounded-full p-[2px] top-[-14px] right-[-8px]">
                  <Check size={30} strokeWidth={3} />
                </div>
              )}
              <div className="flex flex-col items-center justify-center mt-[-40px] ">
                <Avatar>
                  <AvatarFallback
                    className={cn(
                      "border border-black ",
                      !isSelected && "bg-[#045e86] border-white"
                    )}
                  >
                    <BanknoteIcon
                      className={cn(
                        " ",
                        !isSelected && "bg-[#045e86] text-white"
                      )}
                    />
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm font-semibold">Cash</div>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded py-20 w-[200px] h-[140px]">
              <div className="flex flex-col items-center justify-center mt-[-20px]">
                <CurrencyIcon className="mb-2" />
                <div>Cash</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">
            How would you like to pay?{" "}
            <span className="text-gray-500">Fee</span>
          </h2>
          <div className="flex space-x-2">
            <button className="flex-1 p-4 bg-blue-500 text-white rounded text-center relative">
              <CreditCardIcon className="mb-2" />
              <span>Credit/Debit card</span>
              <span className="absolute top-0 right-0 p-2 bg-yellow-400 rounded-full">
                <StarIcon className="text-white" />
                <span className="text-xs text-white absolute -right-1 -top-1">
                  New
                </span>
              </span>
              <span className="text-sm">In minutes</span>
              <span className="text-sm font-semibold">Fee 1.90 EUR</span>
            </button>
            <button className="flex-1 p-4 bg-gray-100 rounded text-center">
              <MoveIcon className="mb-2" />
              <span>Instant bank transfer</span>
              <span className="text-sm">In minutes</span>
              <span className="text-sm font-semibold">Fee 0.90 EUR</span>
            </button>
            <button className="flex-1 p-4 bg-gray-100 rounded text-center">
              <BanknoteIcon className="mb-2" />
              <span>Bank transfer</span>
              <span className="text-sm">6 Business days</span>
              <span className="text-sm font-semibold">Fee 0.90 EUR</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 bg-[#f3faff] shadow h-fit">
        <h2 className="text-xl font-normal mb-4">Summary</h2>
        <div className="justify-between mb-2">
          <div className="border-b text-sm">
            Exchange Rates<sup>2</sup>
          </div>
          <div className="text-right text-lg py-4 border-b">
            1.00 EUR = 3.2994 TND
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between mb-2 ">
            <span className="text-sm">Transfer amount</span>
            <span>267.00 EUR</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">
              Transfer fee<sup>2,5</sup>
            </span>
            <span>+ 1.90 EUR</span>
          </div>
          <div className="flex justify-between mb-2">
            <button className="text-sm">Promotional discount</button>
            <span className="text-[#255e80] text-sm font-semibold">
              Apply promo
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-sm">Transfer total</span>
            <span>270.90 EUR</span>
          </div>
          <div className="mb-2">
            <div className="text-sm border-b">Total Receiver gets</div>
            <div className="text-right">880.95 TND</div>
          </div>
          <div className="flex justify-between mt-4 border-t">
            <span className="text-sm">
              Delivery time:<sup>1</sup>
            </span>
            <span>In minutes</span>
          </div>
        </div>
      </div>
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
