import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const formatBankAccountNumber = (value: string): string => {
  const cleanedValue = value.replace(/\D/g, ''); // Remove non-digit characters
  let formattedValue = '';

  for (let i = 0; i < cleanedValue.length; i++) {
    if (i !== 0 && i % 4 === 0 && i < 16) {
      formattedValue += '-';
    }
    formattedValue += cleanedValue[i];
  }

  return formattedValue.slice(0, 19); // Limit to XXXX-XXXX-XXXX-XXXX (19 characters including dashes)
};

export const formatExpirationDate = (value: string): string => {
  return value
    .replace(/\D/g, '') // Remove non-digit characters
    .replace(/(\d{2})(\d{1,2})/, '$1/$2') // Format as MM/YY
    .trim()
    .slice(0, 5);
};

export const formatCVC = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 3); // Keep only the first 4 digits
};

export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because months are zero-indexed
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}