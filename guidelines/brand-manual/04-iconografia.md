# 04 · Iconografía

## Sistema

**Lucide** (`lucide-react`, ya en `package.json` — v0.487.0). Licencia ISC.

Motivos: viene integrado con shadcn/ui, trazo consistente, +1400 iconos,
*tree-shakeable* (se importa solo lo que se usa), API declarativa por nombre.

```tsx
import { Search, BookOpen, Clock } from "lucide-react";
<Search size={20} strokeWidth={1.75} />
```

## Especificaciones

| Propiedad | Valor |
|-----------|-------|
| Grid / viewBox | `24 × 24` |
| Trazo | `strokeWidth={1.75}` (fijo para toda la marca; Lucide viene en 2) |
| Terminaciones | `stroke-linecap="round"` `stroke-linejoin="round"` (default de Lucide) |
| Relleno | Ninguno — solo contorno |
| Color | `currentColor` — hereda del texto contenedor |
| Padding óptico interno | ≥ 2 px dentro del viewBox de 24 |

### Rampa de tamaños

| Token | px | Uso |
|-------|----|-----|
| `--icon-sm` | 16 | Inline con caption, badges, metadatos densos |
| `--icon-md` | 20 | **Default.** Dentro de botones, inputs, list items |
| `--icon-lg` | 24 | Barra de navegación, encabezados, acciones destacadas |
| `--icon-xl` | 32 | Empty states, onboarding, tarjetas de feature |

No se usan tamaños fuera de esta rampa. El área táctil mínima del icono
interactivo es **44 × 44 px** (padding alrededor, el glifo no cambia).

### Color por estado

| Estado | Token |
|--------|-------|
| Inactivo / decorativo | `color/text-muted` |
| Activo / por defecto | `color/text` |
| Seleccionado / marca | `color/primary` |
| Sobre superficie roja | `color/on-primary` |
| Destructivo | `color/error` |

## Set base

Mapa de iconos por dominio de la app. Usar **exactamente** estos nombres de
Lucide; si una pantalla necesita otro, agregarlo acá primero.

| Dominio | Icono (nombre Lucide) |
|---------|----------------------|
| Navegación | `house`, `search`, `calendar-days`, `book-open`, `user` |
| Recetas | `chef-hat`, `utensils-crossed`, `flame`, `timer`, `clock`, `soup` |
| Menú semanal | `calendar-days`, `refresh-cw`, `shuffle`, `chevron-right` |
| Lista de compra | `list-checks`, `shopping-cart`, `plus`, `check`, `trash-2` |
| Ebooks / lectura | `book-marked`, `bookmark`, `download`, `type` (ajuste de fuente) |
| Social / valoración | `heart`, `star`, `share-2`, `message-circle` |
| Sistema | `settings`, `bell`, `x`, `chevron-left`, `arrow-left`, `more-vertical`, `info`, `circle-alert`, `circle-check` |

## Iconos custom

Solo cuando Lucide no tiene equivalente razonable. Requisitos para que "combinen":

- Lienzo `24 × 24`, trazo `1.75`, `linecap`/`linejoin` `round`, sin relleno.
- Construcción sobre grid de 1 px, radios de esquina `2`.
- Padding óptico ≥ 2 px; el glifo no toca el borde del viewBox.
- Exportar como SVG optimizado (SVGO), `stroke="currentColor"`, sin `width`/`height`
  fijos en el `<svg>` (los controla el componente).
- Guardar en `src/app/components/brand/icons/` y exponer con la misma API
  (`size`, `strokeWidth`, `className`) que un icono de Lucide.

## Prohibido

- Mezclar otra librería de iconos (Material, Font Awesome, Heroicons…).
- Rellenar iconos de contorno o combinar contorno + relleno en la misma vista.
- Escalar un icono a un tamaño fuera de la rampa.
- Usar el isotipo de la marca como si fuera un icono de UI.
- Emoji en lugar de iconos dentro de la interfaz.
