# System Guidelines — Paulina App

> La fuente de verdad completa es **[`brand-manual/`](./brand-manual/README.md)**.
> Este archivo es el resumen operable. Ante cualquier duda, gana el manual.
> Estado: **Propuesta v0.1 — pendiente de aprobación.**

## General

- Layouts responsivos con flexbox / grid. Posición absoluta solo si es imprescindible.
- Componentes y helpers en archivos propios; archivos chicos.
- Refactorizar sobre la marcha para mantener el código limpio.
- Nunca usar valores crudos (hex, px sueltos, nombres de fuente): usar los tokens
  de `guidelines/brand-manual/tokens.css`.

## Color  ·  [detalle](./brand-manual/02-color.md)

- Solo tokens semánticos por nombre: `color/bg`, `color/surface`, `color/primary`,
  `color/on-primary`, `color/text`, `color/text-muted`, `color/accent`,
  `color/border`, `color/error`, `color/success`, `color/info`, `color/reader-bg`.
- `color/primary` (`#C8171A`) = la acción de la pantalla. Una sola por vista.
- Paleta secundaria: uso puntual (ilustración, categorías, gráficos). Nunca texto
  ni superficies grandes.
- Feedback con `error` / `success` / `info`. Contraste mínimo WCAG AA.
- `color/text-muted` prohibido para cuerpo de texto largo.

## Tipografía  ·  [detalle](./brand-manual/03-tipografia.md)

- Familias: **Montserrat** (Display, H1–H3, Button) + **Inter** (Body, Caption,
  labels, datos).
- 7 roles únicos — no crear tamaños intermedios:
  Display 30/34 · H1 24/28 · H2 20/24 · H3 17/22 · Body 16/24 · Caption 13/18 · Button 15/18.
- MAYÚSCULAS en Display, H1, H2 y Button — aplicadas por CSS, no escritas a mano.
- Body y Caption en minúsculas (voz de marca), respetando nombres propios y siglas.
- Un `<h1>` por pantalla.

## Iconografía  ·  [detalle](./brand-manual/04-iconografia.md)

- Solo **`lucide-react`**. Sin otras librerías ni emoji en la UI.
- `strokeWidth={1.75}`, `currentColor`, tamaño de la rampa: 16 / 20 (default) / 24 / 32.
- Icono interactivo con área táctil ≥ 44 × 44.
- Iconos nuevos: agregarlos primero al set base del manual.

## Espaciado y forma  ·  [detalle](./brand-manual/01-fundamentos.md)

- Escala base 4: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`. Márgenes de pantalla 16.
- Radios: `sm 6 · md 8 · lg 10 · xl 14` (alineado con `--radius` de `theme.css`).
- Bordes (`color/border`) antes que sombras. Sombra solo en overlays.

## Botones

- Primario: relleno `color/primary` + texto `color/on-primary`, label estilo
  `Button` (Montserrat 600, MAYÚSCULAS). Uno por sección.
- Secundario: contorno `color/primary`, fondo transparente.
- Terciario: solo texto `color/primary`.

## Carga y splash  ·  [detalle](./brand-manual/05-splash-y-carga.md)

- Skeleton para contenido; spinner solo para acciones.
- Splash: fondo `color/primary`, `logo_blanco.svg`, spinner 24 px
  `color/on-primary`, mínimo visible 600 ms, timeout 5 s.
- Respetar `prefers-reduced-motion`.

## Proceso de cambio

Propuesta (Figma / issue) → aprobación del dueño de marca → actualizar `.md` +
`tokens.css` + variables de Figma en el mismo cambio → recién después tocar `src/`.
Detalle en [`brand-manual/06-instrucciones-para-agentes.md`](./brand-manual/06-instrucciones-para-agentes.md).
