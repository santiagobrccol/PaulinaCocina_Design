# Manual de Imagen Corporativa — Paulina App

> **Estado:** Propuesta v0.1 — pendiente de aprobación.
> Una vez aprobado, este manual es la **fuente de verdad** de diseño para la app.
> Figma, este repo y cualquier agente (IA o persona) deben seguirlo al generar UI.

## Qué es esto

Un conjunto de *design patterns* (patrones de diseño) que definen cómo se ve y se
comporta la marca en producto: color, tipografía, iconografía y la pantalla de
inicio / carga (splash). No es un catálogo de componentes: es el **template** de
reglas sobre el que se construyen los componentes.

## Cómo se usa

1. **Antes de diseñar o codear una pantalla**, leé el capítulo que corresponda.
2. **Nunca uses valores crudos** (hex, px sueltos, nombres de fuente). Usá los
   *tokens* definidos en [`tokens.css`](./tokens.css) y en el capítulo de color.
3. Si algo no está cubierto por el manual, **no improvises**: seguí el
   [proceso de cambio](./06-instrucciones-para-agentes.md#proceso-de-cambio).

## Índice

| # | Capítulo | Contenido |
|---|----------|-----------|
| 01 | [Fundamentos](./01-fundamentos.md) | Principios de marca, logo, área de protección |
| 02 | [Color](./02-color.md) | Tokens semánticos, paleta secundaria, uso y accesibilidad |
| 03 | [Tipografía](./03-tipografia.md) | Familias (Montserrat + Inter), escala, reglas de uso |
| 04 | [Iconografía](./04-iconografia.md) | Sistema Lucide, tamaños, trazo, set base, iconos custom |
| 05 | [Splash y estados de carga](./05-splash-y-carga.md) | Pantalla de inicio, spinner, skeletons |
| 06 | [Instrucciones para agentes](./06-instrucciones-para-agentes.md) | Reglas operables + proceso de cambio |

## Archivos relacionados en el repo

| Archivo | Rol |
|---------|-----|
| `guidelines/brand-manual/tokens.css` | Implementación de los tokens del manual (custom properties) |
| `src/styles/fonts.css` | Carga de las familias tipográficas |
| `src/styles/theme.css` | Tokens de shadcn/ui — debe mapearse a los tokens de marca (ver cap. 02) |
| Figma · *Paulinapp — Design System / UI* | Espejo visual de este manual. Editar allí **primero**, luego acá |

## Fuentes

- Tokens de color y escala tipográfica: página **🎨 Foundations** del Figma.
- Stack técnico: Vite + React 18 + Tailwind v4 + shadcn/ui + `lucide-react` + `motion`.
