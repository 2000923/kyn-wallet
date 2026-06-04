# Inicio Rápido: Login de Billetera Virtual

Este documento describe cómo levantar el entorno y ejecutar la prueba inicial de la funcionalidad de inicio de sesión.

## Requisitos Previos

- Node.js (v18+)
- Gestor de paquetes: `npm` o `pnpm` o `yarn`

## Instalación

Puesto que es un proyecto Next.js estándar, instala las dependencias de la plataforma (React, Next, Tailwind):

```bash
npm install
```
*(Nota: Asegúrate de no instalar librerías adicionales de validación de formularios ni llamadas HTTP).*

## Ejecución Local

Para levantar el entorno de desarrollo:

```bash
npm run dev
```

Navega a `http://localhost:3000/login` para ver el panel de inicio de sesión desarrollado según el prototipo de Figma.

## Casos de Uso Rápidos a Probar

1. **Intento fallido**: Ingresa cualquier credencial inventada (ej. `test@test.com` / `123`) y verifica que se muestre el mensaje de error.
2. **Validación de UI**: Asegúrate que no puedas enviar el formulario vacío.
3. **Inicio de Sesión Exitoso**:
   - Una vez codificado, revisa el archivo `HardcodedUserRepository.ts` (en `lib/Adapters/`) para obtener un correo y contraseña válidos configurados.
   - Ingresa dichos datos en la UI.
   - Verifica que la aplicación redirija automáticamente a la ruta `/construction`.