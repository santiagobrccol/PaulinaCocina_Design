# 01 · Fundamentos

## Principios de marca

Paulina App es una herramienta de cocina cotidiana. La imagen debe transmitir:

| Principio | En diseño se traduce en… |
|-----------|--------------------------|
| **Cercana** | Lenguaje visual cálido, minúsculas en el cuerpo de texto, fotografía real de comida |
| **Clara** | Jerarquía tipográfica fuerte, una acción primaria por pantalla, sin ruido decorativo |
| **Apetitosa** | Rojo de marca con carácter, fotografía protagonista, blancos amplios |
| **Confiable** | Consistencia estricta con los tokens, contraste AA, estados de carga honestos |

## Logo

- Archivos: `src/imports/logo_blanco.svg` (sobre fondos oscuros / rojo de marca) y
  `src/imports/logo_sin_textura.svg` (sobre fondos claros).
- El wordmark **PAULINA COCINA** va siempre en mayúsculas y no se re-tipografía:
  se usa el SVG, no texto vivo.
- El isotipo (marca de llama) puede usarse solo como favicon, app icon y avatar
  cuando el ancho disponible es menor a 96 px.

### Área de protección (clearspace)

Margen mínimo alrededor del logo = **altura de la letra "P" del wordmark** en los
cuatro lados. Nada (texto, iconos, bordes) invade esa zona.

### Tamaño mínimo

- Wordmark completo: 120 px de ancho en pantalla, 20 mm impreso.
- Isotipo solo: 24 px.

### Usos incorrectos

- No rotar, inclinar ni aplicar sombra o contorno.
- No cambiar los colores del logo fuera de blanco / rojo de marca / negro.
- No colocar el wordmark sobre fotografía sin una capa de contraste.
- No reconstruir el wordmark con la fuente Montserrat: usar siempre el SVG.

## Rejilla y espaciado

- **Base 4 px.** Escala permitida: `4, 8, 12, 16, 24, 32, 48, 64`.
- Márgenes de pantalla (mobile): `16 px` laterales.
- Separación entre secciones: `24 px` o `32 px`.
- Radios: ver `--radius-*` en [`tokens.css`](./tokens.css) (`sm 6 · md 8 · lg 10 · xl 14`).
  Coincide con el `--radius: 0.625rem` (10 px) ya definido en `src/styles/theme.css`.

## Elevación

Preferir **bordes** (`color/border`) sobre sombras. Una sola sombra suave
(`--shadow-overlay`) reservada para menús, popovers, sheets y toasts.
