# 06 · Instrucciones para agentes

Reglas operables para cualquier agente (IA o persona) que genere UI para Paulina
App, en código o en Figma. Son de cumplimiento obligatorio una vez aprobado el
manual.

## Regla 0

**Leé el capítulo correspondiente de este manual antes de generar.** Si el manual
no cubre el caso, no improvises: seguí el [proceso de cambio](#proceso-de-cambio).

## Checklist por entregable

### Color
- [ ] Solo tokens semánticos por nombre (`color/primary`, …). Cero hex crudos en
      componentes.
- [ ] Una sola acción `color/primary` por pantalla.
- [ ] Feedback con `error` / `success` / `info`, nunca con la paleta secundaria.
- [ ] Contraste texto/fondo ≥ AA. `color/text-muted` prohibido para cuerpo largo.

### Tipografía
- [ ] Solo los 7 roles: Display, H1, H2, H3, Body, Caption, Button.
- [ ] Montserrat para Display/H1–H3/Button; Inter para Body/Caption/labels/datos.
- [ ] MAYÚSCULAS por CSS (`text-transform`), no escritas en el contenido.
- [ ] Body y Caption en minúsculas (respetando nombres propios y siglas).
- [ ] Un `<h1>` por pantalla. Sin tamaños inventados.

### Iconografía
- [ ] Solo `lucide-react`. Sin otras librerías ni emoji en la UI.
- [ ] `strokeWidth={1.75}`, `currentColor`, tamaño de la rampa (16/20/24/32).
- [ ] Icono interactivo con área táctil ≥ 44 × 44.
- [ ] Iconos nuevos: agregarlos al set base del cap. 04 antes de usarlos.

### Espaciado y forma
- [ ] Espaciado de la escala base 4 (`4/8/12/16/24/32/48/64`).
- [ ] Radios de `--radius-*` (`sm 6 · md 8 · lg 10 · xl 14`).
- [ ] Bordes (`color/border`) antes que sombras. Sombra solo en overlays.

### Botones
- [ ] Primario: relleno `color/primary` + texto `color/on-primary`, label
      `Button` (Montserrat 600, 15/18, MAYÚSCULAS).
- [ ] Secundario: contorno `color/primary`, fondo transparente.
- [ ] Terciario: solo texto `color/primary`.
- [ ] Un primario por sección.

### Imagen / fotografía
- [ ] Fotografía de comida real, luz natural, cálida (fuente: Unsplash, según
      `ATTRIBUTIONS.md`).
- [ ] Relación 3:2 (horizontal) o 4:5 (vertical). Esquinas con radio `md`.
- [ ] Capa de contraste si va texto encima.

### Carga y splash
- [ ] Skeleton para contenido; spinner solo para acciones (ver cap. 05).
- [ ] Splash: fondo `color/primary`, `logo_blanco.svg`, spinner 24 px
      `color/on-primary`, mínimo 600 ms.
- [ ] Respetar `prefers-reduced-motion`.

### Accesibilidad (transversal)
- [ ] Contraste AA. Estado nunca solo por color.
- [ ] Foco visible (anillo `--ring`).
- [ ] Objetivos táctiles ≥ 44 px. `alt` en imágenes con contenido.

## Instrucción para Figma / Figma Make

Al generar o editar en el archivo *Paulinapp — Design System / UI*:

1. Usar **variables de Figma** existentes (página 🎨 Foundations) para todo color
   y tamaño de texto. No pegar hex ni tamaños sueltos.
2. Los nuevos componentes se nombran con la convención del set base (iconos) y de
   los 7 roles de texto.
3. Cada patrón nuevo se documenta primero en la página del manual dentro del
   Figma y recién después se usa en pantallas.
4. Mantener paridad 1:1 con este directorio (`guidelines/brand-manual/`): si algo
   cambia en Figma, actualizar el `.md` correspondiente en el mismo PR.

## Proceso de cambio

1. **Propuesta:** describir el cambio en la página *Brand Manual* del Figma
   (frame "Propuestas") y/o abrir un issue en el repo.
2. **Aprobación:** el dueño de marca aprueba explícitamente.
3. **Actualización de la fuente de verdad:** editar el capítulo `.md`, `tokens.css`
   y las variables de Figma **en el mismo cambio**.
4. **Implementación:** recién entonces tocar componentes en `src/`.
5. **Versión:** subir el número de versión en `README.md` del manual y anotar el
   cambio en el historial de abajo.

## Historial

| Versión | Fecha | Cambio |
|---------|-------|--------|
| v0.1 | 2026-08-27 | Propuesta inicial: color, tipografía (Montserrat + Inter), iconografía (Lucide), splash y estados de carga. Pendiente de aprobación. |
