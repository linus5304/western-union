import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FormControl } from "./ui/form";
import { cn } from "../lib/utils";

interface Option {
  label: string;
  value: string | number;
}

type SelectFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> &
  Pick<UseFormReturn<TFieldValues>, "control" | "formState"> & {
    label: string;
    capitalize?: boolean;
    control: Control<TFieldValues>;
    name: TName;
    description?: string;
    type: string;
    helperText?: string;
    options?: Option[];
  };

export function SelectField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  control,
  formState,
  label,
  capitalize,
  name,
  type,
  helperText,
  placeholder,
  className,
  description,
  options,
}: React.PropsWithChildren<SelectFieldProps<TFieldValues, TName>>) {
  const { [name]: fieldError } = formState.errors;
  const { touchedFields } = formState;
  const error = fieldError as FieldError;
  const isError = Boolean(error);
  if (isError) helperText = error.message ?? "Invalid";

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <>
            <div className="gap-0">
              <Label className="font-normal">{label}</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className={cn(className, "focus:ring-0 focus:ring-offset-0")}>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  {options?.map(option => (
                    <SelectItem value={option.value as string} key={option.value}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {isError && (
                <div className="text-red-500 text-sm w-[500px] break-words">
                  {error.message}
                </div>
              )}
            </div>
          </>
        );
      }}
    />
  );
}
