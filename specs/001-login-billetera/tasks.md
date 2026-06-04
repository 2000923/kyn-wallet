# Tasks: Login Feature Update

**Input**: Design documents from `/specs/002-login-spec-update/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js 14 project with TypeScript and Tailwind CSS
- [ ] T002 [P] Configure Vitest and React Testing Library in `vitest.config.ts` and `vitest.setup.ts`
- [ ] T003 [P] Setup strict `PascalCase` linting rules in `.eslintrc.json`
- [ ] T004 Create base directory structure: `app/`, `components/`, `lib/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and design tokens

- [ ] T005 [P] Define Figma design tokens in `lib/constants/DesignTokens.ts`
- [ ] T006 Integrate design tokens into `tailwind.config.ts`
- [ ] T007 Create custom UI base components (Button, Input) in `components/ui/` using tokens
- [ ] T008 [P] Implement `AuthCredentials` type in `lib/types/Auth.ts`
- [ ] T009 [P] Implement `AuthService` interface and mockup data in `lib/services/AuthService.ts`

---

## Phase 3: User Story 1 - Autenticación Exitosa (Priority: P1) 🎯 MVP

**Goal**: Complete login flow with branding and successful redirection.

**Independent Test**: Verify login with `tucorreo@ejemplo.com` redirects to `/construction`.

### Tests for User Story 1 (MANDATORY - TDD) ⚠️

- [ ] T010 [P] [US1] Create unit tests for `AuthService.login` in `lib/services/AuthService.test.ts`
- [ ] T011 [P] [US1] Create integration tests for login flow in `app/login.test.tsx`

### Implementation for User Story 1

- [ ] T012 [P] [US1] Implement `BrandPanel` component with Figma gradient and mockup in `components/BrandPanel.tsx`
- [ ] T013 [US1] Implement `LoginForm` core logic and branding in `components/LoginForm.tsx`
- [ ] T014 [US1] Setup main login page with split layout in `app/page.tsx`
- [ ] T015 [US1] Create placeholder redirect page in `app/construction/page.tsx`
- [ ] T016 [US1] Connect `LoginForm` to `AuthService` for redirection logic

---

## Phase 4: User Story 2 - Retroalimentación de Diseño y Validaciones (Priority: P2)

**Goal**: Apply exact Figma styles and real-time validations.

**Independent Test**: Inspect radio de borde 12px and verify error message on empty fields.

### Tests for User Story 2 (TDD) ⚠️

- [ ] T017 [P] [US2] Create unit tests for input validation logic in `lib/utils/Validation.test.ts`
- [ ] T018 [US2] Add UI tests for error message visibility in `components/LoginForm.test.tsx`

### Implementation for User Story 2

- [ ] T019 [P] [US2] Implement validation utility functions in `lib/utils/Validation.ts`
- [ ] T020 [US2] Update `LoginForm.tsx` with real-time validation feedback and Figma error styles
- [ ] T021 [US2] Ensure all input elements in `components/ui/` strictly follow the 12px border-radius from tokens
- [ ] T022 [US2] Apply SemiBold Inter font to the "Iniciar sesión" button in `components/ui/Button.tsx`

---

## Phase 5: User Story 3 - Interacción con Elementos Secundarios (Priority: P3)

**Goal**: Include "Recordarme", Google/Apple buttons with "Próximamente" alerts.

**Independent Test**: Click Google button and verify native alert display.

### Implementation for User Story 3

- [ ] T023 [P] [US3] Implement social login buttons in `components/SocialLogins.tsx` with Figma styles
- [ ] T024 [P] [US3] Add "Recordarme" checkbox and "Olvidaste tu contraseña" link in `components/LoginForm.tsx`
- [ ] T025 [US3] Add native alert handlers for secondary actions in `components/LoginForm.tsx` and `components/SocialLogins.tsx`
- [ ] T026 [US3] Implement the "o continúa con" divider in `components/LoginForm.tsx`

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and documentation.

- [ ] T027 [P] Verify responsive behavior of the split-panel layout in `app/page.tsx`
- [ ] T028 Run all tests and ensure 100% pass rate
- [ ] T029 [P] Update `quickstart.md` with any new environment or setup steps
- [ ] T030 Final code review for `PascalCase` compliance across all files
- [ ] T031 Perform final visual audit against Figma link

---

## Dependencies & Execution Order

- **Setup (Phase 1)** -> **Foundational (Phase 2)** -> **User Stories (Phases 3-5)** -> **Polish (Phase 6)**
- US1 is the MVP and must be completed first to provide value.
- US2 and US3 can be worked on in parallel after US1 foundational logic is stable.

## Parallel Example: User Story 1

```bash
# Launch Vitest and wait for failures:
npm run test lib/services/AuthService.test.ts app/login.test.tsx

# Then implement in parallel:
# Developer A: BrandPanel.tsx
# Developer B: AuthService.ts (Logic)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational tasks (T001-T009).
2. Complete US1 tasks (T010-T016).
3. Validate login functionality and redirection.

### Incremental Delivery

1. Foundation ready.
2. Login functional (MVP).
3. Design polished with validations (US2).
4. Secondary actions added (US3).
5. Final audit.
