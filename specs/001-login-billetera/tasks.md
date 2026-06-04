---
description: "Lista de tareas para la implementación del feature Login Billetera"
---

# Tasks: Login Billetera Virtual

**Input**: Design documents from `specs/001-login-billetera/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md, contracts/internal-auth.md

**Tests**: Tests are MANDATORY as per the TDD constraint in the constitution.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Next.js project with Tailwind CSS per plan
- [ ] T002 Configure Jest and React Testing Library for TDD
- [ ] T003 Create directory structure (`app/`, `components/`, `lib/Domain`, `lib/UseCases`, `lib/Adapters`)
- [ ] T004 [P] Configure strict formatting rules (PascalCase enforcement where applicable)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [ ] T005 [P] Create `User` entity model in `lib/Domain/User.ts`
- [ ] T006 [P] Create `IUserRepository` interface in `lib/Domain/IUserRepository.ts`
- [ ] T007 Implement `HardcodedUserRepository` in `lib/Adapters/HardcodedUserRepository.ts`
- [ ] T008 [P] Define `LoginRequest` and `LoginResponse` contracts in `lib/UseCases/AuthContracts.ts`
- [ ] T009 Implement `AuthenticateUserUseCase` in `lib/UseCases/AuthenticateUserUseCase.ts`

**Checkpoint**: Foundation ready - domain logic and use cases are implemented and ready for UI integration.

---

## Phase 3: User Story 1 - Autenticación Exitosa (Prioridad: P1) 🎯 MVP

**Goal**: Permitir al usuario ingresar correo y contraseña válidos para acceder y ser redirigido a la pantalla en construcción.

**Independent Test**: Probar con credenciales hardcodeadas correctas que el sistema redirija a la pantalla "en construcción".

### Tests for User Story 1 (MANDATORY - TDD Enforced) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T010 [P] [US1] Write test for LoginForm successful submission in `__tests__/components/LoginForm.success.test.tsx`
- [ ] T011 [P] [US1] Write test for Login page redirection in `__tests__/app/login/page.success.test.tsx`

### Implementation for User Story 1

- [ ] T012 [P] [US1] Create basic `Input` UI component in `components/ui/Input.tsx`
- [ ] T013 [P] [US1] Create basic `Button` UI component in `components/ui/Button.tsx`
- [ ] T014 [US1] Implement `LoginForm` component with basic state in `components/login/LoginForm.tsx`
- [ ] T015 [US1] Integrate `AuthenticateUserUseCase` into `LoginForm` using Next.js native fetching/server actions or client-side logic in `components/login/LoginForm.tsx`
- [ ] T016 [US1] Implement session saving (e.g. cookies or localStorage) upon successful login in `components/login/LoginForm.tsx`
- [ ] T017 [US1] Create the `/construction` protected page in `app/(protected)/construction/page.tsx`
- [ ] T018 [US1] Implement redirection to `/construction` in `LoginForm.tsx` on success
- [ ] T019 [US1] Create the Login page integrating `LoginForm` in `app/(auth)/login/page.tsx`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Manejo de Credenciales Inválidas (Prioridad: P2)

**Goal**: Proveer retroalimentación visual al usuario si ingresa credenciales incorrectas.

**Independent Test**: Intentar ingresar con correos o contraseñas no existentes en la lista hardcodeada y observar el error.

### Tests for User Story 2 (MANDATORY - TDD Enforced) ⚠️

- [ ] T020 [P] [US2] Write test for LoginForm invalid credentials in `__tests__/components/LoginForm.invalid.test.tsx`
- [ ] T021 [P] [US2] Write test for empty field validation in `__tests__/components/LoginForm.validation.test.tsx`

### Implementation for User Story 2

- [ ] T022 [US2] Add empty field validation logic (native, no libraries) to `LoginForm` in `components/login/LoginForm.tsx`
- [ ] T023 [US2] Display error message from `AuthenticateUserUseCase` when credentials fail in `components/login/LoginForm.tsx`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Interacción con Formulario y Accesibilidad (Prioridad: P3)

**Goal**: Construir la interfaz visual (Brand Panel y estructura del layout) basada en el diseño de Figma y agregar acciones secundarias inertes.

**Independent Test**: Verificar visualmente la disposición (layout dividido) y la interactividad básica de los botones secundarios.

### Tests for User Story 3 (MANDATORY - TDD Enforced) ⚠️

- [ ] T024 [P] [US3] Write test for secondary button alerts in `__tests__/components/LoginForm.secondary.test.tsx`
- [ ] T025 [P] [US3] Write test for BrandPanel rendering in `__tests__/components/BrandPanel.test.tsx`

### Implementation for User Story 3

- [ ] T026 [P] [US3] Implement `BrandPanel` component matching Figma design in `components/login/BrandPanel.tsx`
- [ ] T027 [US3] Update Login page layout to side-by-side view integrating `BrandPanel` in `app/(auth)/login/page.tsx`
- [ ] T028 [US3] Add inert secondary options ("Recordarme", "¿Olvidaste tu contraseña?", Google/Apple buttons) to `LoginForm` with `window.alert("Próximamente")` in `components/login/LoginForm.tsx`
- [ ] T029 [US3] Apply Tailwind CSS styling to match Figma aesthetics in `components/login/LoginForm.tsx` and `app/(auth)/login/page.tsx`

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T030 Apply strict route protection (middleware or layout check) to `app/(protected)/construction/page.tsx`
- [ ] T031 Clean up code and ensure strict PascalCase compliance across all components
- [ ] T032 Final check of accessibility (tab navigation through the form)
- [ ] T033 Verify all tests pass

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion. BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational phase. Proceed in priority order (P1 → P2 → P3).
- **Polish (Final Phase)**: Depends on all user stories being complete.

### Implementation Strategy
1. **MVP First**: Complete Setup -> Foundational -> User Story 1. Validate login and redirection before continuing.
2. **Incremental**: Add validation (US2), then visual polish (US3).
