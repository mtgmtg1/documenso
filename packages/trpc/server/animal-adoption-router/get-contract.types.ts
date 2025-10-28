import { z } from 'zod';

export const ZGetContractRequestSchema = z.object({
  id: z.string(),
});

export type TGetContractRequest = z.infer<typeof ZGetContractRequestSchema>;

export const ZGetContractResponseSchema = z.object({
  id: z.string(),
  status: z.string(),
  animalName: z.string(),
  animalSpecies: z.string(),
  animalBreed: z.string().nullable(),
  animalAge: z.number().nullable(),
  animalDescription: z.string().nullable(),
  adoptorName: z.string(),
  adopterName: z.string(),
  adopterEmail: z.string(),
  ownershipRetentionYears: z.number(),
  animalValuation: z.string(), // Decimal as string
  penaltyAmount: z.string(), // Decimal as string
  createdAt: z.date(),
  contractSignedAt: z.date().nullable(),
});

export type TGetContractResponse = z.infer<typeof ZGetContractResponseSchema>;
