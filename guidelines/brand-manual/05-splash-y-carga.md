# 05 · Splash y estados de carga

## Pantalla de inicio (splash)

Primera pantalla al abrir la app, mientras se resuelve sesión / datos iniciales.

### Especificación

| Elemento | Valor |
|----------|-------|
| Fondo | `color/primary` (`#C8171A`), color plano. Opcional: textura del logo al 6 % de opacidad |
| Logo | `logo_blanco.svg` (wordmark completo), centrado óptico (~46 % de la altura) |
| Ancho del logo | 180 px en mobile / 44 % del ancho de viewport, lo que sea menor |
| Indicador de carga | Spinner circular, 24 px, trazo 1.75, `color/on-primary`, arco de 270°, giro `0.8s` lineal infinito |
| Posición del spinner | Centrado horizontal, a 96 px por debajo del logo |
| Área segura | Respetar safe-area insets (notch / barra gestual). Nada crítico fuera de ellas |
| Barra de estado | Contenido claro (light) sobre el rojo |
| Duración | Mínimo visible **600 ms** (evita parpadeo). Máximo **5 s**; al agotarse, pasar a la app o a pantalla de error de conexión |
| Salida | Fade de 200 ms hacia la primera pantalla real |

### Reduced motion

Si `prefers-reduced-motion: reduce`: reemplazar el spinner por **tres puntos**
(`color/on-primary`) con pulso de opacidad `0.6 → 1` escalonado, sin rotación.

### App icon / launch screen nativo

- iOS/Android launch screen: mismo fondo `color/primary` + isotipo centrado
  (sin spinner — el SO no anima). El spinner aparece recién en el splash de React.
- App icon: isotipo blanco sobre `color/primary`, sin wordmark.

## Estados de carga dentro de la app

Regla general: **skeletons para contenido, spinner solo para acciones.**

| Situación | Patrón |
|-----------|--------|
| Cargar una pantalla / lista / tarjeta | **Skeleton** con la forma real del contenido. Fondo `color/border`, shimmer suave de 1.2 s. Usar `src/app/components/ui/skeleton.tsx` |
| Acción en un botón (guardar, actualizar menú) | Spinner de 16–20 px reemplazando el label; el botón mantiene su ancho; queda `disabled` |
| Proceso largo con progreso conocido | Barra de progreso (`progress.tsx`), `color/primary` sobre `color/border` |
| Paginación / "cargar más" | Spinner de 20 px centrado bajo la lista |
| Recarga *pull-to-refresh* | Spinner nativo de la plataforma / `color/primary` |

- Nunca bloquear toda la pantalla con un spinner centrado si se puede mostrar
  skeleton.
- Mínimo 300 ms de skeleton para evitar flash; si la respuesta es más rápida, no
  mostrarlo.
- Los skeletons **no** llevan texto ("Cargando…"): solo la silueta.
- Estados vacíos ≠ estados de carga: el empty state lleva icono `--icon-xl`,
  título H3 y texto Body.

## Componente de referencia

`src/app/components/brand/SplashScreen.tsx` (implementación de referencia, no
cablear al arranque hasta aprobar el manual):

```tsx
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useReducedMotion, useState } from "react";
import LogoBlanco from "@/imports/logo_blanco.svg"; // ajustar al loader de SVG del proyecto

const MIN_VISIBLE_MS = 600;

export function SplashScreen({ ready }: { ready: boolean }) {
  const reduce = useReducedMotion();
  const [minElapsed, setMinElapsed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMinElapsed(true), MIN_VISIBLE_MS);
    return () => clearTimeout(t);
  }, []);

  const show = !(ready && minElapsed);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[color:var(--color-primary)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <img
            src={LogoBlanco}
            alt="Paulina Cocina"
            style={{ width: "min(180px, 44vw)" }}
          />
          <div className="mt-24" aria-label="Cargando" role="status">
            {reduce ? <PulsingDots /> : <Spinner />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Spinner() {
  return (
    <motion.svg
      width={24} height={24} viewBox="0 0 24 24" fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
    >
      <path
        d="M12 3a9 9 0 1 1-6.36 2.64"
        stroke="var(--color-on-primary, #fff)"
        strokeWidth={1.75}
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

function PulsingDots() {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-2 w-2 rounded-full bg-white"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
```
