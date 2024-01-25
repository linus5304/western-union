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

interface Option {
  label: string;
  value: string | number;
}

type InputFieldProps<
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
    handleFormat?: (val: string) => void;
  };

export function InputField<
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
  handleFormat,
}: React.PropsWithChildren<InputFieldProps<TFieldValues, TName>>) {
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
              {handleFormat && (
                <Input
                  {...field}
                  placeholder={placeholder}
                  className={`${className} focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    error ? `border-red-500 focus-visible:ring-red-500` : ""
                  }`}
                  type={type}
                  onChange={e => field.onChange(handleFormat!(e.target.value))}
                />
              )}
              {!handleFormat && (
                <Input
                  {...field}
                  placeholder={placeholder}
                  className={`${className} focus-visible:ring-0 focus-visible:ring-offset-0 ${
                    error ? `border-red-500 focus-visible:ring-red-500` : ""
                  }`}
                  type={type}
                  // onChange={e => field.onChange(handleFormat!(e.target.value))}
                />
              )}
              {isError && (
                <div className="text-red-500 text-sm max-w-full break-words">
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
