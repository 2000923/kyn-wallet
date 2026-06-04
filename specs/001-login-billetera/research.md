# Investigación Técnica: Login de Billetera Virtual

## Decisión: Stack Tecnológico (React + Next.js + Tailwind) vs Constitución (Cero librerías)

- **Decisión**: Se utilizará React, Next.js (App Router) y Tailwind CSS como la base fundamental del proyecto. No se instalará ninguna otra librería externa para validación (ej. Zod, Yup), manejo de formularios (React Hook Form) o peticiones HTTP (Axios).
- **Justificación**: El usuario especificó expresamente el uso de estas tecnologías, lo cual anula de facto la directiva general de la constitución sobre cero librerías para la infraestructura principal. Sin embargo, para honrar el espíritu de la constitución, todo lo demás (lógica de dominio, validaciones, mocks de base de datos) se escribirá desde cero utilizando capacidades nativas de JavaScript/TypeScript y React.
- **Alternativas consideradas**: Usar Vanilla JS como dictaba la constitución original. Se rechazó porque la instrucción del usuario prevalece.

## Decisión: Implementación de Arquitectura Limpia en Next.js

- **Decisión**: La carpeta `lib/` alojará estrictamente las capas interiores:
  - `lib/Domain/`: Entidades (ej. `User.ts`) y contratos de repositorios.
  - `lib/UseCases/`: Lógica de aplicación (ej. `AuthenticateUserUseCase.ts`).
  - `lib/Adapters/`: Implementaciones concretas (ej. `HardcodedUserRepository.ts`).
  La interfaz gráfica (`app/` y `components/`) actuará como la capa más externa, comunicándose únicamente con los Casos de Uso.
- **Justificación**: Mantiene el desacoplamiento requerido por la constitución. Permite cambiar fácilmente de una base de datos "hardcodeada" a una real en el futuro sin tocar la interfaz ni la lógica central.
- **Alternativas consideradas**: Poner toda la lógica dentro de los componentes React (Server Actions / Route Handlers mezclados con lógica). Se rechazó por violar la separación de responsabilidades y la constitución.

## Decisión: Manejo de Estado y Formularios

- **Decisión**: Se usarán estados nativos de React (`useState`) y manejo nativo de eventos del DOM para el formulario de login, junto con validaciones personalizadas en cliente.
- **Justificación**: Evita el uso de librerías externas de formularios, cumpliendo parcialmente la restricción de la constitución.
- **Alternativas consideradas**: Formik o React Hook Form (rechazados por ser librerías externas).

## Decisión: Comportamiento de Enlaces Secundarios

- **Decisión**: Se implementarán como botones visuales que disparan una alerta del navegador nativa (`window.alert("Próximamente")`) o similar, sin alterar el estado.
- **Justificación**: La especificación demandaba que fueran visualmente inactivos o mostraran inactividad. Una alerta es nativa, no requiere librerías, y deja claro que es funcionalidad futura.
