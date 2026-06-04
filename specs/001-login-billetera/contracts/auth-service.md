# Contract: AuthService

## Definition
Servicio encargado de la lógica de autenticación simulada.

### Interface
```typescript
interface AuthService {
  /**
   * Valida las credenciales contra el arreglo hardcodeado.
   * @param credentials Objeto con Email y Password.
   * @returns Promise<boolean> True si es válido, False de lo contrario.
   */
  login(credentials: AuthCredentials): Promise<boolean>;

  /**
   * Verifica si hay una sesión activa.
   */
  isAuthenticated(): boolean;
}
```

## Constraints
- No debe persistir datos en localStorage/sessionStorage para esta versión (simulación pura en memoria).
- Debe retornar errores descriptivos para campos vacíos o formatos inválidos.
