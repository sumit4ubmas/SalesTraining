# Clean TypeScript Architecture

## Principles

- Keep domain types in `packages/types`.
- Keep side-effect-free shared helpers in `packages/utils`.
- Keep reusable presentational UI in `packages/ui`.
- Keep app-specific orchestration in each app's `features/` and `lib/` folders.

## Apps

### `apps/mobile`

- `App.tsx` is a thin composition root.
- App logic consumes contracts from shared packages.

### `apps/admin`

- `src/features/*` holds business use-cases and selectors.
- `src/components/*` holds view components.
- `src/lib/*` holds infrastructure adapters (env, API clients).
