import { z } from 'zod';

export const ZCreateAdoptionContractRequestSchema = z.object({
  // Animal information
  animalName: z.string().min(1),
  animalSpecies: z.string().min(1),
  animalBreed: z.string().optional(),
  animalAge: z.number().int().min(0).optional(),
  animalDescription: z.string().optional(),

  // Adoptor (giver) information
  adoptorName: z.string().min(1),
  adoptorPhone: z.string().min(1),
  adoptorAddress: z.string().min(1),
  adoptorIdNumber: z.string().optional(),

  // Adopter (receiver) information
  adopterName: z.string().min(1),
  adopterEmail: z.string().email(),
  adopterPhone: z.string().min(1),
  adopterAddress: z.string().min(1),
  adopterIdNumber: z.string().optional(),

  // Contract terms
  ownershipRetentionYears: z.number().int().min(1).max(20).default(1),
  animalValuation: z.number().default(100000000),
  penaltyAmount: z.number().default(10000000),

  // Consent
  identityVerificationConsent: z.boolean(),
  visitationRightsAccepted: z.boolean(),
  criminalRecordCheckConsent: z.boolean().optional(),

  // Custom terms
  customTerms: z.string().optional(),
});

export type TCreateAdoptionContractRequest = z.infer<typeof ZCreateAdoptionContractRequestSchema>;

export const ZCreateAdoptionContractResponseSchema = z.object({
  id: z.string(),
  status: z.string(),
  createdAt: z.date(),
});

export type TCreateAdoptionContractResponse = z.infer<typeof ZCreateAdoptionContractResponseSchema>;
