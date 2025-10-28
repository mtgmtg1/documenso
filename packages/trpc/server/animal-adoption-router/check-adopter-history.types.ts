import { z } from 'zod';

export const ZCheckAdopterHistoryRequestSchema = z.object({
  searchTerm: z.string().min(1), // Name, phone, or email
});

export type TCheckAdopterHistoryRequest = z.infer<typeof ZCheckAdopterHistoryRequestSchema>;

export const ZCheckAdopterHistoryResponseSchema = z.object({
  found: z.boolean(),
  totalAdoptions: z.number(),
  activeContracts: z.number(),
  disputes: z.number(),
  lastAdoptionDate: z.date().nullable(),
  hasDisputeHistory: z.boolean(),
  contracts: z.array(
    z.object({
      id: z.string(),
      animalName: z.string(),
      status: z.string(),
      createdAt: z.date(),
    }),
  ),
});

export type TCheckAdopterHistoryResponse = z.infer<typeof ZCheckAdopterHistoryResponseSchema>;
