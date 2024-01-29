import { z } from "zod";

const bankAccountNumberSchema = z.string().regex(/^\d{4}-\d{4}-\d{4}-\d{4}$/, 'Invalid bank account number format');

const expirationDateSchema = z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid expiration date format')
  .refine(date => {
    const [month, year] = date.split('/').map(Number);
    const expiry = new Date();
    expiry.setFullYear(2000 + year, month, 0);
    return expiry > new Date();
  }, 'Expiration date must be in the future');

const cvcSchema = z.string().length(3, 'CVC must be 3 digits').or(z.string().length(4, 'CVC must be 4 digits'));

export const transactionSchema = z.object({
  code: z.string({
    required_error: "Please select a language.",
  }),
  customerType: z.string(),
  montantTransfer: z.number(),
  modeReception: z.string(),
  modePaiment: z.string(),
});

export const beneficiareSchema = z.object({
  prenom: z.string({
    required_error:
      "Veuillez vérifier et saisir à nouveau le prénom de votre bénéficiaire",
  }),
  deuxiemePrenom: z.string().optional(),
  nomFamille: z.string({
    required_error:
      "Veuillez vérifier et saisir à nouveau le nom de famille de votre bénéficiaire",
  }),
  email: z.string().optional(),
  telephone: z.string().optional(),
  codePays: z.string().optional(),
  motif: z.string().optional(),
  originFond: z.string().optional(),
});

export const identiteSchema = z.object({
  occupation: z.string({
    required_error: "Veuillez selectionner une occupation",
  }),
  niveauDuPoste: z.string(),
  relationAvecDestinataire: z.string({
    required_error:
      "Veuillez selectionner une relation avec le destinataire du transfert",
  }),
});

export const paymentSchema = z.object({
  numeroDeCarte: bankAccountNumberSchema,
  dateExpiration: expirationDateSchema,
  cvv: cvcSchema,
});

export type InfoTransactionType = z.infer<typeof transactionSchema> & {
  id: string;
  paymentCard?: PaymentCardType;
  beneficiare?: BeneficiareType;
  identite?: IdentiteType;
};

export function newInfoTransaction(): InfoTransactionType {
  return {
    id: '',
    code: '',
    customerType: '',
    modePaiment: '',
    modeReception: '',
    montantTransfer: 0
  };
}

export type BeneficiareType = z.infer<typeof beneficiareSchema> & { id: string; };
export type PaymentCardType = z.infer<typeof paymentSchema> & { id: string; };
export type IdentiteType = z.infer<typeof identiteSchema> & { id?: string; };