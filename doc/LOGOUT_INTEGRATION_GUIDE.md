# 🔐 Guía de Integración - Logout con ConfirmationModal

## Ubicaciones Recomendadas para el Botón de Logout

El botón de logout típicamente se encuentra en:

1. **Header** - En la esquina superior derecha, junto a notificaciones y perfil
2. **Sidebar** - Al final, en la sección de configuración/perfil
3. **ProfileMenu/Dropdown** - Dentro de un menú desplegable de usuario
4. **SettingsPage** - En la página de configuración de cuenta

---

## Integración Rápida (3 Opciones)

### Opción 1: Usar LogoutButton Directo (Más Simple)

```tsx
import LogoutButton from "../../components/common/LogoutButton";

const Header = () => {
  return (
    <header>
      <div className="flex items-center gap-4">
        {/* Otros elementos */}
        <LogoutButton />
      </div>
    </header>
  );
};
```

**Ventajas:**
- ✅ Una línea de código
- ✅ Ya está completamente implementado
- ✅ Lógica de logout es fácil de agregar

**Desventajas:**
- Menos control sobre la ubicación y estilos

---

### Opción 2: Usar useLogoutModal Hook (Recomendado)

```tsx
import { useLogoutModal } from "../../hooks/useLogoutModal";

const Header = () => {
  const { setShowLogoutModal, LogoutConfirmationModal } = useLogoutModal();

  const handleLogout = async () => {
    // Tu lógica de logout aquí
    localStorage.clear();
    sessionStorage.clear();
    // Redirigir a login
    window.location.href = "/login";
  };

  return (
    <>
      <header>
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="your-custom-styles"
        >
          Logout
        </button>
      </header>

      <LogoutConfirmationModal onConfirm={handleLogout} />
    </>
  );
};
```

**Ventajas:**
- ✅ Control total sobre estilos del botón
- ✅ Lógica de logout centralizada
- ✅ Flexible para múltiples botones logout

**Desventajas:**
- Requiere un poco más de código

---

### Opción 3: Hook + ProfileMenu Dropdown

```tsx
import { useLogoutModal } from "../../hooks/useLogoutModal";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowLogoutModal, LogoutConfirmationModal } = useLogoutModal();

  const handleLogout = async () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <div className="relative">
        {/* Profile Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <img src={userAvatar} alt="Profile" className="w-8 h-8 rounded-full" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-50">
              My Profile
            </a>
            <a href="/settings" className="block px-4 py-2 hover:bg-gray-50">
              Settings
            </a>
            <hr className="my-1" />
            <button
              onClick={() => {
                setIsOpen(false);
                setShowLogoutModal(true);
              }}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <LogoutConfirmationModal onConfirm={handleLogout} />
    </>
  );
};
```

**Ventajas:**
- ✅ Patrón común en aplicaciones modernas
- ✅ Agrupa acciones relacionadas
- ✅ Interfaz limpia y profesional

---

## Implementación Completa del Logout

### Paso 1: Importar el Hook

```tsx
import { useLogoutModal } from "../../hooks/useLogoutModal";
```

### Paso 2: Usar el Hook

```tsx
const { setShowLogoutModal, LogoutConfirmationModal } = useLogoutModal();
```

### Paso 3: Crear el Manejador

```tsx
const handleLogout = async () => {
  try {
    // 1. Llamar API para invalidar sesión (opcional)
    // await fetch('/api/logout', { method: 'POST' });

    // 2. Limpiar localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('preferences');
    // O limpiar todo:
    // localStorage.clear();

    // 3. Limpiar sessionStorage
    sessionStorage.clear();

    // 4. Limpiar cookies (si se usa)
    // document.cookie.split(";").forEach(function(c) {
    //   document.cookie = c
    //     .replace(/^ +/, "")
    //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    // });

    // 5. Redirigir a login
    window.location.href = "/login";
  } catch (error) {
    console.error("Logout failed:", error);
    // Mostrar notificación de error
  }
};
```

### Paso 4: Agregar el Botón

```tsx
<button onClick={() => setShowLogoutModal(true)}>
  Logout
</button>
```

### Paso 5: Renderizar el Modal

```tsx
<LogoutConfirmationModal onConfirm={handleLogout} />
```

---

## Ejemplo Completo: Header con Logout

```tsx
import React, { useState } from "react";
import { useLogoutModal } from "../../hooks/useLogoutModal";

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { setShowLogoutModal, LogoutConfirmationModal } = useLogoutModal();

  const handleLogout = async () => {
    try {
      // Llamar al backend para logout
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      if (response.ok) {
        // Limpiar datos locales
        localStorage.clear();
        sessionStorage.clear();

        // Redirigir a login
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-lg font-semibold text-gray-900">
              CrewWave
            </span>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              {/* Notification badge */}
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <img
                  src="/avatar.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">John Smith</p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>

                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    My Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Account Settings
                  </a>

                  <hr className="my-1" />

                  <button
                    onClick={() => {
                      setShowProfile(false);
                      setShowLogoutModal(true);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Modal de confirmación de logout */}
      <LogoutConfirmationModal onConfirm={handleLogout} />
    </>
  );
};

export default Header;
```

---

## Variables de Ambiente (Recomendado)

Para mayor seguridad, mantén la URL de logout en variables de ambiente:

### `.env.local`
```
VITE_API_URL=https://api.crewwave.com
VITE_LOGOUT_REDIRECT=/login
```

### Uso en el código
```tsx
const handleLogout = async () => {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: "POST",
    });
    window.location.href = import.meta.env.VITE_LOGOUT_REDIRECT;
  } catch (error) {
    console.error("Logout error:", error);
  }
};
```

---

## Mejores Prácticas

### ✅ DO

- ✅ Limpiar todos los tokens y datos de usuario antes de redirigir
- ✅ Invalidar la sesión en el backend
- ✅ Mostrar el modal de confirmación para acciones críticas
- ✅ Redirigir a una página pública (login) después de logout
- ✅ Manejar errores gracefully
- ✅ Usar try-catch para operaciones asincrónicas

### ❌ DON'T

- ❌ No redirigir sin limpiar datos
- ❌ No dejar tokens en localStorage después de logout
- ❌ No hacer logout sin confirmación del usuario
- ❌ No redirigir a una página protegida después de logout
- ❌ No ignorar errores de logout en el backend

---

## Testing

### Test de Unitario

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header Logout", () => {
  it("should show logout confirmation modal", () => {
    render(<Header />);
    
    // Abrir perfil
    fireEvent.click(screen.getByText("Profile"));
    
    // Click en logout
    fireEvent.click(screen.getByText("Logout"));
    
    // Verificar que aparece el modal
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
  });

  it("should logout when confirmed", async () => {
    render(<Header />);
    
    fireEvent.click(screen.getByText("Logout"));
    fireEvent.click(screen.getByText("Confirm Logout"));
    
    // Verificar que se hace fetch al endpoint
    // Verificar que se redirige
  });

  it("should not logout when cancelled", () => {
    render(<Header />);
    
    fireEvent.click(screen.getByText("Logout"));
    fireEvent.click(screen.getByText("Cancel"));
    
    // Verificar que el modal se cierra
    // Verificar que NO se hace logout
  });
});
```

---

## Solución de Problemas

### Problema: El modal no aparece

**Solución:**
- Verifica que `setShowLogoutModal(true)` se esté ejecutando
- Revisa la consola para errores
- Asegúrate que `LogoutConfirmationModal` está renderizado

### Problema: El logout no funciona

**Solución:**
- Verifica que `handleLogout` se esté ejecutando
- Revisa que localStorage se está limpiando
- Verifica la respuesta del API backend
- Revisa que la URL de redirección es correcta

### Problema: Aparecen dos modales

**Solución:**
- Asegúrate que solo hay UN `LogoutConfirmationModal` en el árbol de componentes
- Si usas múltiples hooks, fusiónalos en uno

---

## Resumen

Con esta implementación:

1. ✅ El usuario hace clic en "Logout"
2. ✅ Aparece modal de confirmación "Are you sure?"
3. ✅ Usuario confirma o cancela
4. ✅ Si confirma → se ejecuta logout y se redirige a login
5. ✅ Si cancela → modal se cierra y continúa navegando

¡Listo para implementar! 🚀
