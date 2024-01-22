import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
    Control,
    Controller,
    FieldError,
    FieldPath,
    FieldValues,
    UseFormReturn
} from "react-hook-form";

interface Option {
  label: string;
  value: string | number;
}

type NumberFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> &
  Pick<
    UseFormReturn<TFieldValues>,
    "control" | "formState"
  > & {
    label: string;
    capitalize?: boolean;
    control: Control<TFieldValues>;
    name: TName;
    description?: string;
    type: string;
    helperText?: string;
    options?: Option[];
  };

export function NumberField<
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
}: React.PropsWithChildren<NumberFieldProps<TFieldValues, TName>>) {
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
              <Input
                {...field}
                placeholder={placeholder}
                className={`${className} focus-visible:ring-0 focus-visible:ring-offset-0 ${
                  error ? `border-red-500 focus-visible:ring-red-500` : ""
                }`}
                type="number"
                onChange={(event) => field.onChange(parseInt(event.target.value, 10))}
              />
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
