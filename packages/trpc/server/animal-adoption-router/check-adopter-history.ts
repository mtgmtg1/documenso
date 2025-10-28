import { prisma } from '@documenso/prisma';
import { AdoptionContractStatus } from '@documenso/prisma/client';

import { authenticatedProcedure } from '../trpc';
import {
  ZCheckAdopterHistoryRequestSchema,
  ZCheckAdopterHistoryResponseSchema,
} from './check-adopter-history.types';

export const checkAdopterHistoryRoute = authenticatedProcedure
  .input(ZCheckAdopterHistoryRequestSchema)
  .output(ZCheckAdopterHistoryResponseSchema)
  .query(async ({ input }) => {
    const { searchTerm } = input;

    // Search for contracts by adopter name, phone, or email
    const contracts = await prisma.animalAdoptionContract.findMany({
      where: {
        OR: [
          { adopterName: { contains: searchTerm, mode: 'insensitive' } },
          { adopterPhone: { contains: searchTerm } },
          { adopterEmail: { contains: searchTerm, mode: 'insensitive' } },
        ],
        createdAt: {
          // Only show contracts from last 5 years
          gte: new Date(Date.now() - 5 * 365 * 24 * 60 * 60 * 1000),
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        disputes: true,
      },
    });

    const activeContracts = contracts.filter(
      (c) =>
        c.status === AdoptionContractStatus.ACTIVE ||
        c.status === AdoptionContractStatus.PENDING_ADOPTER_SIGNATURE ||
        c.status === AdoptionContractStatus.PENDING_ADOPTOR_SIGNATURE,
    ).length;

    const totalDisputes = contracts.reduce((sum, c) => sum + c.disputes.length, 0);

    const hasDisputeHistory = contracts.some((c) => c.disputes.length > 0);

    return {
      found: contracts.length > 0,
      totalAdoptions: contracts.length,
      activeContracts,
      disputes: totalDisputes,
      lastAdoptionDate: contracts.length > 0 ? contracts[0].createdAt : null,
      hasDisputeHistory,
      contracts: contracts.map((c) => ({
        id: c.id,
        animalName: c.animalName,
        status: c.status,
        createdAt: c.createdAt,
      })),
    };
  });
