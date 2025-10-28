# Animal Adoption Contract System

A specialized application for managing animal adoption contracts with legal protections against abuse.

## Features

### 1. Adoption Database & History Tracking
- Track all adoptions on the platform
- Check adopter history for past 5 years
- Flag disputes and violations
- Prevent serial abusers from adopting

### 2. Special Contract Terms
- Ownership retention period: 1-20 years (configurable)
- Animal valuation: ₩100,000,000 (default)
- Penalty for violations: ₩5,000,000 - ₩10,000,000
- Recovery rights for adoptor

### 3. Identity Verification
- Consent-based identity verification
- Optional criminal record check
- Fraud prevention through verified information
- Legal recourse for false information (fraud charges)

### 4. Monthly Photo Verification
- Required monthly photo submissions
- EXIF metadata validation
- AI-powered forgery detection
- Special verification requirements:
  - Date paper in photo
  - Specific hand gesture
  - Real-time capture verification

### 5. Dispute Tracking & Resolution
- Report abuse, neglect, or violations
- Evidence submission (photos, documents)
- Admin review and resolution
- Track actions taken (recovery, penalties, legal action)

### 6. Admin Template Management
- Create and manage contract templates
- Set default values (retention period, valuation, penalties)
- Bulk update templates
- Customizable clauses

### 7. Digital Signatures
- Reuses Documenso's signing infrastructure
- Touch/drawing signature support
- Multi-party signing (adoptor + adopter)
- Legal document generation and storage

## Tech Stack

Built on top of Documenso's infrastructure:
- **Database**: PostgreSQL with Prisma ORM
- **Backend**: tRPC API routes
- **Frontend**: React Router (Remix v2)
- **UI**: Tailwind CSS + shadcn/ui components
- **Auth**: Reuses Documenso authentication
- **Signing**: Documenso's PDF signing system

## Development

```bash
# Install dependencies (from monorepo root)
npm install

# Run development server
npm run dev -- --filter=@documenso/animal-adoption

# Build
npm run build -- --filter=@documenso/animal-adoption
```

## Database Models

- `AnimalAdoptionContract` - Core adoption contracts
- `MonthlyPhotoVerification` - Photo submissions and verification
- `AdoptionDispute` - Dispute reports and resolutions
- `AdopterHistory` - Adopter history tracking
- `AdoptionContractTemplate` - Admin-managed templates

## Legal Framework

This system is designed to work within Korean law where animals are legally classified as property. The high valuation (₩100M) and ownership retention creates civil liability for abuse/neglect cases where criminal penalties are weak.

### Key Legal Protections:

1. **Ownership Retention**: Adoptor retains legal ownership for 1-20 years
2. **High Valuation**: ₩100M valuation enables significant civil penalties
3. **Contract Fraud**: False information = fraud charges for ₩100M property
4. **Visitation Rights**: Pre-agreed inspection rights with notice
5. **Recovery Rights**: Immediate recovery for violations
6. **Penalty Clauses**: ₩5-10M penalties for breach

## Future Enhancements

- [ ] Full AI forgery detection integration
- [ ] Veterinary health checks integration
- [ ] Automated notification system for overdue photos
- [ ] Mobile app for easier photo submissions
- [ ] Integration with animal welfare organizations
- [ ] Blockchain-based immutable adoption records
