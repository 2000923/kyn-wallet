# Data Model: Login

## Entities

### User
Representa a un usuario registrado en el sistema (simulado).

| Campo | Tipo | Validación | Descripción |
|-------|------|------------|-------------|
| `Email` | `string` | Regex (email) | Correo electrónico único. |
| `Password` | `string` | Min 8 chars | Contraseña de acceso. |

### DesignTokens
Mapa de valores visuales extraídos de Figma.

| Token | Valor Figma | Aplicación |
|-------|-------------|------------|
| `BrandPrimary` | `#ff6b3d` | Botón principal, acentos. |
| `BrandGradientStart` | `rgb(255, 138, 101)` | Fondo Brand Panel. |
| `BrandGradientEnd` | `rgb(239, 82, 38)` | Fondo Brand Panel. |
| `Neutral900` | `#16182c` | Títulos principales. |
| `Neutral500` | `#8a8ca8` | Textos secundarios. |
| `Neutral300` | `#d7d9e6` | Bordes y divisores. |
| `BorderRadiusLg` | `12px` | Inputs y botones. |
| `BorderRadiusMd` | `6px` | Checkbox. |

## Relationships
- Un `User` intenta autenticarse mediante el `LoginForm`.
- `LoginForm` aplica los `DesignTokens` para su representación visual.
