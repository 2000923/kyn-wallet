# Modelo de Datos: Login de Billetera Virtual

## Entidades de Dominio

### `User`
Representa al usuario dentro del sistema, utilizado para validar la sesión. En esta iteración, reside en memoria.

**Atributos**:
- `Email` (string): Identificador único del usuario. Debe cumplir con un formato de correo electrónico válido.
- `Password` (string): Contraseña del usuario. En un escenario real estaría hasheada, pero para esta simulación puede ser texto plano.
- `Name` (string): Nombre a mostrar en la interfaz (opcional, para futura personalización).

**Reglas de Validación**:
- `Email` no puede estar vacío y debe contener un símbolo `@` y un dominio.
- `Password` no puede estar vacío.

## Repositorios (Interfaces)

### `IUserRepository`
Define los contratos para interactuar con la persistencia de usuarios, independizando los casos de uso de si los datos vienen de una base de datos, una API o están "hardcodeados".

**Métodos**:
- `FindByEmail(email: string): Promise<User | null>`: Busca un usuario por su correo.

## Estados de Autenticación (Manejo de Sesión Simulado)

Dado que no se usan librerías externas complejas para manejo de estado global (como Redux) o de sesión (como NextAuth), la sesión puede simularse mediante:
- Guardar una bandera simple en `localStorage` o `sessionStorage` (ej. `isAuthenticated: true`) temporalmente para proteger la ruta `/construction`, o
- Usar un estado simple de React si se navega a nivel de componentes cliente. Sin embargo, para enrutamiento en Next.js, una cookie o `localStorage` es la opción más viable usando APIs nativas.