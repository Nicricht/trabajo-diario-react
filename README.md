# Mi Tienda: React + TypeScript

Ejercicios de clase con Vite, React, TypeScript, React Router, Bootstrap y **Atomic Design**.

## Ejecutar en Windows (PowerShell)

```powershell
npm install
npm run dev
```

Abre la dirección que indique Vite (normalmente http://localhost:5173).

Para comprobar que TypeScript compila y que la aplicación se construye correctamente:

```powershell
npm run build
```

## Páginas

- `/`: inicio.
- `/productos`: catálogo de cuatro productos.
- `/producto/:id`: detalle de producto y botón de regreso.
- `/contacto`: formulario de contacto con validación.
- `/login`: **nuevo desafío**: correo y contraseña con validación mediante `if`.

## Desafío: crear un Login

- `src/paginas/Login.tsx`: página responsive usando la cuadrícula de Bootstrap.
- `src/components/organismos/FormularioLogin.tsx`: estados `useState`, `onSubmit`, `preventDefault`, expresiones regulares y validaciones con `if`.
- `src/components/moleculas/CampoFormulario.tsx`: molécula reutilizada en Contacto y Login.
- `src/components/atomos/Input.tsx`: átomo compartido por ambos formularios.
- `src/components/organismos/Navbar.tsx`: acceso al Login.
- `src/App.tsx`: ruta `/login` dentro de `Routes`.

El Login valida que se ingrese un correo con formato válido y que la contraseña tenga **al menos 8 caracteres**. Si todo está correcto muestra `alert("Datos ingresados correctamente")`. **No realiza autenticación ni guarda contraseñas**, tal como exige el ejercicio del profesor.

## Estructura Atomic Design

```text
src/
├── components/
│   ├── atomos/       # Input, Boton, BotonVolver
│   ├── moleculas/    # CampoFormulario, CardProducto
│   └── organismos/   # Navbar, FormularioContacto, FormularioLogin
├── paginas/          # Inicio, Productos, DetalleProducto, Contacto, Login
├── App.tsx           # Rutas
└── main.tsx          # BrowserRouter y Bootstrap
```

Las imágenes de productos están en `public/img`. No subir `node_modules/` ni `dist/` a GitHub; ambos se reconstruyen con `npm install` y `npm run build`.
