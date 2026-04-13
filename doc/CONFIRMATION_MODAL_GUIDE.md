## Confirmation Modal - Componente General Reutilizable

### Descripción

El componente `ConfirmationModal` es un modal de confirmación general reutilizable que centraliza todos los diálogos de confirmación de la aplicación. Se utiliza actualmente en:

- ✅ **Borrar certificado** - En el visor de certificados
- ✅ **Borrar CV** - En la sección de CV y documentos
- ✅ **Logout** - Para confirmación de cierre de sesión (a través del hook `useLogoutModal`)

---

## Componentes Creados

### 1. ConfirmationModal (`src/components/common/ConfirmationModal.tsx`)

Componente modal principal reutilizable.

#### Props

```typescript
interface ConfirmationModalProps {
  isOpen: boolean;           // Control de visibilidad del modal
  onClose: () => void;       // Callback cuando se cierra el modal
  onConfirm: () => void | Promise<void>;  // Callback cuando se confirma
  title?: string;            // Título del modal (por defecto: "Are you sure?")
  message?: ReactNode;       // Mensaje del modal
  confirmText?: string;      // Texto del botón confirmar (por defecto: "Confirm")
  cancelText?: string;       // Texto del botón cancelar (por defecto: "Cancel")
  isLoading?: boolean;       // Estado de carga (desactiva botones)
  isDangerous?: boolean;     // Si true, usa estilo rojo para acciones peligrosas
}
```

#### Características

- Modal centrado con backdrop oscuro
- Animaciones suaves (fade-in, zoom-in)
- Soporte para acciones asincrónicas
- Estados de carga
- Distinción visual entre acciones peligrosas (rojo) y normales (azul)
- Completamente personalizable

---

### 2. Hook useLogoutModal (`src/hooks/useLogoutModal.ts`)

Hook personalizado para manejar el flujo de logout con confirmación.

#### Uso

```typescript
import { useLogoutModal } from "../../hooks/useLogoutModal";

const MyComponent = () => {
  const { setShowLogoutModal, LogoutConfirmationModal } = useLogoutModal();

  const handleLogout = async () => {
    // Implementar lógica de logout aquí
    localStorage.clear();
    // Redirigir a login
  };

  return (
    <>
      <button onClick={() => setShowLogoutModal(true)}>Logout</button>
      <LogoutConfirmationModal onConfirm={handleLogout} />
    </>
  );
};
```

---

### 3. LogoutButton (`src/components/common/LogoutButton.tsx`)

Ejemplo completo de componente de botón de logout con modal integrado.

---

## Ejemplos de Integración

### Ejemplo 1: Borrar Certificado (Ya implementado)

En `CertificateViewerModal.tsx`:

```typescript
import ConfirmationModal from "../../../components/common/ConfirmationModal";

const CertificateViewerModal = ({ isOpen, onClose, certificate, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (onDelete && certificate) {
      await onDelete(certificate.id);
      setShowDeleteConfirm(false);
      onClose();
    }
  };

  return (
    <>
      {/* Visor de certificado */}
      <button onClick={handleDeleteClick}>
        {/* Icono de borrar */}
      </button>

      {/* Modal de confirmación */}
      <ConfirmationModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleConfirmDelete}
        title="Are you sure?"
        message={`Are you sure you want to delete the certificate "${certificate.name}"? Please note that this action is irreversible.`}
        confirmText="Confirm Deletion"
        cancelText="Cancel"
        isDangerous={true}
      />
    </>
  );
};
```

### Ejemplo 2: Borrar CV (Ya implementado)

En `CVDocsTab.tsx`:

```typescript
import ConfirmationModal from "../../../components/common/ConfirmationModal";

const CVRow = ({ fileName, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (onDelete) {
      await onDelete();
      setShowDeleteConfirm(false);
    }
  };

  return (
    <>
      <button onClick={handleDeleteClick}>
        {/* Icono de borrar */}
      </button>

      <ConfirmationModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleConfirmDelete}
        title="Are you sure?"
        message={`Are you sure you want to delete "${fileName}"? Please note that this action is irreversible.`}
        confirmText="Confirm Deletion"
        cancelText="Cancel"
        isDangerous={true}
      />
    </>
  );
};
```

### Ejemplo 3: Logout

En tu Header o Sidebar:

```typescript
import LogoutButton from "../../components/common/LogoutButton";

const Header = () => {
  return (
    <div>
      {/* Otros elementos del header */}
      <LogoutButton />
    </div>
  );
};
```

O usando el hook directamente:

```typescript
import { useLogoutModal } from "../../hooks/useLogoutModal";

const ProfileMenu = () => {
  const { setShowLogoutModal, LogoutConfirmationModal } = useLogoutModal();

  const handleLogout = async () => {
    // Lógica de logout
    localStorage.clear();
  };

  return (
    <>
      <button onClick={() => setShowLogoutModal(true)}>Logout</button>
      <LogoutConfirmationModal onConfirm={handleLogout} />
    </>
  );
};
```

---

## Casos de Uso Adicionales

### Confirmación genérica (no peligrosa)

```typescript
<ConfirmationModal
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  onConfirm={handleConfirm}
  title="Confirmar acción"
  message="¿Deseas continuar con esta acción?"
  confirmText="Sí, continuar"
  cancelText="Cancelar"
  isDangerous={false}  // Botón azul
/>
```

### Con acciones asincrónicas

```typescript
<ConfirmationModal
  isOpen={showConfirm}
  onClose={() => setShowConfirm(false)}
  onConfirm={async () => {
    await fetch('/api/delete-item');
    setShowConfirm(false);
  }}
  title="Eliminar elemento"
  message="Esta acción no se puede deshacer."
  isDangerous={true}
/>
```

---

## Estructura de Archivos

```
src/
├── components/
│   └── common/
│       ├── ConfirmationModal.tsx      ← Modal principal
│       ├── LogoutButton.tsx           ← Ejemplo de uso (logout)
│       └── LanguageSelector.tsx
├── hooks/
│   └── useLogoutModal.ts              ← Hook para logout
├── features/
│   └── crew/
│       └── components/
│           ├── CertificateViewerModal.tsx   ✅ Actualizado
│           └── CVDocsTab.tsx                ✅ Actualizado
```

---

## Ventajas

✅ **Centralizado** - Un único componente para todas las confirmaciones
✅ **Reutilizable** - Se usa en múltiples lugares sin duplicación de código
✅ **Flexible** - Personalizable para diferentes tipos de acciones
✅ **Consistente** - Interfaz visual uniforme en toda la app
✅ **Asincrónico** - Soporta operaciones que toman tiempo
✅ **Accesible** - Sigue buenas prácticas de UX

---

## Próximos Pasos

Para integrar completamente el logout en tu aplicación:

1. **Encuentra dónde está el botón de logout** - Header, Sidebar, ProfileMenu, etc.
2. **Importa LogoutButton o usa useLogoutModal**
3. **Implementa la lógica de logout** - Limpiar tokens, localStorage, etc.
4. **Prueба el flujo** - Verifica que aparezca el modal y que funcione correctamente

---

## Notas

- Todos los modales están en z-index `[100]` para estar por encima de la mayoría de elementos
- El backdrop tiene un color gris semitransparente (`bg-[#727272]/60`)
- Las animaciones usan Tailwind CSS con duración de 300ms
- Los botones tienen estados de hover, active y disabled
