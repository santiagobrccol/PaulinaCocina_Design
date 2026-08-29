# 02 · Color

Fuente de verdad: variables de la página **🎨 Foundations** del Figma.
Implementación: [`tokens.css`](./tokens.css).

## Tokens semánticos (funcionales)

Se usan **siempre** por su nombre semántico, nunca por su hex.

| Token | Hex | Uso |
|-------|-----|-----|
| `color/bg` | `#F3F4F6` | Fondo de la app / fuera de tarjetas |
| `color/surface` | `#FFFFFF` | Tarjetas, hojas, inputs, barras |
| `color/primary` | `#C8171A` | Acción primaria, marca, splash, elementos activos |
| `color/on-primary` | `#FFFFFF` | Texto/icono sobre `color/primary` |
| `color/text` | `#101828` | Texto principal |
| `color/text-muted` | `#99A1AF` | Texto secundario, placeholders, iconos inactivos |
| `color/accent` | `#95C2D3` | Realce suave, chips informativos, ilustración |
| `color/border` | `#F3F4F6` | Bordes y divisores |
| `color/error` | `#F81623` | Errores, validación, destructivo |
| `color/success` | `#1FA65A` | Confirmaciones, estado OK |
| `color/info` | `#159BFF` | Mensajes informativos, links |
| `color/reader-bg` | `#FDF8F2` | Fondo del modo lectura de receta (crema, menos fatiga) |

### Nota de QA sobre `color/border`

Hoy `color/border` = `color/bg` (`#F3F4F6`), por lo que un borde no se distingue
del fondo de la app. **Propuesta:** mantener el token pero fijar su valor en
`#E5E7EB` para que funcione como divisor real sobre `color/surface`.
Pendiente de decisión — ver [proceso de cambio](./06-instrucciones-para-agentes.md#proceso-de-cambio).

## Paleta secundaria / acento

Uso **puntual**: ilustración, categorías, gráficos, estados de gamificación.
Nunca para texto de cuerpo ni para superficies grandes.

| Token | Hex |
|-------|-----|
| `secondary/violet` | `#C86DC3` |
| `secondary/orange` | `#FF4E00` |
| `secondary/yellow` | `#FFF42C` |
| `secondary/light-cyan` | `#80E1FF` |
| `secondary/blue` | `#159BFF` |
| `secondary/neon-green` | `#00F434` |
| `secondary/vivid-red` | `#F81623` |
| `secondary/black` | `#111111` |

## Reglas de uso

- **Rojo de marca con intención.** `color/primary` marca *la* acción de la
  pantalla. Si hay dos botones rojos, algo está mal.
- **Sin degradados** salvo la textura del logo. Colores planos.
- **Jerarquía por color de texto:** `color/text` → `color/text-muted`. No usar
  gris más claro que `color/text-muted` para texto.
- **Feedback semántico** siempre con su token (`error` / `success` / `info`), no
  con la paleta secundaria.
- **Modo lectura de receta:** fondo `color/reader-bg`, texto `color/text`.

## Accesibilidad

| Combinación | Ratio | Resultado |
|-------------|-------|-----------|
| `color/text` sobre `color/surface` | ~16.1:1 | AAA |
| `color/text` sobre `color/bg` | ~14.9:1 | AAA |
| `color/on-primary` sobre `color/primary` | ~5.6:1 | AA (texto normal y grande) |
| `color/text-muted` sobre `color/surface` | ~2.5:1 | **Solo texto ≥ 18.66 px bold / decorativo. No para cuerpo.** |

- Objetivo mínimo: **WCAG AA** (4.5:1 texto normal, 3:1 texto grande e iconos).
- No comunicar estado solo con color: acompañar con icono o texto.
- `color/text-muted` para cuerpo largo está prohibido por contraste.

## Mapeo a `src/styles/theme.css` (shadcn/ui)

`theme.css` todavía trae los tokens por defecto de shadcn. Al aprobar el manual,
mapear así (mismo nombre de variable de shadcn, valor del token de marca):

| Variable shadcn | Token de marca |
|-----------------|----------------|
| `--background` | `color/bg` |
| `--foreground` | `color/text` |
| `--card` / `--popover` | `color/surface` |
| `--primary` | `color/primary` |
| `--primary-foreground` | `color/on-primary` |
| `--muted-foreground` | `color/text-muted` |
| `--accent` | `color/accent` |
| `--border` | `color/border` (con el valor corregido) |
| `--destructive` | `color/error` |
| `--ring` | `color/primary` al 40% |
