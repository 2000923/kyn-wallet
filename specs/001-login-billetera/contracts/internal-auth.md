# Interfaces y Contratos: Login

Este proyecto es una aplicación web renderizada en el servidor/cliente, por lo que no expone una API pública consumible por terceros. Los contratos definidos aquí representan la interfaz interna entre la capa de interfaz de usuario (UI) y los Casos de Uso.

## Authentication Use Case Contract

El controlador/UI se comunicará con la capa de aplicación usando este contrato.

**Input (Request Model)**:
```typescript
interface LoginRequest {
  Email: string;
  Password: string;
}
```

**Output (Response Model)**:
```typescript
interface LoginResponse {
  Success: boolean;
  Error?: string; // Mensaje de error si Success es false
  User?: {
    Email: string;
    Name: string;
  };
}
```