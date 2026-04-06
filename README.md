# Sales Training Platform Monorepo

This monorepo contains a full-stack training and certification platform:

- **apps/mobile**: Expo React Native app for learners.
- **apps/admin**: Next.js app for administrators.
- **packages/ui**: Shared UI primitives.
- **packages/types**: Shared domain types.
- **packages/utils**: Shared utility functions.
- **supabase**: Database migrations and seed scripts.

## Quick start

```bash
pnpm install
pnpm dev
```

## Workspace tasks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Environment templates

Copy each `.env.example` to `.env.local` (or `.env`) within each app/package and populate values.
