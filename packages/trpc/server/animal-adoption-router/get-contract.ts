import { TRPCError } from '@trpc/server';

import { prisma } from '@documenso/prisma';

import { authenticatedProcedure } from '../trpc';
import { ZGetContractRequestSchema, ZGetContractResponseSchema } from './get-contract.types';

export const getContractRoute = authenticatedProcedure
  .input(ZGetContractRequestSchema)
  .output(ZGetContractResponseSchema)
  .query(async ({ input, ctx }) => {
    const { user } = ctx;

    const contract = await prisma.animalAdoptionContract.findFirst({
      where: {
        id: input.id,
        OR: [{ adoptorUserId: user.id }, { adopterUserId: user.id }],
      },
    });

    if (!contract) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Contract not found or you do not have access',
      });
    }

    return {
      id: contract.id,
      status: contract.status,
      animalName: contract.animalName,
      animalSpecies: contract.animalSpecies,
      animalBreed: contract.animalBreed,
      animalAge: contract.animalAge,
      animalDescription: contract.animalDescription,
      adoptorName: contract.adoptorName,
      adopterName: contract.adopterName,
      adopterEmail: contract.adopterEmail,
      ownershipRetentionYears: contract.ownershipRetentionYears,
      animalValuation: contract.animalValuation.toString(),
      penaltyAmount: contract.penaltyAmount.toString(),
      createdAt: contract.createdAt,
      contractSignedAt: contract.contractSignedAt,
    };
  });
