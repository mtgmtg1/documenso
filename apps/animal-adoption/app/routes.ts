import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  // Contract routes
  route('contracts/new', 'routes/contracts/new.tsx'),
  route('contracts/preview', 'routes/contract-preview.tsx'),
  route('contracts/:id', 'routes/contracts/view.tsx'),

  // Adopter history
  route('adopter-history', 'routes/adopter-history/index.tsx'),

  // Photo verification
  route('photos', 'routes/photos/index.tsx'),
  route('photos/upload', 'routes/photos/upload.tsx'),

  // Disputes
  route('disputes', 'routes/disputes/index.tsx'),
  route('disputes/new', 'routes/disputes/new.tsx'),

  // Admin routes
  route('admin/templates', 'routes/admin/templates/index.tsx'),
  route('admin/templates/new', 'routes/admin/templates/new.tsx'),

  // Verification
  route('verification', 'routes/verification/index.tsx'),
] satisfies RouteConfig;
