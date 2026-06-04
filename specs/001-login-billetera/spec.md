# Especificación de Funcionalidad: Login de Billetera Virtual

**Feature Branch**: `001-login-billetera`  
**Creado**: 2026-06-03  
**Estado**: Borrador  
**Entrada**: "Construye la pantalla de login de una billetera virtual para eso utiliza el MCP de figma... la autenticacion va ser simulada con usuarios harcodeados. Login exitoso lo debe redirigir a una pantalla en construcción."

## Escenarios de Usuario y Pruebas *(obligatorio)*

### Historia de Usuario 1 - Autenticación Exitosa (Prioridad: P1)

Como usuario registrado de la billetera virtual, quiero ingresar mi correo y contraseña válidos para acceder a mi cuenta.

**Por qué esta prioridad**: Es el flujo principal de acceso a la aplicación, sin él los usuarios no pueden utilizar su billetera.

**Prueba Independiente**: Se puede probar verificando que al ingresar credenciales hardcodeadas correctas, el sistema redirige a la pantalla "en construcción".

**Escenarios de Aceptación**:

1. **Dado** que el usuario se encuentra en la pantalla de Login, **Cuando** ingresa credenciales válidas y hace clic en "Iniciar sesión", **Entonces** el sistema valida la entrada y redirige al usuario a la pantalla de "En construcción".

---

### Historia de Usuario 2 - Manejo de Credenciales Inválidas (Prioridad: P2)

Como usuario, quiero recibir retroalimentación visual si ingreso mis credenciales incorrectamente para poder corregirlas e intentar de nuevo.

**Por qué esta prioridad**: Evita frustración y confusión en caso de que el usuario cometa un error tipográfico.

**Prueba Independiente**: Se puede probar intentando ingresar con correos o contraseñas que no existan en la lista hardcodeada.

**Escenarios de Aceptación**:

1. **Dado** que el usuario se encuentra en la pantalla de Login, **Cuando** ingresa un correo o contraseña incorrecta y hace clic en "Iniciar sesión", **Entonces** se muestra un mensaje de error claro y no se le permite avanzar.

---

### Historia de Usuario 3 - Interacción con Formulario y Accesibilidad (Prioridad: P3)

Como usuario, quiero poder ver el diseño de la billetera KynWallet junto al formulario, y poder navegar de forma accesible mediante teclado por los campos de correo, contraseña y botones.

**Por qué esta prioridad**: Garantiza que la experiencia visual coincida con el prototipo y que la interfaz sea usable.

**Prueba Independiente**: Carga visual de la pantalla y uso de la tecla TAB para navegar por los controles.

**Escenarios de Aceptación**:

1. **Dado** que un usuario abre la aplicación, **Cuando** se muestra la pantalla de inicio, **Entonces** debe visualizar el panel izquierdo de la marca (KynWallet) y el formulario derecho según el diseño provisto.

---

### Casos Extremos (Edge Cases)

- ¿Qué sucede si el usuario intenta enviar el formulario con campos vacíos? (Debería mostrar error de validación de entradas).
- ¿Qué sucede si el formato del correo electrónico ingresado no es válido (ej. `correo_sin_arroba.com`)?

## Requisitos *(obligatorio)*

### Restricciones de Seguridad y Validación *(obligatorio)*

- **Restricción**: Todas las entradas del usuario DEBEN ser rigurosamente validadas antes de su procesamiento (ej. formato de email válido, contraseñas no vacías).
- **Restricción**: Todas las rutas protegidas (ej. pantalla en construcción) DEBEN requerir autenticación antes de otorgar acceso.
- **Restricción**: El uso de librerías externas está estrictamente prohibido. Toda validación y lógica debe ser código propio.
- **Restricción**: Se debe usar `PascalCase` para el nombramiento de las estructuras relevantes.

### Requisitos Funcionales

- **FR-001**: El sistema DEBE mostrar una pantalla dividida en dos secciones: un panel de marca a la izquierda y un formulario de inicio de sesión a la derecha, coincidiendo con el diseño referenciado.
- **FR-002**: El sistema DEBE incluir campos para "Correo electrónico" y "Contraseña", y un botón principal de "Iniciar sesión".
- **FR-003**: El sistema DEBE proveer validación en tiempo real para asegurar que los campos no estén vacíos antes del envío.
- **FR-004**: El sistema DEBE validar el correo y contraseña contra un arreglo/lista estricta de usuarios "hardcodeados" en el sistema.
- **FR-005**: El sistema DEBE redirigir al usuario a una pantalla de "En construcción" ante una validación exitosa.
- **FR-006**: El sistema DEBE incluir opciones visuales inactivas para "Recordarme", "¿Olvidaste tu contraseña?", registro y botones de redes sociales (Google, Apple) según el diseño. Estas opciones secundarias mostrarán una alerta nativa de "Próximamente" o "No disponible" al hacer clic en ellas.

### Entidades Clave

- **User**: Representa a un usuario simulado. Atributos: `Email`, `Password`.

## Criterios de Éxito *(obligatorio)*

### Resultados Medibles

- **SC-001**: Los usuarios pueden completar el inicio de sesión exitoso en menos de 30 segundos si conocen sus credenciales.
- **SC-002**: El sistema deniega consistentemente el acceso a cualquier par de credenciales no registradas en la lista hardcodeada.
- **SC-003**: La UI es responsiva y replica de manera fiel (hasta donde el código propio lo permita) la disposición del prototipo original.

## Suposiciones

- Dado que no se permite el uso de librerías externas, se asumirá el uso de elementos nativos de la plataforma destino (ej. HTML/CSS/Vanilla JS para web) o de los frameworks base explícitamente autorizados, simulando estados en memoria.
- La lista de usuarios hardcodeados constará de al menos 2 pares de usuario/contraseña de prueba conocidos (ej. `tucorreo@ejemplo.com` / `12345678`).
- Los botones de Google/Apple son elementos meramente decorativos en esta versión.
