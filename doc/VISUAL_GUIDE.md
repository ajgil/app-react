# Visual Guide - ConfirmationModal Component

## Modal Visual (Captura Visual ASCII)

### Para Acciones Peligrosas (isDangerous={true}) - Rojo

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      🔴 (Icono de advertencia)             │
│                                                             │
│                      Are you sure?                         │
│                                                             │
│  Are you sure you want to delete the certificate           │
│  "M/Y Aurora Motor Yacht"?                                 │
│  Please note that this action is irreversible.             │
│                                                             │
│  ┌─────────────────────┐  ┌──────────────────────────┐    │
│  │      Cancel         │  │  Confirm Deletion (🔴)  │    │
│  └─────────────────────┘  └──────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Para Acciones Normales (isDangerous={false}) - Azul

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      ❓ (Icono de pregunta)                │
│                                                             │
│                      Are you sure?                         │
│                                                             │
│  ¿Estás seguro de que deseas logout?                      │
│  Serás redirigido a la página de login.                    │
│                                                             │
│  ┌─────────────────────┐  ┌──────────────────────────┐    │
│  │      Cancel         │  │  Confirm Logout (🔵)    │    │
│  └─────────────────────┘  └──────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Componentes e Interacciones

### 1. Icono de Encabezado

- **Peligroso (isDangerous=true):** Triángulo rojo 🔴 con fondo rojo claro
- **Normal (isDangerous=false):** Círculo azul ❓ con fondo azul claro

### 2. Botón Cancel
- Color: Gris claro con borde
- Hover: Fondo gris oscuro
- Ancho: 50% del modal (flex-1)

### 3. Botón Confirm/Confirm Deletion
- **Peligroso:** Fondo rojo (#ef4444) con hover rojo oscuro
- **Normal:** Fondo azul (#3b82f6) con hover azul oscuro
- Ancho: 50% del modal (flex-1)
- Estado de carga: Muestra "Processing..." y desactiva botones

---

## Estados del Modal

### Estado 1: Cerrado
```
El modal no aparece en el DOM (isOpen={false})
```

### Estado 2: Abierto (Esperando confirmación)
```
- Modal visible con animación fade-in + zoom-in
- Botones habilitados y clickeables
- Backdrop clickeable (cierra el modal)
```

### Estado 3: Cargando (isLoading={true})
```
- Botones desactivados (disabled)
- Texto del botón confirmar: "Processing..."
- Opacidad reducida en botones
```

### Estado 4: Confirmado o Cancelado
```
- Ejecuta callback (onConfirm o onClose)
- El modal se cierra automáticamente
```

---

## Props Requeridas vs Opcionales

### Requeridas ✅
- `isOpen: boolean` - Control de visibilidad
- `onClose: () => void` - Callback para cerrar
- `onConfirm: () => void | Promise<void>` - Callback para confirmar

### Opcionales (con defaults)
- `title = "Are you sure?"` - Título del modal
- `message = "Please confirm this action."` - Mensaje
- `confirmText = "Confirm"` - Texto botón confirmar
- `cancelText = "Cancel"` - Texto botón cancelar
- `isLoading = false` - Estado de carga
- `isDangerous = false` - Estilos para acciones peligrosas

---

## Ejemplos de Uso por Caso

### Caso 1: Eliminar Certificado

```tsx
<ConfirmationModal
  isOpen={showDeleteConfirm}
  onClose={() => setShowDeleteConfirm(false)}
  onConfirm={handleConfirmDelete}
  title="Are you sure?"
  message='Are you sure you want to delete the certificate "M/Y Aurora Motor Yacht"? Please note that this action is irreversible.'
  confirmText="Confirm Deletion"
  cancelText="Cancel"
  isDangerous={true}
/>
```

**Resultado Visual:**
- Icono: 🔴 Rojo (advertencia)
- Botón confirmar: Rojo
- Mensaje: Personalizado con nombre del certificado

---

### Caso 2: Eliminar CV

```tsx
<ConfirmationModal
  isOpen={showDeleteConfirm}
  onClose={() => setShowDeleteConfirm(false)}
  onConfirm={handleConfirmDelete}
  title="Are you sure?"
  message='Are you sure you want to delete "John_Smith_CV_2024.pdf"? Please note that this action is irreversible.'
  confirmText="Confirm Deletion"
  cancelText="Cancel"
  isDangerous={true}
/>
```

**Resultado Visual:**
- Icono: 🔴 Rojo (advertencia)
- Botón confirmar: Rojo
- Mensaje: Con nombre del archivo

---

### Caso 3: Logout

```tsx
<ConfirmationModal
  isOpen={showLogoutModal}
  onClose={() => setShowLogoutModal(false)}
  onConfirm={handleLogout}
  title="Are you sure?"
  message="Are you sure you want to logout? You will be redirected to the login page."
  confirmText="Confirm Logout"
  cancelText="Cancel"
  isDangerous={false}
/>
```

**Resultado Visual:**
- Icono: ❓ Azul (pregunta)
- Botón confirmar: Azul
- Mensaje: Estándar para logout

---

## Dimensiones y Espaciado

```
Total Width: 100% (max-width: 540px)
Padding: 32px (p-8)

┌─────────────────────────────────────────┐
│ Icono Container: 64px x 64px            │
│ Padding bottom: 16px (pb-4)             │
├─────────────────────────────────────────┤
│ Title: Tamaño 2xl, Bold                 │
│ Padding: 32px (px-8)                    │
├─────────────────────────────────────────┤
│ Message: Tamaño base, Gris              │
│ Padding: 32px (px-8) + 24px (py-6)     │
├─────────────────────────────────────────┤
│ Buttons Container                       │
│ Padding: 32px (p-8), top: 24px (pt-6)  │
│ Gap: 12px entre botones                 │
│                                         │
│ Cada botón: Padding 16px vertical       │
│            Padding 32px horizontal      │
│            Altura: 56px                 │
└─────────────────────────────────────────┘

Z-index: 100 (encima de la mayoría de elementos)
Border Radius: 24px (rounded-[24px])
```

---

## Animaciones

### Entrada
1. **Backdrop:** fade-in durante 300ms
2. **Modal:** zoom-in-95 durante 300ms (comienza en 95% del tamaño)

### Hover Estados
- **Botones:** Cambian color y shadow
- **Botón Confirmar:** 
  - Normal → Más brillante/oscuro
  - Active → Escala 95% (active:scale-95)
- **Botón Cancelar:** 
  - Hover → Fondo gris más oscuro

### Estado de Carga
- Botones se desactivan (disabled:opacity-50)
- Cursor se vuelve "not-allowed"

---

## Colores

### Paleta de Colores

| Elemento | Color | Hex Code |
|----------|-------|----------|
| Backdrop | Gris Oscuro/Transparente | #727272/60 |
| Fondo Modal | Blanco | #ffffff |
| Borde Modal | Gris Claro | #f0f2f5 |
| Título | Gris Oscuro | #1a1a1a |
| Texto Mensaje | Gris Medio | #727272 |
| Botón Cancel - Texto | Gris | #4b5563 |
| Botón Cancel - Borde | Gris Claro | #e5e7eb |
| Botón Confirm (Normal) | Azul | #3b82f6 |
| Botón Confirm Hover | Azul Oscuro | #2563eb |
| Botón Confirm (Peligro) | Rojo | #ef4444 |
| Botón Confirm Hover (Peligro) | Rojo Oscuro | #dc2626 |
| Icono Normal | Azul | #3B82F6 |
| Icono Peligro | Rojo | #DC2626 |
| BG Icono Normal | Azul Claro | #DBEAFE |
| BG Icono Peligro | Rojo Claro | #FEE2E2 |

---

## Comportamiento Responsivo

- **Ancho máximo:** 540px
- **En móvil:** Padding adicional (p-4) para evitar tocar bordes
- **En tablet/desktop:** Se centra perfectamente
- **Escala:** Los textos y botones se mantienen legibles en todos los tamaños

---

## Accesibilidad

✅ Texto descriptivo claro
✅ Botones con tamaño suficiente (56px de altura)
✅ Contraste adecuado entre colores
✅ Estados visuales claros (hover, active, disabled)
✅ Backdrop clickeable para cerrar (útil en mobile)
✅ Estilos diferenciados para acciones peligrosas

---

## Casos de Uso Futuros

El componente está diseñado para ser usado en:

- ✅ Confirmación de eliminación (certificados, CVs, etc.)
- ✅ Confirmación de logout
- ✅ Confirmación de cambios críticos (email, contraseña)
- ✅ Confirmación de envío de datos importantes
- ✅ Confirmación de cambios de configuración
- ✅ Cualquier otra acción que requiera confirmación del usuario

---

## Testing

### Casos de Prueba Sugeridos

1. **Modal abre correctamente**
   - isOpen={true} → El modal debe aparecer

2. **Modal se cierra al hacer clic en Cancel**
   - Click en Cancel → onClose se ejecuta

3. **Modal se cierra al hacer clic en Confirm**
   - Click en Confirm → onConfirm se ejecuta

4. **Modal se cierra al hacer clic en backdrop**
   - Click en backdrop → onClose se ejecuta

5. **Botones se deshabilitan durante carga**
   - isLoading={true} → Botones disabled

6. **Mensaje se actualiza dinámicamente**
   - Cambiar prop message → Texto se actualiza

7. **Estilos cambian según isDangerous**
   - isDangerous={true} → Botón rojo
   - isDangerous={false} → Botón azul

8. **Operaciones asincrónicas se completan**
   - onConfirm es async → Se espera a que termine

---

## Notas Importantes

📌 El componente NO maneja la lógica de negocio (eliminación real, logout real, etc.)
📌 Eso es responsabilidad del componente padre que integra ConfirmationModal
📌 El componente es puramente presentacional + manejo de estado del modal
📌 Todos los callbacks deben ser manejados por el padre

