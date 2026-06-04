# Research: Login Implementation

## Decision: Testing Framework
- **Decision**: Vitest + React Testing Library + JSDOM.
- **Rationale**: 
    - **Performance**: Instant watch mode and faster execution compared to Jest.
    - **Modern Stack**: Native ESM and TypeScript support align with Next.js 14.
    - **DX**: API compatibility with Jest makes it easy to use while providing a better developer experience.
- **Alternatives considered**: 
    - **Jest**: Rejected due to complex configuration with ESM/Next.js and slower startup times.
    - **Cypress/Playwright**: Will be used for E2E if needed, but not as the primary unit/integration test runner for TDD logic.

## Decision: Design Token Mapping
- **Decision**: Centralized TypeScript definition in `lib/constants/DesignTokens.ts` imported into `tailwind.config.ts`.
- **Rationale**: 
    - **Type Safety**: Ensures design tokens are consistent across the app.
    - **Maintainability**: Single source of truth for Figma values.
    - **Tailwind Integration**: Easy to extend the theme in `tailwind.config.ts` by importing the object.
- **Alternatives considered**: 
    - **Direct Hardcoding**: Rejected as it violates maintainability and DRY principles.
    - **CSS Variables only**: Rejected as it loses Tailwind's utility class benefits and type-safe config.

## Decision: Component Architecture
- **Decision**: Clean Architecture approach with a split between UI components and logic.
- **Rationale**: 
    - **SOLID**: Separating `LoginForm` (UI) from `AuthService` (Logic).
    - **Clean Architecture**: Domain entities (User) and Use Cases (Login) separated from Infrastructure (Next.js components).
- **Alternatives considered**: 
    - **Everything in Page**: Rejected as it violates SRP and Clean Architecture principles.

## Decision: Brand Panel Implementation
- **Decision**: Pure CSS/Tailwind implementation of the gradient and mockup layout.
- **Rationale**: 
    - **Performance**: No extra SVG assets or heavy images where CSS suffices.
    - **Constraint Compliance**: Zero external libraries.
- **Alternatives considered**: 
    - **Figma Exported SVG**: Rejected to maintain control over responsiveness and animations via code.
