import { router } from '../trpc';
import { checkAdopterHistoryRoute } from './check-adopter-history';
import { createContractRoute } from './create-contract';
import { getContractRoute } from './get-contract';

export const animalAdoptionRouter = router({
  // Contract operations
  createContract: createContractRoute,
  getContract: getContractRoute,

  // Adopter history
  checkAdopterHistory: checkAdopterHistoryRoute,

  // TODO: Add more routes
  // - submitMonthlyPhoto
  // - verifyPhoto
  // - createDispute
  // - getDisputes
  // - createTemplate
  // - getTemplates
  // - updateTemplate
});
