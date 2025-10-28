import { prisma } from '@documenso/prisma';
import { AdoptionContractStatus } from '@documenso/prisma/client';

import { authenticatedProcedure } from '../trpc';
import {
  ZCreateAdoptionContractRequestSchema,
  ZCreateAdoptionContractResponseSchema,
} from './create-contract.types';

export const createContractRoute = authenticatedProcedure
  .input(ZCreateAdoptionContractRequestSchema)
  .output(ZCreateAdoptionContractResponseSchema)
  .mutation(async ({ input, ctx }) => {
    const { user } = ctx;

    const contract = await prisma.animalAdoptionContract.create({
      data: {
        // Animal info
        animalName: input.animalName,
        animalSpecies: input.animalSpecies,
        animalBreed: input.animalBreed,
        animalAge: input.animalAge,
        animalDescription: input.animalDescription,

        // Adoptor info
        adoptorUserId: user.id,
        adoptorName: input.adoptorName,
        adoptorPhone: input.adoptorPhone,
        adoptorAddress: input.adoptorAddress,
        adoptorIdNumber: input.adoptorIdNumber,

        // Adopter info
        adopterName: input.adopterName,
        adopterEmail: input.adopterEmail,
        adopterPhone: input.adopterPhone,
        adopterAddress: input.adopterAddress,
        adopterIdNumber: input.adopterIdNumber,

        // Contract terms
        ownershipRetentionYears: input.ownershipRetentionYears,
        animalValuation: input.animalValuation,
        penaltyAmount: input.penaltyAmount,

        // Consent
        identityVerificationConsent: input.identityVerificationConsent,
        visitationRightsAccepted: input.visitationRightsAccepted,
        criminalRecordCheckConsent: input.criminalRecordCheckConsent ?? false,

        // Custom terms
        customTerms: input.customTerms,

        // Status
        status: AdoptionContractStatus.DRAFT,
      },
    });

    // Create adopter history record
    await prisma.adopterHistory.create({
      data: {
        contractId: contract.id,
        userId: user.id,
        hasActiveContracts: true,
        hasDisputeHistory: false,
        totalAdoptions: 1,
        successfulAdoptions: 0,
      },
    });

    return {
      id: contract.id,
      status: contract.status,
      createdAt: contract.createdAt,
    };
  });
