import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldPath,
  FieldValues,
  UseFormReturn,
  UseFormSetValue,
} from "react-hook-form";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface Option {
  label: string;
  value: string | number;
  flag?: string;
}

type CustomInputFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = React.InputHTMLAttributes<
  HTMLInputElement | HTMLSelectElement | HTMLDivElement
> &
  Pick<UseFormReturn<TFieldValues>, "control" | "formState" | "setValue"> & {
    label: string;
    capitalize?: boolean;
    control: Control<TFieldValues>;
    setValue: UseFormSetValue<TFieldValues>;
    name: TName;
    description?: string;
    type: string;
    helperText?: string;
    options?: Option[];
  };

export function CustomInputField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  formState,
  setValue,
  label,
  capitalize,
  name,
  type,
  helperText,
  placeholder,
  className,
  description,
  options,
}: React.PropsWithChildren<CustomInputFieldProps<TFieldValues, TName>>) {
  const { [name]: fieldError } = formState.errors;
  const { touchedFields } = formState;
  const error = fieldError as FieldError;
  const isError = Boolean(error);
  if (isError) helperText = error.message ?? "Invalid";

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenChange() {
    setIsOpen(!isOpen);
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <div className="flex flex-col w-full">
            <Popover open={isOpen} onOpenChange={handleOpenChange}>
              <PopoverTrigger asChild >
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between py-6",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <div className="flex">
                    <div>
                      <div className="text-left text-[12px] text-gray-700">
                        {label}
                      </div>
                      <div className="text-left font-normal">
                        {field.value
                          ? options?.find(
                              country => country.value === field.value
                            )?.label
                          : " "}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className="ml-2 h-8 w-8 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-[690px] flex-col mt-[-4px] p-0 h-fit overflow-y-auto">
                <Command>
                  {/* <CommandInput placeholder="Search language..." /> */}
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    {options?.map(option => (
                      <CommandItem
                        value={option.value as string}
                        key={option.value}
                        onSelect={() => {
                          // setValue(name, option.value!);
                          handleOpenChange();
                        }}
                      >
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            {isError && (
              <div className="text-red-500 text-sm w-[500px] break-words">
                {error.message}
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
