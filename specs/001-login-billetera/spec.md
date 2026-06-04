# Especificación de Funcionalidad: Actualización de Login con Diseño Figma

**Feature Branch**: `002-login-spec-update`  
**Creado**: 2026-06-04  
**Estado**: Borrador  
**Entrada**: "Actualiza el spec del login. Usa el MCP de Figma para obtener el contexto de diseño de este frame: https://www.figma.com/design/f7uDsv8sh6ZOtK2OitTqtg/Billetera-Virtual---Prototipos?node-id=2-2&t=tZepRnS4l8ITDqOs-4 Los colores, tipografía y estructura del formulario deben coincidir con el diseño de Figma (login)."

## Escenarios de Usuario y Pruebas *(obligatorio)*

### Historia de Usuario 1 - Autenticación Exitosa (Prioridad: P1)

Como usuario registrado, quiero ingresar mi correo y contraseña válidos en un formulario que refleje la identidad visual de KynWallet para acceder a mi cuenta.

**Por qué esta prioridad**: Es el flujo crítico de entrada. La identidad visual genera confianza y profesionalismo.

**Prueba Independiente**: Se puede probar verificando que al ingresar credenciales correctas (ej. tucorreo@ejemplo.com / 12345678), el sistema redirige a la pantalla de "En construcción" y que la UI coincide con los colores brand (#ff6b3d) y tipografía Inter.

**Escenarios de Aceptación**:

1. **Dado** que el usuario está en la pantalla de Login, **Cuando** ingresa un correo y contraseña válidos y presiona "Iniciar sesión", **Entonces** el sistema valida los datos y lo redirige a la pantalla de éxito.
2. **Dado** que el usuario visualiza el panel izquierdo, **Cuando** observa la marca, **Entonces** debe ver el degradado naranja y la tarjeta de mockup con los datos de "STEVEN LUNA" y el logo de "KynWallet".

---

### Historia de Usuario 2 - Retroalimentación de Diseño y Validaciones (Priority: P2)

Como usuario, quiero que los campos de entrada y botones tengan el estilo visual definido en Figma (bordes redondeados de 12px, colores neutros específicos) para tener una experiencia coherente.

**Por qué esta prioridad**: La consistencia visual es clave para la usabilidad y la percepción de calidad del producto.

**Prueba Independiente**: Inspección visual de los elementos: radio de borde de 12px en inputs y botón principal, color de texto #16182c para encabezados.

**Escenarios de Aceptación**:

1. **Dado** que el usuario interactúa con los inputs, **Cuando** el campo está vacío o tiene un formato inválido, **Entonces** el sistema debe mostrar una validación visual que respete el estilo del formulario.
2. **Dado** que el usuario ve el botón de "Iniciar sesión", **Cuando** lo presiona, **Entonces** debe tener el color de fondo #ff6b3d y texto blanco en SemiBold.

---

### Historia de Usuario 3 - Interacción con Elementos Secundarios (Priority: P3)

Como usuario, quiero ver las opciones de "Recordarme", "¿Olvidaste tu contraseña?" y los accesos sociales (Google/Apple) con el diseño de Figma, aunque su funcionalidad sea limitada en esta fase.

**Por qué esta prioridad**: Completa la interfaz visual según el prototipo de alta fidelidad.

**Prueba Independiente**: Verificación de la presencia del divisor "o continúa con" y los botones sociales con borde de 1.5px color #d7d9e6.

**Escenarios de Aceptación**:

1. **Dado** que el usuario ve la sección de redes sociales, **Cuando** hace clic en Google o Apple, **Entonces** el sistema muestra un aviso de "Funcionalidad próximamente".

---

### Casos Extremos

- ¿Cómo se comporta el degradado del panel izquierdo en pantallas con relaciones de aspecto muy anchas o muy estrechas?
- ¿Qué sucede si el usuario intenta ingresar una contraseña de menos de 8 caracteres (según los puntos del mockup)?

## Requisitos *(obligatorio)*

### Restricciones de Seguridad y Validación *(obligatorio)*

- **Restricción**: Todas las entradas del usuario DEBEN ser rigurosamente validadas antes del procesamiento.
- **Restricción**: Todas las rutas protegidas DEBEN requerir autenticación previa.
- **Restricción**: El uso de librerías externas para la UI o lógica está estrictamente prohibido.
- **Restricción**: Se debe usar `PascalCase` para el nombramiento de las estructuras relevantes.

### Requisitos Funcionales

- **FR-001**: El sistema DEBE implementar un diseño de pantalla dividida: Panel de Marca (Brand Panel) a la izquierda y Panel de Formulario (Form Panel) a la derecha.
- **FR-002**: El **Brand Panel** DEBE tener un fondo con gradiente lineal de 121.19° desde `rgb(255, 138, 101)` hasta `rgb(239, 82, 38)`.
- **FR-003**: El sistema DEBE usar la tipografía **Inter** en sus variantes Bold, SemiBold, Medium y Regular según se especifica en el diseño.
- **FR-004**: El **Formulario** DEBE incluir campos de "Correo electrónico" y "Contraseña" con bordes redondeados de 12px y color de borde `#d7d9e6`.
- **FR-005**: El botón de "Iniciar sesión" DEBE tener el color `#ff6b3d`, texto blanco SemiBold de 16px y bordes redondeados de 12px.
- **FR-006**: Los encabezados DEBEN usar el color `#16182c` (Neutral 900) y los textos secundarios el color `#8a8ca8` (Neutral 500).
- **FR-007**: El sistema DEBE incluir un mockup de tarjeta (Card Mockup) en el panel izquierdo con fondo `rgba(255, 255, 255, 0.16)` y borde `rgba(255, 255, 255, 0.35)`.
- **FR-008**: El sistema DEBE mostrar opciones de acceso social (Google, Apple) con bordes de 1.5px color `#d7d9e6`.

### Entidades Clave

- **AuthCredentials**: Representa los datos de acceso del usuario. Atributos: `Email`, `Password`.
- **UIStyles**: Definición de los tokens de diseño (colores, espaciados, bordes) extraídos de Figma.

## Criterios de Éxito *(obligatorio)*

### Resultados Medibles

- **SC-001**: La interfaz del Login coincide visualmente en un 95% con el diseño de Figma proporcionado (disposición, colores y tipografía).
- **SC-002**: El formulario es funcional y permite el acceso con las credenciales hardcodeadas en menos de 2 segundos de procesamiento.
- **SC-003**: Todos los elementos de entrada (inputs, checkbox, botones) tienen el radio de borde de 12px (o 6px para el checkbox de Recordarme) según el diseño.

## Suposiciones

- Se asume que el usuario tiene instalada la fuente "Inter" o que el sistema la cargará como recurso local.
- Los activos visuales (logo, iconos sociales) se simularán mediante elementos CSS o placeholders si no están disponibles como archivos individuales.
- El panel de marca ocupa un ancho fijo de 620px en la resolución de diseño (1440x1024), escalando proporcionalmente o manteniendo su estructura.
- Las interacciones sociales y de recuperación de contraseña son meramente visuales para esta versión.
