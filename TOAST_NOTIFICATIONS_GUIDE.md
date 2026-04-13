# 🔔 Toast Notifications - react-toastify

## 📦 Instalación Completada

✅ react-toastify ha sido instalado y configurado en el proyecto.

---

## 🎯 Configuración

### 1. ToastContainer en main.tsx
El `ToastContainer` está configurado globalmente en `src/main.tsx`:

```tsx
<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>
```

**Configuración por defecto:**
- 📍 Posición: Arriba a la derecha (top-right)
- ⏱️ Auto-cierre: 3 segundos
- 🖱️ Clickeable: Se cierra al hacer clic
- 📤 Draggable: Se puede arrastrar
- ⏸️ Pausa en hover: Se pausa cuando pasas el ratón sobre él

---

## 🪝 Hook personalizado: useToast

Se ha creado un hook `useToast` para simplificar el uso de notificaciones:

### Ubicación
```
src/hooks/useToast.ts
```

### Métodos disponibles

```typescript
const {
  showSuccess,      // ✅ Notificación de éxito
  showError,        // ❌ Notificación de error
  showWarning,      // ⚠️ Notificación de advertencia
  showInfo,         // ℹ️ Notificación informativa
  showLoading,      // ⏳ Notificación de carga (retorna ID)
  updateToast,      // 🔄 Actualiza un toast existente
  dismiss,          // ❌ Cierra un toast específico o todos
} = useToast();
```

---

## 💻 Ejemplos de Uso

### 1. Notificación de Éxito

```tsx
import { useToast } from "../../hooks/useToast";

function MyComponent() {
  const { showSuccess } = useToast();

  const handleSave = () => {
    showSuccess("Cambios guardados exitosamente");
  };

  return <button onClick={handleSave}>Save</button>;
}
```

### 2. Notificación de Error

```tsx
const { showError } = useToast();

const handleDelete = async () => {
  try {
    await deleteItem();
  } catch (error) {
    showError("No se pudo eliminar el elemento");
  }
};
```

### 3. Notificación de Advertencia

```tsx
const { showWarning } = useToast();

const handleExpiration = () => {
  showWarning("Tu sesión está por expirar en 5 minutos");
};
```

### 4. Notificación Informativa

```tsx
const { showInfo } = useToast();

const handleLogout = () => {
  showInfo("Has cerrado sesión exitosamente");
};
```

### 5. Notificación de Carga con Actualización

```tsx
const { showLoading, updateToast } = useToast();

const handleUpload = async () => {
  const toastId = showLoading("Subiendo archivo...");

  try {
    await uploadFile();
    updateToast(toastId, {
      render: "Archivo subido exitosamente",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } catch (error) {
    updateToast(toastId, {
      render: "Error al subir el archivo",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};
```

### 6. Cerrar Toast Específico

```tsx
const { showSuccess, dismiss } = useToast();

const toastId = showSuccess("Operación completada");

// Después de 2 segundos
setTimeout(() => {
  dismiss(toastId);
}, 2000);
```

### 7. Cerrar Todos los Toasts

```tsx
const { dismiss } = useToast();

const closeAllNotifications = () => {
  dismiss();
};
```

---

## 📚 Casos Implementados Actualmente

### 1. Eliminar Certificado (CertificateViewerModal)
```tsx
showSuccess(`Certificate "${certificate.name}" deleted successfully`);
showError("Failed to delete certificate");
```

### 2. Eliminar CV (CVDocsTab)
```tsx
showSuccess(`"${fileName}" deleted successfully`);
showError("Failed to delete CV");
```

### 3. Logout (LogoutButton)
```tsx
showInfo("You have been logged out successfully");
```

---

## 🎨 Tipos de Toast Disponibles

| Tipo | Método | Color | Icono |
|------|--------|-------|-------|
| **Success** | `showSuccess()` | 🟢 Verde | ✅ |
| **Error** | `showError()` | 🔴 Rojo | ❌ |
| **Warning** | `showWarning()` | 🟡 Naranja | ⚠️ |
| **Info** | `showInfo()` | 🔵 Azul | ℹ️ |
| **Loading** | `showLoading()` | ⚪ Gris | ⏳ |

---

## ⚙️ Opciones Personalizadas

Puedes pasar opciones adicionales a cada notificación:

```tsx
const { showSuccess } = useToast();

showSuccess("Mensaje personalizado", {
  position: "bottom-center",      // Cambiar posición
  autoClose: 5000,                // Cambiar tiempo de cierre
  hideProgressBar: true,          // Ocultar barra de progreso
  closeOnClick: false,            // Deshabilitar cierre al click
  pauseOnHover: false,            // Deshabilitar pausa en hover
  draggable: false,               // Deshabilitar arrastre
  theme: "dark",                  // Cambiar tema (light/dark/colored)
});
```

---

## 📍 Posiciones Disponibles

```typescript
"top-left"      // Arriba a la izquierda
"top-center"    // Arriba al centro
"top-right"     // Arriba a la derecha (por defecto)
"bottom-left"   // Abajo a la izquierda
"bottom-center" // Abajo al centro
"bottom-right"  // Abajo a la derecha
```

---

## 🎭 Temas Disponibles

```typescript
"light"    // Tema claro (por defecto)
"dark"     // Tema oscuro
"colored"  // Colores más vibrantes
```

---

## 💡 Mejores Prácticas

### ✅ DO

```tsx
// 1. Mensajes claros y concisos
showSuccess("Profile updated successfully");

// 2. Especificar el tipo de acción
showError("Failed to upload file");

// 3. Usar toast en operaciones asincrónicas
try {
  await api.delete(id);
  showSuccess("Item deleted");
} catch (error) {
  showError("Delete failed");
}

// 4. Usar loading toast para operaciones largas
const id = showLoading("Processing...");
// ... después actualizar
updateToast(id, { render: "Done!", type: "success" });
```

### ❌ DON'T

```tsx
// ❌ No usar console.log (los usuarios no lo ven)
console.log("Item deleted");

// ❌ No usar alert() (experiencia pobre)
alert("Error!");

// ❌ No saturar con toasts
showSuccess("A");
showSuccess("B");
showSuccess("C");

// ❌ No usar mensajes muy largos
showError("This is a very long error message that doesn't fit properly");
```

---

## 🔄 Flujo de Operación Asincrónica

```tsx
async function handleUpload() {
  // 1. Mostrar loading
  const id = showLoading("Uploading file...");

  try {
    // 2. Ejecutar operación
    const result = await uploadFile();

    // 3. Actualizar a éxito
    updateToast(id, {
      render: "File uploaded successfully!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } catch (error) {
    // 4. Actualizar a error
    updateToast(id, {
      render: "Upload failed: " + error.message,
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
}
```

---

## 📦 Estructura de Archivos

```
src/
├── hooks/
│   └── useToast.ts                ← Hook personalizado
├── main.tsx                       ← ToastContainer configurado
├── features/
│   └── crew/components/
│       ├── CertificateViewerModal.tsx  ✅ Con toast integrado
│       └── CVDocsTab.tsx               ✅ Con toast integrado
└── components/
    └── common/
        └── LogoutButton.tsx           ✅ Con toast integrado
```

---

## 🚀 Próximas Integraciones

Puedes agregar toasts en:

- 📝 Formularios de envío
- 🔐 Autenticación (login, registro)
- ⚙️ Cambios de configuración
- 📤 Descargas y subidas
- 🔔 Notificaciones del sistema
- 🎯 Validaciones de formularios

---

## 📚 Recursos

- [react-toastify Documentation](https://fkhadra.github.io/react-toastify/introduction)
- [API Reference](https://fkhadra.github.io/react-toastify/api/toast)
- [Advanced Usage](https://fkhadra.github.io/react-toastify/advanced)

---

## ✨ ¡Listo para Usar!

El sistema de toasts está completamente configurado e integrado. Solo necesitas importar y usar `useToast()` en tus componentes.

```tsx
import { useToast } from "../hooks/useToast";

function MyComponent() {
  const { showSuccess, showError } = useToast();
  // ... uso de toasts
}
```
