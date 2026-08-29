# 03 · Tipografía

## Propuesta de familias

El Figma marcaba **Montserrat** (títulos) + **Austral Sans** (cuerpo, licencia
pendiente) e Inter como *proxy* temporal.

**Decisión propuesta:** adoptar **Montserrat + Inter** de forma definitiva.

| Familia | Rol | Por qué |
|---------|-----|---------|
| **Montserrat** | Display, títulos (H1–H3) y botones | Geométrica, con carácter, buen aire en mayúsculas. Gratuita (SIL OFL), self-hosteable |
| **Inter** | Cuerpo, caption, labels, datos | Diseñada para pantalla, altura de x alta, legible en tamaños chicos. Gratuita (SIL OFL) |

Esto elimina el bloqueo de licencia de Austral Sans y mantiene el contraste
editorial título/cuerpo que buscaba el brief.

- **Fallbacks:** `Montserrat, "Segoe UI", Roboto, system-ui, sans-serif` y
  `Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- **Carga:** ver `src/styles/fonts.css`. Para producción, **self-hostear** los
  `.woff2` (pesos exactos) en lugar del `@import` de Google Fonts, con
  `font-display: swap`.
- Pesos a incluir: Montserrat **600, 700, 800**; Inter **400, 500, 600**.

## Escala tipográfica

Origen: frame *Type Scale* de la página 🎨 Foundations. `tamaño / interlineado` en px.

| Rol | Token | Tamaño / Interlineado | Familia · Peso | Caja | Ejemplo |
|-----|-------|----------------------|----------------|------|---------|
| **Display** | `--text-display` | 30 / 34 | Montserrat 800 (ExtraBold) | MAYÚSCULAS | `PAULINA COCINA` |
| **H1** | `--text-h1` | 24 / 28 | Montserrat 700 (Bold) | MAYÚSCULAS | `MENÚ DE LA SEMANA` |
| **H2** | `--text-h2` | 20 / 24 | Montserrat 600 (SemiBold) | MAYÚSCULAS | `TUS EBOOKS` |
| **H3** | `--text-h3` | 17 / 22 | Montserrat 600 (SemiBold) | Mixta | `Lista de compra` |
| **Body** | `--text-body` | 16 / 24 | Inter 400 (Regular) | minúsculas | `salmón a la plancha con puré…` |
| **Caption** | `--text-caption` | 13 / 18 | Inter 400 (Regular) | minúsculas | `actualizado hace 5 minutos` |
| **Button** | `--text-button` | 15 / 18 | Montserrat 600 (SemiBold) | MAYÚSCULAS | `ACTUALIZAR MENÚ` |

> Estos 7 roles son **todos** los estilos de texto permitidos. No se crean
> tamaños intermedios ni variantes ad hoc.

## Reglas de uso

- **Caja de texto:**
  - Display, H1, H2 y Button → siempre MAYÚSCULAS (aplicado por CSS
    `text-transform: uppercase`, **no** escrito a mano en el contenido).
  - H3 → capitalización normal de frase.
  - Body y Caption → minúsculas (voz de marca cercana). Nombres propios y siglas
    conservan su caja.
- **Tracking:** en los estilos en mayúsculas, `letter-spacing: 0.02em`. En cuerpo, `0`.
- **Ancho de línea:** cuerpo de lectura entre 45 y 75 caracteres.
- **Énfasis en cuerpo:** Inter 600. **Nunca** subrayado salvo enlaces.
- **Números / tiempos / cantidades:** Inter con `font-variant-numeric: tabular-nums`.
- **Un solo H1 por pantalla.**
- No usar Montserrat para bloques de texto largos; no usar Inter para títulos.

## Implementación (Tailwind v4 / CSS)

Los tokens viven en [`tokens.css`](./tokens.css) como custom properties
(`--text-h1`, `--leading-h1`, …) y como utilidades `@theme`
(`text-h1`, `text-body`, …). Ejemplo:

```tsx
<h1 className="font-heading text-h1 uppercase tracking-wide">Menú de la semana</h1>
<p className="font-body text-body">salmón a la plancha con puré de papas</p>
```
