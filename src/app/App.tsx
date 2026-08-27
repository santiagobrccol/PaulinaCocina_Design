import { useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const RED          = "#C8171A";
const RED_LIGHT    = "#FDECEA";
const ORANGE_TODAY = "#E8793A";

// ─── Logo component (inline SVG — works in any render environment) ─────────────

function LogoMark({ fill = "white", height = 20 }: { fill?: string; height?: number }) {
  const w = height * (947.43 / 96.47);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 947.43 96.47"
      style={{ height, width: w, maxWidth: "100%", display: "block" }}>
      {/* flame / icon mark */}
      <path fill={fill} d="M486.57,92.5s-1.41,1.62-5.71,3.02c-9.93,3.25-20.61-2.16-23.86-12.09-3.37-10.29-2.11-25.46,4.65-37.26,6.19-10.82,9.01-22.51,10.11-30.29.05-.33.51-.32.56.01.52,4.09,1.42,13.95.21,26.13-1.68,16.79,2.77,39,14.04,50.48ZM512.85,30.38c-15.08-6.59-23.69-16.64-26.44-20.25-.19-.25-.59-.03-.49.27,7.61,24.42,25.89,23.14,32.62,43.69,6.25,19.09,2.21,28.34,2.21,28.34,2.11.06,4.26-.24,6.38-.94,9.93-3.25,15.25-13.34,12-23.26-2.45-7.5-9.5-20.52-26.29-27.86ZM518.07,79.47c-.7,6.55-5.13,12.41-11.81,14.6-7,2.29-14.41-.14-18.8-5.54-8.72-9.6-11.78-25.86-11.97-36.12-.42-22.09,2.4-46.1,3.17-52.18.04-.31.48-.31.55,0,9.1,35.63,22.35,32.93,30.67,45.48,11.18,16.85,9.43,29.25,8.18,33.77ZM534.34,30.9c-10.66-9.56-21.82-7.93-37.49-14.91-.17-.08-.32.13-.18.25,2.56,2.03,10.48,7.93,23.3,14.08,14.04,6.74,21.2,22.61,22.69,28.67,0,0,6.25-15.03-8.32-28.1ZM452.41,63.35c2.44-15.42,11.21-25.21,12.78-34.47,0,0-1.4,3.11-7.88,10.41-6.48,7.3-15.15,20.39-11.59,33.56,3.41,12.57,9.25,14.54,9.25,14.54,0,0-5.01-8.61-2.57-24.03Z" />
      {/* wordmark — PAULINA */}
      <path fill={fill} d="M32.41,20.46c3.14,0,6.1.59,8.88,1.78,2.78,1.19,5.21,2.78,7.28,4.8,2.07,2.01,3.7,4.38,4.88,7.1,1.18,2.72,1.78,5.62,1.78,8.7s-.59,6.07-1.78,8.79c-1.18,2.72-2.81,5.09-4.88,7.1-2.07,2.01-4.5,3.61-7.28,4.8-2.78,1.18-5.74,1.78-8.88,1.78H14.21v18.38c0,.47-.18.9-.53,1.29-.36.39-.8.58-1.33.58H1.78c-.47,0-.89-.19-1.24-.58-.36-.38-.53-.81-.53-1.29V22.23c0-.47.18-.89.53-1.24s.77-.53,1.24-.53h30.64ZM32.59,51.18c1.12,0,2.21-.22,3.24-.67s1.92-1.05,2.66-1.82c.74-.77,1.33-1.66,1.78-2.66.44-1.01.67-2.07.67-3.2s-.22-2.19-.67-3.2c-.44-1.01-1.05-1.88-1.82-2.62-.77-.74-1.67-1.33-2.71-1.78-1.04-.44-2.15-.67-3.33-.67H14.21v16.61h18.38Z" />
      <path fill={fill} d="M119.08,82.98c.18.71.12,1.27-.18,1.69-.36.53-.86.8-1.51.8h-10.66c-.89,0-1.45-.36-1.69-1.07l-5.68-13.77h-25.57l-5.77,13.77c-.3.71-.86,1.07-1.69,1.07h-10.39c-.65,0-1.15-.27-1.51-.8-.42-.47-.48-1.04-.18-1.69l25.49-61.45c.24-.71.8-1.07,1.69-1.07h10.57c.77,0,1.3.36,1.6,1.07l25.49,61.45ZM93.51,56.51l-6.84-16.7-7.02,16.7h13.85Z" />
      <path fill={fill} d="M180.09,20.99c.36.36.53.77.53,1.24v35.34c0,3.85-.73,7.46-2.18,10.83-1.45,3.37-3.43,6.34-5.95,8.88-2.52,2.55-5.46,4.55-8.84,5.99-3.37,1.45-6.96,2.18-10.75,2.18s-7.46-.72-10.83-2.18c-3.37-1.45-6.32-3.45-8.84-5.99-2.52-2.54-4.5-5.51-5.95-8.88-1.45-3.37-2.18-6.98-2.18-10.83V22.23c0-.47.18-.89.54-1.24.36-.36.8-.53,1.34-.53h10.28c.48,0,.91.18,1.3.53.39.36.58.77.58,1.24v35.05c0,1.96.37,3.78,1.11,5.47.74,1.69,1.73,3.17,2.97,4.45s2.7,2.28,4.38,3.02c1.68.74,3.47,1.11,5.36,1.11s3.67-.37,5.35-1.11c1.68-.74,3.14-1.75,4.38-3.02s2.23-2.76,2.97-4.45,1.11-3.51,1.11-5.47V22.24c0-.47.18-.89.53-1.24s.77-.53,1.24-.53h10.3c.47,0,.89.18,1.24.53Z" />
      <path fill={fill} d="M239.63,71.88c.39.36.58.77.58,1.24v10.57c0,.47-.19.89-.58,1.24s-.81.53-1.29.53h-41.74c-.06,0-.1.01-.13.04-.03.03-.07.04-.13.04-.47,0-.89-.19-1.24-.58-.36-.38-.53-.81-.53-1.29V22.23c0-.47.18-.89.53-1.24s.77-.53,1.24-.53h10.66c.47,0,.89.18,1.24.53s.53.77.53,1.24v49.11h29.57c.47,0,.9.18,1.29.53Z" />
      <path fill={fill} d="M250.42,85.55c-.47,0-.89-.18-1.24-.53s-.53-.8-.53-1.33V22.23c0-.53.18-.96.53-1.29.36-.33.77-.49,1.24-.49h10.48c.41,0,.83.15,1.24.44.36.36.53.8.53,1.33v61.45c0,.53-.18.98-.53,1.33s-.77.53-1.24.53c-.06,0-.1-.02-.13-.04s-.07-.04-.13-.04h-9.94c-.06,0-.1.01-.13.04-.03.03-.07.04-.13.04Z" />
      <path fill={fill} d="M337.63,20.9c.36.36.53.8.53,1.33v61.45c0,.47-.18.89-.53,1.24-.35.36-.76.53-1.23.53h-10.41c-.53,0-.97-.18-1.32-.53l-37.21-41.11v39.87c0,.47-.18.89-.53,1.24s-.8.53-1.33.53h-10.39c-.47,0-.89-.18-1.24-.53s-.53-.77-.53-1.24V22.23c0-.47.18-.89.53-1.24s.77-.53,1.24-.53h10.39c.59,0,1.07.18,1.42.53,0,.06.71.86,2.13,2.4,1.42,1.54,3.24,3.54,5.46,5.99,2.22,2.46,4.71,5.2,7.46,8.21,2.75,3.02,5.51,6.05,8.26,9.1,2.75,3.05,5.34,5.92,7.77,8.61,2.43,2.69,4.44,4.9,6.04,6.62V22.23c0-.47.18-.89.53-1.24s.76-.53,1.24-.53h10.5c.41,0,.82.15,1.24.44Z" />
      <path fill={fill} d="M413.91,82.98c.18.71.12,1.27-.18,1.69-.36.53-.86.8-1.51.8h-10.66c-.89,0-1.45-.36-1.69-1.07l-5.68-13.77h-25.57l-5.77,13.77c-.3.71-.86,1.07-1.69,1.07h-10.39c-.65,0-1.15-.27-1.51-.8-.42-.47-.48-1.04-.18-1.69l25.49-61.45c.24-.71.8-1.07,1.69-1.07h10.57c.77,0,1.3.36,1.6,1.07l25.49,61.45ZM388.33,56.51l-6.84-16.7-7.02,16.7h13.85Z" />
      {/* wordmark — COCINA */}
      <path fill={fill} d="M631.29,73.47c.83.83.83,1.66,0,2.49-3.14,3.08-6.67,5.43-10.61,7.06-3.94,1.63-8.07,2.44-12.39,2.44s-8.73-.86-12.7-2.58c-3.97-1.72-7.42-4.04-10.35-6.97-2.93-2.93-5.26-6.36-6.97-10.3-1.72-3.94-2.58-8.15-2.58-12.65s.86-8.72,2.58-12.66c1.72-3.94,4.04-7.37,6.97-10.3,2.93-2.93,6.38-5.25,10.35-6.97,3.96-1.72,8.2-2.58,12.7-2.58s8.44.8,12.34,2.4c3.91,1.6,7.43,3.94,10.57,7.02v.09c.83.83.83,1.66,0,2.49-.06.12-.21.24-.44.36l-7.1,7.19c-.36.36-.8.53-1.33.53-.47,0-.89-.18-1.24-.53-1.72-1.72-3.69-3.05-5.91-4-2.22-.95-4.57-1.42-7.06-1.42s-4.93.49-7.15,1.47c-2.22.98-4.16,2.29-5.82,3.95-1.66,1.66-2.98,3.6-3.95,5.82-.98,2.22-1.47,4.6-1.47,7.15s.49,4.93,1.47,7.15c.98,2.22,2.29,4.16,3.95,5.82,1.66,1.66,3.6,2.98,5.82,3.95,2.22.98,4.6,1.47,7.15,1.47s4.85-.47,7.1-1.42c2.25-.95,4.23-2.28,5.95-4,.24-.36.65-.53,1.24-.53.53,0,.98.18,1.33.53l7.37,7.37.18.18Z" />
      <path fill={fill} d="M673.03,20.46c4.56,0,8.84.86,12.83,2.58,4,1.72,7.49,4.04,10.48,6.97,2.99,2.93,5.36,6.37,7.1,10.3,1.75,3.94,2.62,8.16,2.62,12.66s-.87,8.72-2.62,12.65c-1.75,3.94-4.12,7.37-7.1,10.3-2.99,2.93-6.48,5.25-10.48,6.97-4,1.72-8.27,2.58-12.83,2.58s-8.85-.86-12.88-2.58c-4.03-1.72-7.53-4.04-10.52-6.97-2.99-2.93-5.36-6.36-7.1-10.3-1.75-3.94-2.62-8.15-2.62-12.65s.87-8.72,2.62-12.66c1.75-3.94,4.12-7.37,7.1-10.3,2.99-2.93,6.5-5.25,10.52-6.97,4.03-1.72,8.32-2.58,12.88-2.58ZM654.11,52.96c0,2.55.49,4.93,1.47,7.15.98,2.22,2.32,4.16,4.04,5.82,1.72,1.66,3.7,2.98,5.95,3.95,2.25.98,4.68,1.47,7.28,1.47s4.96-.49,7.24-1.47c2.28-.98,4.28-2.29,5.99-3.95,1.72-1.66,3.06-3.6,4.04-5.82.98-2.22,1.47-4.6,1.47-7.15s-.49-4.93-1.47-7.15c-.98-2.22-2.32-4.16-4.04-5.82-1.72-1.66-3.72-2.98-5.99-3.95-2.28-.98-4.69-1.47-7.24-1.47s-5.03.49-7.28,1.47c-2.25.98-4.23,2.29-5.95,3.95-1.72,1.66-3.06,3.6-4.04,5.82-.98,2.22-1.47,4.6-1.47,7.15Z" />
      <path fill={fill} d="M771.15,73.47c.83.83.83,1.66,0,2.49-3.14,3.08-6.67,5.43-10.61,7.06-3.94,1.63-8.07,2.44-12.39,2.44s-8.73-.86-12.7-2.58c-3.97-1.72-7.42-4.04-10.35-6.97-2.93-2.93-5.26-6.36-6.97-10.3-1.72-3.94-2.58-8.15-2.58-12.65s.86-8.72,2.58-12.66c1.72-3.94,4.04-7.37,6.97-10.3s6.38-5.25,10.35-6.97c3.96-1.72,8.2-2.58,12.7-2.58s8.44.8,12.34,2.4c3.91,1.6,7.43,3.94,10.57,7.02v.09c.83.83.83,1.66,0,2.49-.06.12-.21.24-.44.36l-7.1,7.19c-.36.36-.8.53-1.33.53-.47,0-.89-.18-1.24-.53-1.72-1.72-3.69-3.05-5.91-4-2.22-.95-4.57-1.42-7.06-1.42s-4.93.49-7.15,1.47c-2.22.98-4.16,2.29-5.82,3.95-1.66,1.66-2.98,3.6-3.95,5.82-.98,2.22-1.47,4.6-1.47,7.15s.49,4.93,1.47,7.15c.98,2.22,2.29,4.16,3.95,5.82,1.66,1.66,3.6,2.98,5.82,3.95,2.22.98,4.6,1.47,7.15,1.47s4.85-.47,7.1-1.42c2.25-.95,4.23-2.28,5.95-4,.24-.36.65-.53,1.24-.53.53,0,.98.18,1.33.53l7.37,7.37.18.18Z" />
      <path fill={fill} d="M783.85,85.55c-.47,0-.89-.18-1.24-.53s-.53-.8-.53-1.33V22.23c0-.53.18-.96.53-1.29.36-.33.77-.49,1.24-.49h10.48c.41,0,.83.15,1.24.44.36.36.53.8.53,1.33v61.45c0,.53-.18.98-.53,1.33s-.77.53-1.24.53c-.06,0-.1-.02-.13-.04s-.07-.04-.13-.04h-9.94c-.06,0-.1.01-.13.04-.03.03-.07.04-.13.04Z" />
      <path fill={fill} d="M871.05,20.9c.36.36.53.8.53,1.33v61.45c0,.47-.18.89-.53,1.24-.35.36-.76.53-1.23.53h-10.41c-.53,0-.97-.18-1.32-.53l-37.21-41.11v39.87c0,.47-.18.89-.53,1.24s-.8.53-1.33.53h-10.39c-.47,0-.89-.18-1.24-.53s-.53-.77-.53-1.24V22.23c0-.47.18-.89.53-1.24s.77-.53,1.24-.53h10.39c.59,0,1.07.18,1.42.53,0,.06.71.86,2.13,2.4,1.42,1.54,3.24,3.54,5.46,5.99,2.22,2.46,4.71,5.2,7.46,8.21,2.75,3.02,5.51,6.05,8.26,9.1,2.75,3.05,5.34,5.92,7.77,8.61,2.43,2.69,4.44,4.9,6.04,6.62V22.23c0-.47.18-.89.53-1.24.35-.36.76-.53,1.24-.53h10.5c.41,0,.82.15,1.24.44Z" />
      <path fill={fill} d="M947.33,82.98c.18.71.12,1.27-.18,1.69-.36.53-.86.8-1.51.8h-10.66c-.89,0-1.45-.36-1.69-1.07l-5.68-13.77h-25.57l-5.77,13.77c-.3.71-.86,1.07-1.69,1.07h-10.39c-.65,0-1.15-.27-1.51-.8-.42-.47-.48-1.04-.18-1.69l25.49-61.45c.24-.71.8-1.07,1.69-1.07h10.57c.77,0,1.3.36,1.6,1.07l25.49,61.45ZM921.76,56.51l-6.84-16.7-7.02,16.7h13.85Z" />
    </svg>
  );
}

// ─── iPhone Status Bar ────────────────────────────────────────────────────────

function SignalIcon({ white }: { white?: boolean }) {
  const c = white ? "white" : "#1F2937";
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
      <rect x="0"    y="8"   width="3" height="4"   rx="0.8" fill={c} />
      <rect x="4.5"  y="5.5" width="3" height="6.5" rx="0.8" fill={c} />
      <rect x="9"    y="3"   width="3" height="9"   rx="0.8" fill={c} />
      <rect x="13.5" y="0"   width="3" height="12"  rx="0.8" fill={c} />
    </svg>
  );
}
function WifiIcon({ white }: { white?: boolean }) {
  const c = white ? "white" : "#1F2937";
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M8 9.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill={c} />
      <path d="M4.5 7.2a5 5 0 017 0"  stroke={c} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M1.5 4.2a9 9 0 0113 0" stroke={c} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function BatteryIcon({ white }: { white?: boolean }) {
  const c = white ? "white" : "#1F2937";
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} strokeWidth="1" />
      <rect x="2"   y="2"   width="16" height="8"  rx="2" fill={c} />
      <path d="M22.5 4v4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IPhoneStatusBar({ dark = false, time = "9:41" }: { dark?: boolean; time?: string }) {
  return (
    <div className="shrink-0 flex items-center justify-between px-6 pt-3 pb-1"
      style={{ backgroundColor: dark ? "white" : RED, minHeight: 44 }}>
      <span className="text-xs font-bold"
        style={{ color: dark ? "#1F2937" : "white", fontVariantNumeric: "tabular-nums" }}>{time}</span>
      <div className="w-16" />
      <div className="flex items-center gap-1.5">
        <SignalIcon white={!dark} /><WifiIcon white={!dark} /><BatteryIcon white={!dark} />
      </div>
    </div>
  );
}

// ─── Taxonomy ─────────────────────────────────────────────────────────────────

type Diet = "Estándar" | "Vegana";

const DIET_COLOR: Record<Diet, string> = {
  "Estándar": "#94A3B8",
  "Vegana":   "#16A085",
};

function DietBadge({ diet, small }: { diet: Diet; small?: boolean }) {
  const px = small ? "px-1.5 py-0.5 text-[8px]" : "px-2.5 py-1 text-[10px]";
  return (
    <span className={`${px} font-bold uppercase tracking-wide rounded-full text-white`}
      style={{ backgroundColor: DIET_COLOR[diet] }}>{diet}</span>
  );
}

// ─── Data types ───────────────────────────────────────────────────────────────

type Ingredient = { name: string; qty: number; unit: string };

type GarnishRecipe = {
  name: string;
  time: string;
  ingredients: Ingredient[];
  steps: string[];
};

type Recipe = {
  id: number;
  name: string;
  image: string;
  diet: Diet;
  time: string;
  ingredients: Ingredient[];
  steps: string[];
  garnish?: GarnishRecipe;
};

type DayMenu = { day: string; recipes: Recipe[] };
type Week    = { id: string; label: string; title: string; coverImage: string; days: DayMenu[] };

// ─── Recipe data ──────────────────────────────────────────────────────────────

const ALL_RECIPES: Record<number, Recipe> = {
  1: {
    id: 1, name: "Pollo al limón", diet: "Estándar",
    time: "40 min",
    image: "https://images.unsplash.com/photo-1693820488674-4f8c98fbc0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Pechuga de pollo", qty: 600, unit: "g" },
      { name: "Limón",            qty: 2,   unit: "unidad" },
      { name: "Aceite de oliva",  qty: 3,   unit: "cdas" },
      { name: "Dientes de ajo",   qty: 4,   unit: "unidad" },
      { name: "Romero fresco",    qty: 2,   unit: "ramitas" },
      { name: "Sal y pimienta",   qty: 0,   unit: "" },
    ],
    steps: [
      "Marinar el pollo con el jugo de limón, ajo picado y aceite de oliva durante 20 minutos.",
      "Calentar una sartén a fuego medio-alto. Sellar el pollo 3 minutos por lado hasta dorar.",
      "Agregar el romero y bajar a fuego medio. Cocinar 15 minutos tapado.",
      "Dejar reposar 5 minutos antes de servir. Condimentar con sal y pimienta al gusto.",
    ],
    garnish: {
      name: "Papas al horno",
      time: "40 min",
      ingredients: [
        { name: "Papas",          qty: 500, unit: "g" },
        { name: "Aceite de oliva", qty: 2,  unit: "cdas" },
        { name: "Dientes de ajo", qty: 2,   unit: "unidad" },
        { name: "Romero fresco",  qty: 1,   unit: "ramita" },
        { name: "Sal y pimienta", qty: 0,   unit: "" },
      ],
      steps: [
        "Precalentar el horno a 200°C. Lavar y cortar las papas en cuartos.",
        "Mezclar con aceite, ajo aplastado y romero. Condimentar con sal y pimienta.",
        "Distribuir en una asadera en una sola capa sin superponer.",
        "Hornear 35-40 minutos hasta dorar, girando a mitad de cocción.",
      ],
    },
  },
  2: {
    id: 2, name: "Sopa de calabaza", diet: "Vegana",
    time: "35 min",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Calabaza",          qty: 800, unit: "g" },
      { name: "Cebolla",           qty: 1,   unit: "unidad" },
      { name: "Dientes de ajo",    qty: 3,   unit: "unidad" },
      { name: "Caldo de verduras", qty: 750, unit: "ml" },
      { name: "Jengibre rallado",  qty: 1,   unit: "cda" },
      { name: "Crema de coco",     qty: 120, unit: "ml" },
    ],
    steps: [
      "Pelar y cortar la calabaza en cubos de 3 cm. Picar cebolla y ajo.",
      "Saltear la cebolla y el ajo en aceite hasta transparentar. Agregar el jengibre.",
      "Incorporar la calabaza y el caldo. Cocinar 20 minutos hasta que esté tierna.",
      "Licuar hasta obtener una crema suave. Añadir la crema de coco y calentar 2 minutos.",
    ],
  },
  3: {
    id: 3, name: "Pan integral fácil", diet: "Vegana",
    time: "60 min",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Harina integral", qty: 400, unit: "g" },
      { name: "Levadura seca",   qty: 7,   unit: "g" },
      { name: "Agua tibia",      qty: 280, unit: "ml" },
      { name: "Aceite de oliva", qty: 2,   unit: "cdas" },
      { name: "Sal",             qty: 1,   unit: "cdita" },
      { name: "Miel",            qty: 1,   unit: "cda" },
    ],
    steps: [
      "Disolver la levadura y la miel en el agua tibia. Dejar reposar 10 minutos.",
      "Mezclar la harina con la sal. Incorporar la mezcla de levadura y el aceite.",
      "Amasar 10 minutos hasta obtener una masa lisa. Dejar leudar 30 minutos tapada.",
      "Formar el pan y hornear a 200°C por 30 minutos hasta dorar.",
    ],
  },
  4: {
    id: 4, name: "Fideos con pesto", diet: "Vegana",
    time: "20 min",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Fideos (spaghetti)", qty: 320, unit: "g" },
      { name: "Albahaca fresca",    qty: 60,  unit: "g" },
      { name: "Parmesano rallado",  qty: 80,  unit: "g" },
      { name: "Piñones",            qty: 40,  unit: "g" },
      { name: "Dientes de ajo",     qty: 2,   unit: "unidad" },
      { name: "Aceite de oliva",    qty: 80,  unit: "ml" },
    ],
    steps: [
      "Cocinar los fideos en agua con sal según el paquete.",
      "Procesar albahaca, ajo, piñones y parmesano. Agregar aceite en hilo hasta emulsionar.",
      "Escurrir la pasta reservando ½ taza del agua de cocción.",
      "Mezclar con el pesto, añadir agua de cocción si es necesario.",
    ],
  },
  5: {
    id: 5, name: "Pastel de papa", diet: "Estándar",
    time: "55 min",
    image: "https://images.unsplash.com/photo-1599161146640-8d60bd2888e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Papas",        qty: 800, unit: "g" },
      { name: "Carne picada", qty: 500, unit: "g" },
      { name: "Cebolla",      qty: 1,   unit: "unidad" },
      { name: "Huevos",       qty: 2,   unit: "unidad" },
      { name: "Leche",        qty: 60,  unit: "ml" },
      { name: "Manteca",      qty: 30,  unit: "g" },
    ],
    steps: [
      "Hervir las papas con sal hasta tiernas. Hacer un puré con manteca, leche y huevo.",
      "Saltear la cebolla picada. Agregar la carne y cocinar hasta dorar. Salpimentar.",
      "En una fuente, colocar la carne y cubrir con el puré.",
      "Marcar con tenedor y hornear a 180°C por 25 minutos hasta gratinar.",
    ],
  },
  6: {
    id: 6, name: "Risotto de hongos", diet: "Vegana",
    time: "45 min",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Arroz arborio",    qty: 320,  unit: "g" },
      { name: "Hongos mixtos",    qty: 300,  unit: "g" },
      { name: "Cebolla",          qty: 1,    unit: "unidad" },
      { name: "Vino blanco",      qty: 120,  unit: "ml" },
      { name: "Caldo caliente",   qty: 1000, unit: "ml" },
      { name: "Parmesano rallado", qty: 80,  unit: "g" },
    ],
    steps: [
      "Saltear los hongos en manteca hasta dorar. Reservar.",
      "Cocinar la cebolla picada. Agregar el arroz y tostar 2 minutos.",
      "Verter el vino y dejar absorber. Ir agregando el caldo caliente de a cucharones, revolviendo constantemente.",
      "Cuando el arroz esté al dente (18-20 min), incorporar los hongos y el parmesano.",
    ],
  },
  7: {
    id: 7, name: "Curry de garbanzos", diet: "Vegana",
    time: "30 min",
    image: "https://images.unsplash.com/photo-1709230552433-6c5be48e2e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Garbanzos cocidos", qty: 480, unit: "g" },
      { name: "Leche de coco",     qty: 400, unit: "ml" },
      { name: "Curry en polvo",    qty: 2,   unit: "cdas" },
      { name: "Tomates perita",    qty: 400, unit: "g" },
      { name: "Cebolla",           qty: 1,   unit: "unidad" },
      { name: "Cilantro fresco",   qty: 20,  unit: "g" },
    ],
    steps: [
      "Saltear la cebolla picada en aceite hasta dorar. Agregar el curry y tostar 1 minuto.",
      "Incorporar los tomates en cubos y cocinar 5 minutos.",
      "Añadir los garbanzos y la leche de coco. Cocinar 15 minutos a fuego medio.",
      "Servir con arroz basmati y decorar con cilantro fresco.",
    ],
  },
  8: {
    id: 8, name: "Ensalada griega", diet: "Vegana",
    time: "15 min",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    ingredients: [
      { name: "Tomates cherry",   qty: 300, unit: "g" },
      { name: "Pepino",           qty: 1,   unit: "unidad" },
      { name: "Aceitunas negras", qty: 100, unit: "g" },
      { name: "Queso feta",       qty: 200, unit: "g" },
      { name: "Cebolla morada",   qty: 0.5, unit: "unidad" },
      { name: "Aceite de oliva",  qty: 3,   unit: "cdas" },
    ],
    steps: [
      "Cortar los tomates por la mitad, el pepino en rodajas y la cebolla en aros finos.",
      "Disponer las verduras en un plato amplio. Agregar las aceitunas.",
      "Desmenuzar el feta por encima.",
      "Aliñar con aceite de oliva, orégano seco, sal y pimienta.",
    ],
  },
};

const WEEKS: Week[] = [
  {
    id: "w1", label: "Semana del 22 al 27 de junio", title: "Semana actual",
    coverImage: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    days: [
      { day: "Miércoles", recipes: [ALL_RECIPES[4], ALL_RECIPES[5], ALL_RECIPES[1]] },
      { day: "Jueves",    recipes: [ALL_RECIPES[4], ALL_RECIPES[5]] },
      { day: "Viernes",   recipes: [ALL_RECIPES[6], ALL_RECIPES[2]] },
      { day: "Sábado",    recipes: [ALL_RECIPES[7], ALL_RECIPES[3]] },
    ],
  },
  {
    id: "w2", label: "Semana del 15 al 20 de junio", title: "Semana anterior",
    coverImage: "https://images.unsplash.com/photo-1714683237282-4a4623333058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    days: [
      { day: "Lunes",     recipes: [ALL_RECIPES[1], ALL_RECIPES[2]] },
      { day: "Martes",    recipes: [ALL_RECIPES[8], ALL_RECIPES[3]] },
      { day: "Miércoles", recipes: [ALL_RECIPES[4], ALL_RECIPES[6]] },
    ],
  },
];

// Exactly one Estándar + one Vegana for the today card
const TODAY_RECIPES = [ALL_RECIPES[1], ALL_RECIPES[2]] as const;

// ─── Especial del mes ─────────────────────────────────────────────────────────

const MONTHLY_SPECIAL: Recipe = {
  id: 9,
  name: "Lomo en salsa de vino tinto y hongos",
  diet: "Estándar",
  time: "1 h 10 min",
  image: "https://images.unsplash.com/photo-1714579324629-da46dd0d7d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  ingredients: [
    { name: "Lomo de res",         qty: 700,  unit: "g" },
    { name: "Hongos portobello",   qty: 250,  unit: "g" },
    { name: "Vino tinto seco",     qty: 200,  unit: "ml" },
    { name: "Caldo de carne",      qty: 300,  unit: "ml" },
    { name: "Manteca",             qty: 40,   unit: "g" },
    { name: "Dientes de ajo",      qty: 3,    unit: "unidad" },
    { name: "Tomillo fresco",      qty: 3,    unit: "ramitas" },
    { name: "Cebolla",             qty: 1,    unit: "unidad" },
    { name: "Harina",              qty: 1,    unit: "cda" },
    { name: "Sal y pimienta negra", qty: 0,   unit: "" },
  ],
  steps: [
    "Sacar el lomo de la heladera 30 minutos antes. Salpimentar generosamente por todos lados.",
    "Calentar una sartén de hierro a fuego alto con un hilo de aceite. Sellar el lomo 3 min por lado hasta formar costra dorada. Retirar y reservar.",
    "En la misma sartén, saltear la cebolla y el ajo en manteca hasta transparentar. Agregar los hongos laminados y cocinar 5 min.",
    "Espolvorear la harina, mezclar bien. Verter el vino tinto y dejar reducir a la mitad a fuego medio-alto.",
    "Incorporar el caldo y el tomillo. Cocinar la salsa 10 minutos hasta espesar.",
    "Volver el lomo a la sartén. Terminar la cocción en horno a 180°C: 8 min para término medio, 12 min para bien cocido.",
    "Dejar reposar 5 minutos antes de cortar. Servir con la salsa de hongos y acompañar con puré o papas asadas.",
  ],
};

const EBOOKS = [
  { id: 1,  title: "Cocina Italiana",  subtitle: "50 recetas clásicas",    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "Gratis", tag: "Más leído", category: "Cocinas del mundo" },
  { id: 2,  title: "Recetas Veganas",  subtitle: "Plantas al poder",        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "$4.99",  tag: "Nuevo",     category: "Cocinas del mundo" },
  { id: 3,  title: "Repostería Fácil", subtitle: "Dulces sin esfuerzo",     image: "https://images.unsplash.com/photo-1643487237895-ed2e3d2eb6ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "Gratis", tag: "",          category: "Repostería" },
  { id: 4,  title: "Cocina Saludable", subtitle: "Nutrición y sabor",       image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "$2.99",  tag: "Popular",   category: "Saludable" },
  { id: 5,  title: "Libros de Asados", subtitle: "El arte de la parrilla",  image: "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "Gratis", tag: "",          category: "Al fuego" },
  { id: 6,  title: "Pastas del Mundo", subtitle: "Recetas internacionales",  image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "$3.99",  tag: "Nuevo",     category: "Cocinas del mundo" },
  { id: 9,  title: "Sopas Caseras",    subtitle: "Caldos y cremas del mundo", image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", price: "Gratis", tag: "Nuevo",     category: "Cocinas del mundo" },
  { id: 10, title: "Pan Artesanal",    subtitle: "Masas y fermentados",     image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "Gratis", tag: "",          category: "Repostería" },
  { id: 11, title: "BBQ & Parrilla",   subtitle: "Técnicas y secretos",     image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",  price: "Gratis", tag: "",          category: "Al fuego" },
];

// ─── Auth screens ─────────────────────────────────────────────────────────────

type AuthScreen = "login" | "create-account";

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  const handleLogin = () => {
    if (!email.trim()) { setError("Ingresá tu email."); return; }
    if (password.length < 4) { setError("Contraseña muy corta."); return; }
    setError("");
    onLogin();
  };

  return (
    <div className="absolute inset-0 z-[70] flex flex-col bg-white" style={{ borderRadius: "inherit" }}>
      <IPhoneStatusBar dark time="9:41" />
      <div className="flex-1 overflow-y-auto px-6 pb-8" style={{ scrollbarWidth: "none" }}>
        {/* Logo */}
        <div className="flex justify-center mt-10 mb-10">
          <LogoMark fill="#111" height={36} />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-1">Bienvenida</h2>
        <p className="text-sm text-gray-400 mb-8">Iniciá sesión para acceder a tu menú semanal.</p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Email</label>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3.5 rounded-2xl border text-sm outline-none transition-all"
            style={{ borderColor: email ? RED : "#E5E7EB", backgroundColor: "#FAFAFA" }}
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Contraseña</label>
          <input
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3.5 rounded-2xl border text-sm outline-none transition-all"
            style={{ borderColor: password ? RED : "#E5E7EB", backgroundColor: "#FAFAFA" }}
          />
        </div>

        <div className="flex justify-end mb-6">
          <button className="text-xs font-semibold" style={{ color: RED }}>¿Olvidaste tu contraseña?</button>
        </div>

        {error && <p className="text-xs mb-4 text-center font-semibold" style={{ color: RED }}>{error}</p>}

        <button onClick={handleLogin}
          className="w-full py-4 rounded-2xl text-white font-bold text-sm mb-4 active:scale-[0.98] transition-transform"
          style={{ backgroundColor: RED }}>
          Iniciar sesión
        </button>

        <p className="text-center text-xs text-gray-400 mt-6">
          Al continuar aceptás los{" "}
          <span className="font-semibold underline underline-offset-2" style={{ color: RED }}>términos y condiciones</span>.
        </p>
      </div>
    </div>
  );
}

function CreateAccountScreen({ onBack, onCreated }: { onBack: () => void; onCreated: () => void }) {
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [error, setError]       = useState("");

  const handleCreate = () => {
    if (!name.trim())            { setError("Ingresá tu nombre."); return; }
    if (!email.includes("@"))    { setError("Email no válido."); return; }
    if (password.length < 6)     { setError("La contraseña debe tener al menos 6 caracteres."); return; }
    if (password !== confirm)    { setError("Las contraseñas no coinciden."); return; }
    setError("");
    onCreated();
  };

  return (
    <div className="absolute inset-0 z-[70] flex flex-col bg-white" style={{ borderRadius: "inherit" }}>
      <IPhoneStatusBar dark time="9:41" />
      <div className="shrink-0 flex items-center gap-3 px-4 py-3">
        <BackButton onBack={onBack} dark />
        <h1 className="text-sm font-bold text-gray-900 flex-1">Crear cuenta</h1>
        <div className="w-9" />
      </div>
      <div className="flex-1 overflow-y-auto px-6 pb-8" style={{ scrollbarWidth: "none" }}>
        <div className="flex justify-center mt-4 mb-8">
          <LogoMark fill="#111" height={28} />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-1">Registrate gratis</h2>
        <p className="text-sm text-gray-400 mb-6">Accedé a tu menú semanal personalizado.</p>

        {[
          { label: "Nombre",              value: name,     setter: setName,     type: "text",     placeholder: "Tu nombre" },
          { label: "Email",               value: email,    setter: setEmail,    type: "email",    placeholder: "tu@email.com" },
          { label: "Contraseña",          value: password, setter: setPassword, type: "password", placeholder: "Mínimo 6 caracteres" },
          { label: "Confirmar contraseña", value: confirm,  setter: setConfirm,  type: "password", placeholder: "Repetí la contraseña" },
        ].map((field) => (
          <div key={field.label} className="mb-4">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">{field.label}</label>
            <input
              type={field.type} value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-3.5 rounded-2xl border text-sm outline-none transition-all"
              style={{ borderColor: field.value ? RED : "#E5E7EB", backgroundColor: "#FAFAFA" }}
            />
          </div>
        ))}

        {error && <p className="text-xs mb-4 text-center font-semibold" style={{ color: RED }}>{error}</p>}

        <button onClick={handleCreate}
          className="w-full py-4 rounded-2xl text-white font-bold text-sm mt-2 active:scale-[0.98] transition-transform"
          style={{ backgroundColor: RED }}>
          Crear cuenta
        </button>

        <p className="text-center text-xs text-gray-400 mt-6">
          ¿Ya tenés cuenta?{" "}
          <button onClick={onBack} className="font-bold underline underline-offset-2" style={{ color: RED }}>
            Iniciar sesión
          </button>
        </p>
      </div>
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────

type View =
  | { type: "home" }
  | { type: "week-detail"; week: Week }
  | { type: "recipe-detail"; recipe: Recipe };

const TAB_TITLES: Record<string, string> = {
  menu:   "Menú semanal",
  ebooks: "Ebooks",
  lista:  "Mi lista",
};

// ─── Shared components ────────────────────────────────────────────────────────

function BackButton({ onBack, dark }: { onBack: () => void; dark?: boolean }) {
  return (
    <button onClick={onBack}
      className="w-9 h-9 rounded-full flex items-center justify-center active:scale-90 transition-transform shrink-0"
      style={{ backgroundColor: dark ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.9)", boxShadow: dark ? "none" : "0 2px 8px rgba(0,0,0,0.12)" }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M9 18l6-6-6-6" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────

function BottomNav({ activeTab, onTabChange }: { activeTab: string; onTabChange: (t: string) => void }) {
  const tabs = [
    { id: "menu",   label: "Menú",
      icon: (a: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke={a ? RED : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" /></svg> },
    { id: "ebooks", label: "Ebooks",
      icon: (a: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke={a ? RED : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke={a ? RED : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
    { id: "lista",  label: "Mi lista",
      icon: (a: boolean) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke={a ? RED : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="9" y="3" width="6" height="4" rx="1" stroke={a ? RED : "#9CA3AF"} strokeWidth="2" /><path d="M9 12h6M9 16h4" stroke={a ? RED : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" /></svg> },
  ];
  return (
    <div className="shrink-0 flex border-t border-gray-100 bg-white px-2 pt-2 pb-4">
      {tabs.map((tab) => {
        const active = activeTab === tab.id;
        return (
          <button key={tab.id} onClick={() => onTabChange(tab.id)} className="flex-1 flex flex-col items-center gap-0.5 py-1">
            {tab.icon(active)}
            <span className="text-[10px] font-semibold mt-0.5" style={{ color: active ? RED : "#9CA3AF" }}>{tab.label}</span>
            {active && <span className="w-1 h-1 rounded-full" style={{ backgroundColor: RED }} />}
          </button>
        );
      })}
    </div>
  );
}

// ─── Recipe Detail Screen ─────────────────────────────────────────────────────

const DEFAULT_PORTIONS = 4; // matches "Comensales por defecto" in profile

function fmtQty(qty: number): string {
  return String(Math.round(qty * 10) / 10);
}

function PortionSelector({ portions, onChange, accentColor = RED }: {
  portions: number; onChange: (p: number) => void; accentColor?: string;
}) {
  const canDecrease = portions > 1;
  const canIncrease = portions < 20;
  return (
    <div className="flex items-center justify-between py-1">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Porciones</p>
      <div className="flex items-center gap-3">
        <button onClick={() => canDecrease && onChange(portions - 1)}
          className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors"
          style={{ borderColor: canDecrease ? accentColor : "#E5E7EB" }}>
          <span className="text-lg font-bold leading-none" style={{ color: canDecrease ? accentColor : "#D1D5DB" }}>−</span>
        </button>
        <span className="text-sm font-bold text-gray-800 tabular-nums" style={{ minWidth: 80, textAlign: "center" }}>
          {portions} {portions === 1 ? "persona" : "personas"}
        </span>
        <button onClick={() => canIncrease && onChange(portions + 1)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors"
          style={{ backgroundColor: canIncrease ? accentColor : "#D1D5DB" }}>
          <span className="text-lg font-bold leading-none">+</span>
        </button>
      </div>
    </div>
  );
}

function IngredientList({ ingredients, scale }: { ingredients: Ingredient[]; scale: number }) {
  return (
    <div>
      {ingredients.map((ing, i) => {
        const scaledQty = ing.qty * scale;
        const qtyStr = ing.qty === 0 ? "Al gusto" : `${fmtQty(scaledQty)} ${ing.unit}`;
        return (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: RED }} />
              <span className="text-sm text-gray-800">{ing.name}</span>
            </div>
            <span className="text-sm font-semibold" style={{ color: ing.qty === 0 ? "#C0C0C0" : "#6B7280" }}>{qtyStr}</span>
          </div>
        );
      })}
    </div>
  );
}

function StepList({ steps, accentColor = RED }: { steps: string[]; accentColor?: string }) {
  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3">
          <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
            style={{ backgroundColor: accentColor }}>{i + 1}</div>
          <p className="text-sm text-gray-600 leading-relaxed flex-1">{step}</p>
        </div>
      ))}
    </div>
  );
}

function RecipeDetailScreen({ recipe, onBack, isInList, onToggleList, onViewShoppingList, onMarkCooked }: {
  recipe: Recipe; onBack: () => void; isInList: boolean; onToggleList: () => void; onViewShoppingList: () => void; onMarkCooked?: () => void;
}) {
  const [portions, setPortions]               = useState(DEFAULT_PORTIONS);
  const [garnishPortions, setGarnishPortions] = useState(DEFAULT_PORTIONS);

  const scale        = portions / 4;
  const garnishScale = garnishPortions / 4;

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-white" style={{ borderRadius: "inherit" }}>
      {/* Hero */}
      <div className="relative shrink-0" style={{ height: 240 }}>
        <ImageWithFallback src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute top-10 left-4"><BackButton onBack={onBack} /></div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div className="flex-1 min-w-0">
            <DietBadge diet={recipe.diet} />
            <h1 className="text-white text-2xl font-bold leading-tight drop-shadow mt-1.5">{recipe.name}</h1>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0"
            style={{ backgroundColor: "rgba(0,0,0,0.52)" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
              <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-xs font-semibold">{recipe.time}</span>
          </div>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto bg-white" style={{ scrollbarWidth: "none" }}>
        <div className="px-4 pt-4 pb-32">
          {/* Compact portion selector */}
          <div className="mb-5 px-1">
            <PortionSelector portions={portions} onChange={setPortions} />
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-base font-bold text-gray-900 mb-3">Ingredientes</h2>
            <IngredientList ingredients={recipe.ingredients} scale={scale} />
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-3">Preparación</h2>
            <StepList steps={recipe.steps} />
          </div>

          {/* ── Guarnición embedded section ── */}
          {recipe.garnish && (
            <>
              <div className="my-6 flex items-center gap-3">
                <div className="flex-1 h-px" style={{ backgroundColor: "#E5E7EB" }} />
                <div className="px-3 py-1.5 rounded-full" style={{ backgroundColor: ORANGE_TODAY }}>
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider">Guarnición</span>
                </div>
                <div className="flex-1 h-px" style={{ backgroundColor: "#E5E7EB" }} />
              </div>

              <div className="rounded-2xl overflow-hidden" style={{ border: `1.5px solid ${ORANGE_TODAY}20`, backgroundColor: "#FFF7F3" }}>
                <div className="px-4 pt-4 pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-bold text-gray-900">{recipe.garnish.name}</h2>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-xl"
                      style={{ backgroundColor: `${ORANGE_TODAY}20`, color: ORANGE_TODAY }}>
                      {recipe.garnish.time}
                    </span>
                  </div>

                  {/* Garnish portions selector */}
                  <div className="mb-4 px-1">
                    <PortionSelector
                      portions={garnishPortions}
                      onChange={setGarnishPortions}
                      accentColor={ORANGE_TODAY}
                    />
                  </div>

                  {/* Garnish ingredients */}
                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-2">Ingredientes</h3>
                    {recipe.garnish.ingredients.map((ing, i) => {
                      const scaledQty = ing.qty * garnishScale;
                      const qtyStr = ing.qty === 0 ? "Al gusto" : `${fmtQty(scaledQty)} ${ing.unit}`;
                      return (
                        <div key={i} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: `${ORANGE_TODAY}20` }}>
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: ORANGE_TODAY }} />
                            <span className="text-sm text-gray-700">{ing.name}</span>
                          </div>
                          <span className="text-sm font-semibold" style={{ color: ing.qty === 0 ? "#C0C0C0" : "#6B7280" }}>{qtyStr}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Garnish steps */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-2">Preparación</h3>
                    <StepList steps={recipe.garnish.steps} accentColor={ORANGE_TODAY} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 pt-3 bg-white"
        style={{ boxShadow: "0 -8px 24px rgba(0,0,0,0.06)" }}>
        {!isInList ? (
          <button onClick={onToggleList}
            className="w-full py-4 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            style={{ backgroundColor: RED }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="9" y="3" width="6" height="4" rx="1" stroke="white" strokeWidth="2" />
              <path d="M9 12h6M9 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Agregar a lista de compras
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={onToggleList}
              className="flex-1 py-4 rounded-2xl flex items-center justify-center gap-2 border-2 active:scale-[0.98] transition-transform"
              style={{ borderColor: "#5BAF7A" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#5BAF7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="text-sm font-bold" style={{ color: "#5BAF7A" }}>¡Agregado!</span>
            </button>
            <button onClick={onViewShoppingList} className="px-5 py-4 rounded-2xl text-white text-sm font-bold active:scale-95" style={{ backgroundColor: RED }}>Ver lista</button>
          </div>
        )}
        {isInList && (
          <button onClick={onMarkCooked} className="mt-2 w-full py-2.5 flex items-center justify-center gap-2 rounded-xl active:scale-[0.98] transition-transform" style={{ backgroundColor: "#DCFCE7" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" fill="#5BAF7A" />
            </svg>
            <span className="text-xs font-bold" style={{ color: "#5BAF7A" }}>Marcar como cocinada</span>
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Week Detail Screen ───────────────────────────────────────────────────────

function WeekDetailScreen({ week, onBack, onRecipeDetail, onViewShoppingList }: {
  week: Week;
  onBack: () => void;
  onRecipeDetail: (r: Recipe) => void;
  onViewShoppingList: () => void;
}) {
  const uniqueIds = [...new Set(week.days.flatMap((d) => d.recipes.map((r) => r.id)))];
  const [checked, setChecked] = useState<Set<number>>(new Set(uniqueIds));
  const toggle = (id: number) => setChecked((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div className="absolute inset-0 z-40 flex flex-col bg-[#FAF6F0]" style={{ borderRadius: "inherit" }}>
      <IPhoneStatusBar dark time="18:16" />
      <div className="shrink-0 flex items-center gap-3 px-4 py-3">
        <BackButton onBack={onBack} dark />
        <h1 className="text-sm font-semibold text-gray-800 flex-1">{week.label}</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-24" style={{ scrollbarWidth: "none" }}>
        {week.days.map((dayMenu) => (
          <div key={dayMenu.day} className="mb-4">
            <div className="rounded-lg py-2 px-4 mb-3" style={{ backgroundColor: "#7DBFD4" }}>
              <p className="text-white text-xs font-bold text-center tracking-wide">{dayMenu.day}</p>
            </div>
            <div className="space-y-2">
              {dayMenu.recipes.map((recipe) => (
                <div key={`${dayMenu.day}-${recipe.id}`} className="flex items-center gap-3 bg-white rounded-xl px-3 py-2 shadow-sm">
                  <button onClick={() => toggle(recipe.id)}
                    className="w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
                    style={{ borderColor: checked.has(recipe.id) ? "#7DBFD4" : "#D1D5DB", backgroundColor: checked.has(recipe.id) ? "#7DBFD4" : "white" }}>
                    {checked.has(recipe.id) && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </button>
                  <button onClick={() => onRecipeDetail(recipe)} className="flex items-center gap-3 flex-1 text-left min-w-0 active:opacity-70 transition-opacity">
                    <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0">
                      <ImageWithFallback src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <DietBadge diet={recipe.diet} small />
                      <span className="text-sm font-medium text-gray-800 block truncate mt-0.5">{recipe.name}</span>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 mr-1">
                      <path d="M9 18l6-6-6-6" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-20 right-5">
        <button onClick={onViewShoppingList}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform relative"
          style={{ backgroundColor: RED }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="9" y="3" width="6" height="4" rx="1" stroke="white" strokeWidth="2" />
            <path d="M9 12h6M9 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {checked.size > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-[10px] font-bold flex items-center justify-center shadow" style={{ color: RED }}>{checked.size}</span>
          )}
        </button>
      </div>
      <BottomNav activeTab="menu" onTabChange={() => {}} />
    </div>
  );
}

// ─── Shopping List — logic helpers ────────────────────────────────────────────

const EXCLUDED_UNITS = new Set(["cda", "cdas", "cdita", "ramita", "ramitas"]);

function measurableIdxs(recipe: Recipe): number[] {
  return recipe.ingredients
    .map((ing, i) => ({ ing, i }))
    .filter(({ ing }) => ing.qty > 0 && !EXCLUDED_UNITS.has(ing.unit))
    .map(({ i }) => i);
}

type Consolidated = { name: string; entries: { qty: number; unit: string; from: string }[] };

function buildConsolidated(recipes: Recipe[]): Consolidated[] {
  const map = new Map<string, Consolidated>();
  for (const recipe of recipes) {
    for (const ing of recipe.ingredients) {
      if (ing.qty === 0 || EXCLUDED_UNITS.has(ing.unit)) continue;
      if (!map.has(ing.name)) map.set(ing.name, { name: ing.name, entries: [] });
      map.get(ing.name)!.entries.push({ qty: ing.qty, unit: ing.unit, from: recipe.name });
    }
  }
  return [...map.values()];
}

function consolidatedLabel(c: Consolidated): string {
  const byUnit = new Map<string, number>();
  for (const e of c.entries) byUnit.set(e.unit, (byUnit.get(e.unit) ?? 0) + e.qty);
  return [...byUnit.entries()].map(([unit, qty]) => `${Math.round(qty * 10) / 10} ${unit}`).join(" + ");
}

// Top-level ingredient key (m = main, g = garnish)
const ingKey = (recipeId: number, idx: number, garnish = false) =>
  `${garnish ? "g" : "m"}-${recipeId}-${idx}`;

// Category detection for shopping list grouping
const CATEGORY_PATTERNS: [RegExp, string][] = [
  [/pollo|pechuga|carne|lomo|cerdo|cordero|ternera|bife|costilla|chorizo|morcilla/i, "Carnicería"],
  [/papa|zapallo|choclo|berenjena|acelga|espinaca|lechuga|zanahoria|apio|pimiento|hongo|champiñon|tomate|cebolla|diente.*ajo/i, "Verdulería"],
  [/limón|limon|naranja|pomelo|manzana|pera|durazno|frutilla|fruta/i, "Verdulería"],
  [/aceite|vinagre|mostaza|salsa|harina|azúcar|azucar|arroz|fideos|lenteja|garbanzo|caldo|concentrado|pasta\b|extracto|puré|pure/i, "Almacén"],
  [/leche|queso|crema|manteca|mantequilla|yogur|ricota/i, "Lácteos"],
  [/huevo/i, "Huevos"],
  [/pan\b|baguette/i, "Panadería"],
  [/vino|cerveza/i, "Bebidas"],
];

function getIngredientCategory(name: string): string {
  for (const [pattern, cat] of CATEGORY_PATTERNS) {
    if (pattern.test(name)) return cat;
  }
  return "Almacén";
}

interface FlatIngredient {
  name: string; qty: number; unit: string;
  key: string; isGarnish: boolean; recipeId: number; recipeName: string;
}

function flattenRecipeIngredients(recipe: Recipe): FlatIngredient[] {
  const result: FlatIngredient[] = [];
  recipe.ingredients.forEach((ing, i) => {
    if (ing.qty > 0 && !EXCLUDED_UNITS.has(ing.unit))
      result.push({ name: ing.name, qty: ing.qty, unit: ing.unit, key: ingKey(recipe.id, i), isGarnish: false, recipeId: recipe.id, recipeName: recipe.name });
  });
  if (recipe.garnish) {
    recipe.garnish.ingredients.forEach((ing, i) => {
      if (ing.qty > 0 && !EXCLUDED_UNITS.has(ing.unit))
        result.push({ name: ing.name, qty: ing.qty, unit: ing.unit, key: ingKey(recipe.id, i, true), isGarnish: true, recipeId: recipe.id, recipeName: recipe.garnish!.name });
    });
  }
  return result;
}

function recipeIngStatus(recipe: Recipe, done: Set<string>, removed: Set<string>): "green" | "orange" | "yellow" | "red" {
  const active = flattenRecipeIngredients(recipe).filter(fi => !removed.has(fi.key));
  if (active.length === 0) return "green";
  const doneCount = active.filter(fi => done.has(fi.key)).length;
  const pct = doneCount / active.length;
  if (pct === 1) return "green";
  if (pct >= 0.75) return "orange";
  if (pct > 0) return "yellow";
  return "red";
}

const STATUS_COLOR: Record<string, string> = {
  green: "#5BAF7A", orange: "#E8793A", yellow: "#F59E0B", red: "#C8171A",
};

// ─── Mis Recetas Screen ───────────────────────────────────────────────────────

function MisRecetasScreen({ selectedRecipes, doneIngredients, removedIngredients, onClose, onRecipeDetail, onMarkCooked }: {
  selectedRecipes: Recipe[];
  doneIngredients: Set<string>;
  removedIngredients: Set<string>;
  onClose: () => void;
  onRecipeDetail: (r: Recipe) => void;
  onMarkCooked: (id: number) => void;
}) {
  return (
    <div className="absolute inset-0 z-40 flex flex-col bg-[#FAF6F0]" style={{ borderRadius: "inherit" }}>
      <IPhoneStatusBar dark time="9:41" />
      <div className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white">
        <BackButton onBack={onClose} dark />
        <h1 className="text-sm font-bold text-gray-900 flex-1">Mis Recetas</h1>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: RED }}>
          {selectedRecipes.length}
        </span>
      </div>

      {/* Legend row */}
      <div className="flex items-center gap-4 px-4 py-2 bg-white border-b border-gray-50">
        {(["green","orange","yellow","red"] as const).map((s, i) => (
          <div key={s} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: STATUS_COLOR[s] }} />
            <span className="text-[10px] text-gray-400">{["Listo","Casi","Pocos","Falta"][i]}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4" style={{ scrollbarWidth: "none" }}>
        {selectedRecipes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-sm text-gray-500">No tenés recetas en tu lista.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {selectedRecipes.map(recipe => {
              const status = recipeIngStatus(recipe, doneIngredients, removedIngredients);
              const active = flattenRecipeIngredients(recipe).filter(fi => !removedIngredients.has(fi.key));
              const doneCount = active.filter(fi => doneIngredients.has(fi.key)).length;
              return (
                <div key={recipe.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <button onClick={() => onRecipeDetail(recipe)} className="w-full flex items-center gap-3 px-4 py-3 active:bg-gray-50 transition-colors text-left">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <ImageWithFallback src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <DietBadge diet={recipe.diet} small />
                      <p className="text-sm font-bold text-gray-800 truncate mt-0.5">{recipe.name}</p>
                    </div>
                    {/* Status bar indicator */}
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: STATUS_COLOR[status] }} />
                      <span className="text-[10px] text-gray-400">{doneCount}/{active.length}</span>
                    </div>
                    {/* Mark cooked button */}
                    <button
                      onClick={e => { e.stopPropagation(); onMarkCooked(recipe.id); }}
                      className="w-9 h-9 flex items-center justify-center rounded-full ml-1 active:scale-90 transition-transform shrink-0"
                      style={{ backgroundColor: status === "green" ? "#DCFCE7" : "#F3F4F6" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z"
                          fill={status === "green" ? "#5BAF7A" : "#9CA3AF"} />
                      </svg>
                    </button>
                  </button>
                  {/* Progress bar */}
                  <div className="h-1 bg-gray-100 mx-4 mb-3 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${active.length > 0 ? (doneCount / active.length) * 100 : 0}%`, backgroundColor: STATUS_COLOR[status] }} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Shopping List Tab — sub-components ──────────────────────────────────────

function CategoryView({ selectedRecipes, doneIngredients, removedIngredients, onToggleDone, onToggleAllDone }: {
  selectedRecipes: Recipe[];
  doneIngredients: Set<string>;
  removedIngredients: Set<string>;
  onToggleDone: (key: string) => void;
  onToggleAllDone: (keys: string[], done: boolean) => void;
}) {
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState<string | null>(null);

  const allActive = selectedRecipes.flatMap(r => flattenRecipeIngredients(r).filter(fi => !removedIngredients.has(fi.key)));

  // Consolidate by ingredient name
  const consolidated = new Map<string, { qty: number; unit: string; keys: string[] }>();
  for (const fi of allActive) {
    if (!consolidated.has(fi.name)) consolidated.set(fi.name, { qty: 0, unit: fi.unit, keys: [] });
    const c = consolidated.get(fi.name)!;
    c.qty += fi.qty;
    c.keys.push(fi.key);
  }

  // Group by category
  const byCategory = new Map<string, Array<{ name: string; qty: number; unit: string; keys: string[] }>>();
  for (const [name, data] of consolidated) {
    const cat = getIngredientCategory(name);
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat)!.push({ name, ...data });
  }

  const copyText = (text: string, key: string) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const fmtQtyLabel = (qty: number, unit: string) => `${Math.round(qty * 10) / 10} ${unit}`;

  // Copy all
  const handleCopyAll = () => {
    const lines: string[] = [];
    for (const [cat, items] of byCategory) {
      lines.push(`${cat}:`);
      items.forEach(item => lines.push(`  • ${item.name}: ${fmtQtyLabel(item.qty, item.unit)}`));
    }
    copyText(lines.join("\n"), "__all__");
  };

  const toggleCat = (cat: string) =>
    setExpandedCats(prev => { const n = new Set(prev); n.has(cat) ? n.delete(cat) : n.add(cat); return n; });

  return (
    <div>
      {/* Copy all */}
      <div className="flex justify-end mb-3">
        <button onClick={handleCopyAll}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
          style={{ color: copied === "__all__" ? "#5BAF7A" : RED, backgroundColor: copied === "__all__" ? "#DCFCE7" : RED_LIGHT }}>
          {copied === "__all__" ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#5BAF7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke={RED} strokeWidth="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke={RED} strokeWidth="2" strokeLinecap="round" /></svg>
          )}
          {copied === "__all__" ? "Copiado" : "Copiar todo"}
        </button>
      </div>

      <div className="space-y-3">
        {[...byCategory].map(([cat, items]) => {
          const expanded = expandedCats.has(cat);
          const allKeys = items.flatMap(item => item.keys);
          const allDone = allKeys.length > 0 && allKeys.every(k => doneIngredients.has(k));
          const someDone = !allDone && allKeys.some(k => doneIngredients.has(k));

          return (
            <div key={cat} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Category header */}
              <div className="flex items-center gap-2 px-3 py-3" style={{ borderBottom: expanded ? "1px solid #F3F4F6" : "none" }}>
                {/* Check-all toggle */}
                <button onClick={() => onToggleAllDone(allKeys, !allDone)}
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                  style={{ borderColor: allDone ? "#5BAF7A" : someDone ? "#F59E0B" : "#D1D5DB", backgroundColor: allDone ? "#5BAF7A" : "white" }}>
                  {allDone && <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  {someDone && !allDone && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F59E0B" }} />}
                </button>

                {/* Category name + count - tap to expand */}
                <button onClick={() => toggleCat(cat)} className="flex-1 text-left">
                  <p className="text-sm font-bold text-gray-800">{cat}</p>
                  <p className="text-[10px] text-gray-400">{items.length} {items.length === 1 ? "producto" : "productos"}</p>
                </button>

                {/* Copy category */}
                <button onClick={() => {
                  const text = `${cat}:\n` + items.map(item => `• ${item.name}: ${fmtQtyLabel(item.qty, item.unit)}`).join("\n");
                  copyText(text, cat);
                }} className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                  style={{ backgroundColor: copied === cat ? "#DCFCE7" : "#F3F4F6" }}>
                  {copied === cat
                    ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#5BAF7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    : <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="#9CA3AF" strokeWidth="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" /></svg>
                  }
                </button>

                {/* Expand chevron */}
                <button onClick={() => toggleCat(cat)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform"
                    style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <path d="M6 9l6 6 6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Ingredient rows */}
              {expanded && (
                <div className="divide-y divide-gray-50">
                  {items.map(item => {
                    const allItemDone = item.keys.every(k => doneIngredients.has(k));
                    return (
                      <button key={item.name}
                        onClick={() => onToggleAllDone(item.keys, !allItemDone)}
                        className="w-full flex items-center gap-3 px-4 py-3 active:bg-gray-50 transition-colors text-left">
                        <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                          style={{ borderColor: allItemDone ? "#5BAF7A" : "#D1D5DB", backgroundColor: allItemDone ? "#5BAF7A" : "white" }}>
                          {allItemDone && <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        </div>
                        <span className="flex-1 text-sm transition-colors"
                          style={{ color: allItemDone ? "#9CA3AF" : "#1F2937", textDecoration: allItemDone ? "line-through" : "none" }}>
                          {item.name}
                        </span>
                        <span className="text-xs font-semibold shrink-0"
                          style={{ color: allItemDone ? "#D1D5DB" : "#6B7280" }}>
                          {fmtQtyLabel(item.qty, item.unit)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecipeView({ selectedRecipes, doneIngredients, removedIngredients, onToggleDone, onToggleAllDone, onRemoveIngredient, onRemoveRecipe, onRecipeDetail }: {
  selectedRecipes: Recipe[];
  doneIngredients: Set<string>;
  removedIngredients: Set<string>;
  onToggleDone: (key: string) => void;
  onToggleAllDone: (keys: string[], done: boolean) => void;
  onRemoveIngredient: (key: string) => void;
  onRemoveRecipe: (id: number) => void;
  onRecipeDetail: (r: Recipe) => void;
}) {
  const [expandedRecipes, setExpandedRecipes] = useState<Set<number>>(new Set(selectedRecipes.map(r => r.id)));
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState<number | null>(null);

  const toggleExpand = (id: number) =>
    setExpandedRecipes(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const toggleSelectDelete = (id: number) =>
    setSelectedForDelete(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const copyRecipe = (recipe: Recipe) => {
    const ings = flattenRecipeIngredients(recipe).filter(fi => !removedIngredients.has(fi.key));
    const text = `${recipe.name}:\n` + ings.map(fi => `• ${fi.name}: ${fi.qty} ${fi.unit}`).join("\n");
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(recipe.id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleBulkDelete = () => {
    selectedForDelete.forEach(id => onRemoveRecipe(id));
    setDeleteMode(false);
    setSelectedForDelete(new Set());
  };

  const visibleRecipes = selectedRecipes.filter(r => flattenRecipeIngredients(r).filter(fi => !removedIngredients.has(fi.key)).length > 0);

  return (
    <div>
      {/* Actions bar */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {visibleRecipes.length} {visibleRecipes.length === 1 ? "receta" : "recetas"}
        </span>
        {deleteMode ? (
          <div className="flex gap-2">
            <button onClick={handleBulkDelete} disabled={selectedForDelete.size === 0}
              className="text-xs font-bold px-3 py-1.5 rounded-full transition-opacity"
              style={{ backgroundColor: selectedForDelete.size > 0 ? "#FEF2F2" : "#F3F4F6", color: selectedForDelete.size > 0 ? "#EF4444" : "#9CA3AF" }}>
              Eliminar {selectedForDelete.size > 0 ? `(${selectedForDelete.size})` : ""}
            </button>
            <button onClick={() => { setDeleteMode(false); setSelectedForDelete(new Set()); }}
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
              Cancelar
            </button>
          </div>
        ) : (
          <button onClick={() => setDeleteMode(true)}
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ color: RED, backgroundColor: RED_LIGHT }}>
            Seleccionar
          </button>
        )}
      </div>

      <div className="space-y-3">
        {visibleRecipes.map(recipe => {
          const activeIngs = flattenRecipeIngredients(recipe).filter(fi => !removedIngredients.has(fi.key));
          const allKeys = activeIngs.map(fi => fi.key);
          const doneCount = activeIngs.filter(fi => doneIngredients.has(fi.key)).length;
          const allDone = activeIngs.length > 0 && doneCount === activeIngs.length;
          const expanded = expandedRecipes.has(recipe.id);
          const isSelected = selectedForDelete.has(recipe.id);

          const mainIngs = activeIngs.filter(fi => !fi.isGarnish);
          const garnishIngs = activeIngs.filter(fi => fi.isGarnish);

          return (
            <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Recipe header */}
              <div className="flex items-center gap-2 px-3 py-3" style={{ borderBottom: expanded ? "1px solid #F3F4F6" : "none" }}>
                {/* Selection checkbox */}
                {deleteMode && (
                  <button onClick={() => toggleSelectDelete(recipe.id)}
                    className="w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors"
                    style={{ borderColor: isSelected ? RED : "#D1D5DB", backgroundColor: isSelected ? RED : "white" }}>
                    {isSelected && <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </button>
                )}

                {/* Thumbnail */}
                <button onClick={() => onRecipeDetail(recipe)} className="w-10 h-10 rounded-xl overflow-hidden shrink-0 active:scale-95 transition-transform">
                  <ImageWithFallback src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                </button>

                {/* Name */}
                <button onClick={() => onRecipeDetail(recipe)} className="flex-1 min-w-0 text-left active:opacity-70">
                  <p className="text-sm font-bold text-gray-800 truncate">{recipe.name}</p>
                  <p className="text-[10px] text-gray-400">{doneCount}/{activeIngs.length}</p>
                </button>

                {/* Action icons */}
                <div className="flex items-center gap-1 shrink-0">
                  {/* Check all */}
                  <button onClick={() => onToggleAllDone(allKeys, !allDone)}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                    style={{ backgroundColor: allDone ? "#DCFCE7" : "#F3F4F6" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke={allDone ? "#5BAF7A" : "#9CA3AF"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* Copy */}
                  <button onClick={() => copyRecipe(recipe)}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                    style={{ backgroundColor: copied === recipe.id ? "#DCFCE7" : "#F3F4F6" }}>
                    {copied === recipe.id
                      ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#5BAF7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      : <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="#9CA3AF" strokeWidth="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" /></svg>
                    }
                  </button>
                  {/* Delete (not in delete-mode) */}
                  {!deleteMode && (
                    <button onClick={() => onRemoveRecipe(recipe.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: "#FEF2F2" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <polyline points="3 6 5 6 21 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 6l-1 14H6L5 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 11v6M14 11v6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 6V4h6v2" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  )}
                  {/* Expand */}
                  <button onClick={() => toggleExpand(recipe.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform"
                      style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <path d="M6 9l6 6 6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Ingredient rows */}
              {expanded && (
                <div className="divide-y divide-gray-50">
                  {mainIngs.map(fi => {
                    const isDone = doneIngredients.has(fi.key);
                    return (
                      <div key={fi.key} className="flex items-center gap-3 px-4 py-2.5">
                        <button onClick={() => onToggleDone(fi.key)}
                          className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                          style={{ borderColor: isDone ? "#5BAF7A" : "#D1D5DB", backgroundColor: isDone ? "#5BAF7A" : "white" }}>
                          {isDone && <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        </button>
                        <span className="flex-1 text-sm transition-colors"
                          style={{ color: isDone ? "#9CA3AF" : "#1F2937", textDecoration: isDone ? "line-through" : "none" }}>
                          {fi.name}
                        </span>
                        <span className="text-xs font-semibold mr-1" style={{ color: isDone ? "#D1D5DB" : "#6B7280" }}>
                          {fi.qty} {fi.unit}
                        </span>
                        <button onClick={() => onRemoveIngredient(fi.key)}
                          className="w-6 h-6 flex items-center justify-center rounded-full shrink-0"
                          style={{ backgroundColor: "#FEF2F2" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                  {garnishIngs.length > 0 && (
                    <>
                      <div className="px-4 py-1.5 border-t border-gray-50" style={{ backgroundColor: "#FFF7F0" }}>
                        <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: ORANGE_TODAY }}>
                          Guarnición — {recipe.garnish?.name}
                        </p>
                      </div>
                      {garnishIngs.map(fi => {
                        const isDone = doneIngredients.has(fi.key);
                        return (
                          <div key={fi.key} className="flex items-center gap-3 px-4 py-2.5">
                            <button onClick={() => onToggleDone(fi.key)}
                              className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors"
                              style={{ borderColor: isDone ? ORANGE_TODAY : "#D1D5DB", backgroundColor: isDone ? ORANGE_TODAY : "white" }}>
                              {isDone && <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                            </button>
                            <span className="flex-1 text-sm transition-colors"
                              style={{ color: isDone ? "#9CA3AF" : "#1F2937", textDecoration: isDone ? "line-through" : "none" }}>
                              {fi.name}
                            </span>
                            <span className="text-xs font-semibold mr-1" style={{ color: isDone ? "#D1D5DB" : "#6B7280" }}>
                              {fi.qty} {fi.unit}
                            </span>
                            <button onClick={() => onRemoveIngredient(fi.key)}
                              className="w-6 h-6 flex items-center justify-center rounded-full shrink-0"
                              style={{ backgroundColor: "#FEF2F2" }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Shopping List Tab ────────────────────────────────────────────────────────

function ShoppingListTab({
  selectedRecipes, doneIngredients, removedIngredients,
  onToggleDone, onToggleAllDone, onRemoveIngredient, onRemoveRecipe,
  onGoToMenu, onRecipeDetail,
}: {
  selectedRecipes: Recipe[];
  doneIngredients: Set<string>;
  removedIngredients: Set<string>;
  onToggleDone: (key: string) => void;
  onToggleAllDone: (keys: string[], done: boolean) => void;
  onRemoveIngredient: (key: string) => void;
  onRemoveRecipe: (id: number) => void;
  onGoToMenu: () => void;
  onRecipeDetail: (r: Recipe) => void;
}) {
  const [listTab, setListTab] = useState<"categoria" | "receta">("categoria");

  if (selectedRecipes.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#FAF6F0] px-8 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: RED_LIGHT }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="9" y="3" width="6" height="4" rx="1" stroke={RED} strokeWidth="2" />
            <path d="M9 12h6M9 16h4" stroke={RED} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="font-bold text-gray-800 mb-1">Tu lista está vacía</p>
        <p className="text-xs text-gray-400 mb-5">Abrí una receta y tocá "Agregar a lista de compras" para empezar.</p>
        <button onClick={onGoToMenu}
          className="px-6 py-3 rounded-2xl text-white text-sm font-bold active:scale-95 transition-transform"
          style={{ backgroundColor: RED }}>
          Ir al menú
        </button>
      </div>
    );
  }

  // Global progress
  const allActive = selectedRecipes.flatMap(r => flattenRecipeIngredients(r).filter(fi => !removedIngredients.has(fi.key)));
  const totalItems = allActive.length;
  const doneCount = allActive.filter(fi => doneIngredients.has(fi.key)).length;

  return (
    <div className="flex-1 flex flex-col bg-[#FAF6F0]" style={{ minHeight: 0 }}>
      {/* Sub-tab bar */}
      <div className="shrink-0 flex mx-4 mt-3 mb-1 bg-gray-100 rounded-2xl p-1">
        {(["categoria", "receta"] as const).map(t => (
          <button key={t} onClick={() => setListTab(t)}
            className="flex-1 py-2 rounded-xl text-xs font-bold transition-all"
            style={{ backgroundColor: listTab === t ? "white" : "transparent", color: listTab === t ? RED : "#6B7280",
              boxShadow: listTab === t ? "0 1px 4px rgba(0,0,0,0.10)" : "none" }}>
            {t === "categoria" ? "Por categoría" : "Por receta"}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="shrink-0 px-4 py-2">
        <div className="flex justify-between text-[10px] text-gray-400 mb-1">
          <span>{doneCount} de {totalItems} ingredientes</span>
          <span>{totalItems > 0 ? Math.round((doneCount / totalItems) * 100) : 0}%</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-300" style={{ width: `${totalItems > 0 ? (doneCount / totalItems) * 100 : 0}%`, backgroundColor: RED }} />
        </div>
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 pt-1" style={{ scrollbarWidth: "none" }}>
        {listTab === "categoria"
          ? <CategoryView selectedRecipes={selectedRecipes} doneIngredients={doneIngredients} removedIngredients={removedIngredients} onToggleDone={onToggleDone} onToggleAllDone={onToggleAllDone} />
          : <RecipeView selectedRecipes={selectedRecipes} doneIngredients={doneIngredients} removedIngredients={removedIngredients} onToggleDone={onToggleDone} onToggleAllDone={onToggleAllDone} onRemoveIngredient={onRemoveIngredient} onRemoveRecipe={onRemoveRecipe} onRecipeDetail={onRecipeDetail} />
        }
      </div>
    </div>
  );
}

// ─── Ebooks Screen — library style (Apple Books / Google Play Books) ──────────

const FREE_EBOOKS = EBOOKS.filter((e) => e.price === "Gratis");

function BookCover({ ebook, onOpen }: { ebook: typeof FREE_EBOOKS[0]; onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const COVER_W = 96;
  const COVER_H = 138; // portrait book ratio ~0.7

  const handleTap = () => {
    setOpening(true);
    setTimeout(() => setOpening(false), 1400);
    onOpen();
  };

  return (
    <button onClick={handleTap} className="shrink-0 text-left active:scale-95 transition-transform" style={{ width: COVER_W }}>
      {/* Book cover with spine effect */}
      <div style={{
        width: COVER_W, height: COVER_H,
        borderRadius: "2px 6px 6px 2px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "4px 5px 16px rgba(0,0,0,0.28), 2px 2px 4px rgba(0,0,0,0.12)",
      }}>
        <ImageWithFallback src={ebook.image} alt={ebook.title} className="w-full h-full object-cover" />

        {/* Spine gradient — left edge dark like a real book */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.10) 20%, transparent 40%)",
        }} />

        {/* Sheen on right edge */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to left, rgba(255,255,255,0.08) 0%, transparent 25%)",
        }} />

        {/* Tag badge */}
        {ebook.tag && (
          <span style={{
            position: "absolute", top: 6, right: 6,
            fontSize: 8, fontWeight: 800, letterSpacing: "0.03em",
            backgroundColor: RED, color: "white",
            padding: "2px 6px", borderRadius: 4,
          }}>{ebook.tag}</span>
        )}

        {/* Opening overlay */}
        {opening && (
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      {/* Title + badge below cover */}
      <div style={{ marginTop: 8, width: COVER_W }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#1F2937", lineHeight: 1.3,
          overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>
          {ebook.title}
        </p>
        <p style={{ fontSize: 10, fontWeight: 700, color: "#5BAF7A", marginTop: 3 }}>Gratis</p>
      </div>
    </button>
  );
}

function EbooksScreen() {
  const categories = [...new Set(FREE_EBOOKS.map((e) => e.category))];

  return (
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: "#F5F3EF", scrollbarWidth: "none" }}>
      {/* Library header */}
      <div className="px-4 pt-4 pb-1 flex items-baseline justify-between">
        <div>
          <h2 className="font-bold text-gray-900" style={{ fontSize: 18 }}>Mi Biblioteca</h2>
          <p className="text-xs text-gray-400 mt-0.5">{FREE_EBOOKS.length} libros disponibles · acceso gratuito</p>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h7" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Shelves by category */}
      <div className="pb-8 mt-4">
        {categories.map((category) => {
          const books = FREE_EBOOKS.filter((e) => e.category === category);
          return (
            <div key={category} className="mb-8">
              {/* Shelf label */}
              <div className="px-4 mb-3 flex items-center justify-between">
                <p className="text-sm font-bold text-gray-700">{category}</p>
                <span className="text-xs font-semibold" style={{ color: RED }}>{books.length} libros</span>
              </div>

              {/* Horizontal scroll of books */}
              <div className="flex gap-5 px-4 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {books.map((ebook) => (
                  <BookCover key={ebook.id} ebook={ebook} onOpen={() => {}} />
                ))}
                {/* Phantom shelf fill — visual right edge */}
                <div style={{ width: 1, flexShrink: 0 }} />
              </div>

              {/* Shelf plank */}
              <div className="mx-4 mt-4 h-px" style={{ backgroundColor: "#E2DDD6" }} />
              <div className="mx-4 h-1.5 rounded-b-sm" style={{ backgroundColor: "#D9D4CB" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Profile Screen ───────────────────────────────────────────────────────────

type ToggleKey = "recordatorios" | "novedades";

type RedirectModal = { visible: boolean; label: string };

function ProfileScreen({ onClose }: { onClose: () => void }) {
  const [toggles, setToggles]           = useState<Record<ToggleKey, boolean>>({ recordatorios: true, novedades: false });
  const [redirectModal, setRedirectModal] = useState<RedirectModal>({ visible: false, label: "" });

  const flipToggle = (k: ToggleKey) => setToggles((p) => ({ ...p, [k]: !p[k] }));
  const openRedirect = (label: string) => setRedirectModal({ visible: true, label });
  const closeRedirect = () => setRedirectModal({ visible: false, label: "" });

  function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
      <div className="mb-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1 mb-1.5">{title}</p>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-50">{children}</div>
      </div>
    );
  }

  function Row({ icon, label, value, onPress, danger }: {
    icon: React.ReactNode; label: string; value?: string; onPress?: () => void; danger?: boolean;
  }) {
    return (
      <button onClick={onPress} className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-gray-50 transition-colors text-left">
        <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: danger ? RED_LIGHT : "#F3F4F6" }}>{icon}</span>
        <span className="flex-1 text-sm font-medium" style={{ color: danger ? RED : "#1F2937" }}>{label}</span>
        {value && <span className="text-xs text-gray-400 mr-1">{value}</span>}
        {!danger && <ChevronRight />}
      </button>
    );
  }

  function ToggleRow({ icon, label, tkey }: { icon: React.ReactNode; label: string; tkey: ToggleKey }) {
    return (
      <div className="w-full flex items-center gap-3 px-4 py-3.5">
        <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-gray-100">{icon}</span>
        <span className="flex-1 text-sm font-medium text-gray-800">{label}</span>
        <button onClick={() => flipToggle(tkey)}
          className="relative w-11 h-6 rounded-full transition-colors shrink-0"
          style={{ backgroundColor: toggles[tkey] ? RED : "#D1D5DB" }}>
          <span className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all"
            style={{ left: toggles[tkey] ? "calc(100% - 22px)" : "2px" }} />
        </button>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-[#F3F4F6]" style={{ borderRadius: "inherit" }}>
      <IPhoneStatusBar dark time="9:41" />
      <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-[#F3F4F6]">
        <BackButton onBack={onClose} dark />
        <h1 className="text-sm font-bold text-gray-900">Mi perfil</h1>
        <div className="w-9" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6 pt-2" style={{ scrollbarWidth: "none" }}>
        {/* Avatar card — informational only, no tap */}
        <div className="bg-white rounded-2xl p-5 mb-4 flex items-center gap-4 shadow-sm">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
            style={{ backgroundColor: RED }}>MA</div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900">María Almacén</p>
            <p className="text-sm text-gray-400">maria@ejemplo.com</p>
          </div>
        </div>

        <Section title="Cuenta">
          <Row
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke={RED} strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke={RED} strokeWidth="2" /></svg>}
            label="Mi Perfil" value="Activa"
            onPress={() => openRedirect("Mi Perfil")}
          />
          <Row
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke={RED} strokeWidth="2" /><path d="M7 11V7a5 5 0 0110 0v4" stroke={RED} strokeWidth="2" strokeLinecap="round" /></svg>}
            label="Cambiar contraseña"
            onPress={() => openRedirect("Contraseña")}
          />
        </Section>

        <Section title="Menú semanal">
          <Row
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#6B7FD4" strokeWidth="2" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="#6B7FD4" strokeWidth="2" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#6B7FD4" strokeWidth="2" strokeLinecap="round" /></svg>}
            label="Comensales por defecto" value="4 personas" onPress={() => {}}
          />
          <ToggleRow
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#6B7FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            label="Recordatorios de menú" tkey="recordatorios"
          />
        </Section>

        <Section title="Notificaciones">
          <ToggleRow
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#9B6ABF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 6l-10 7L2 6" stroke="#9B6ABF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            label="Novedades de la app" tkey="novedades"
          />
        </Section>

        <Section title="Soporte">
          <Row icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#5BAF7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>} label="Contactar soporte" onPress={() => {}} />
          <Row icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><polygon points="23 7 16 12 23 17 23 7" stroke="#5BAF7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="1" y="5" width="15" height="14" rx="2" stroke="#5BAF7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>} label="Tutoriales en video" onPress={() => {}} />
        </Section>

        <Section title="Legal">
          <Row icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><polyline points="14 2 14 8 20 8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="16" y1="13" x2="8" y2="13" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" /><line x1="16" y1="17" x2="8" y2="17" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" /></svg>} label="Términos y condiciones" onPress={() => {}} />
          <Row icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>} label="Política de privacidad" onPress={() => {}} />
        </Section>

        <div className="mt-2 mb-1 bg-white rounded-2xl overflow-hidden shadow-sm">
          <Row
            icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            label="Cerrar sesión" danger onPress={() => {}}
          />
        </div>
        <button className="w-full py-3 text-center">
          <span className="text-xs font-medium text-gray-400 underline underline-offset-2">Eliminar cuenta</span>
        </button>
      </div>

      {/* ── Redirect modal ── */}
      {redirectModal.visible && (
        <div className="absolute inset-0 z-[60] flex items-end justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.45)", borderRadius: "inherit" }}>
          <div className="bg-white rounded-3xl p-5 w-full shadow-2xl">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: RED_LIGHT }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="15 3 21 3 21 9" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="10" y1="14" x2="21" y2="3" stroke={RED} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-gray-900 text-center mb-1">Redirigir al sitio web</h3>
            <p className="text-sm text-gray-500 text-center mb-5 leading-relaxed">
              Para modificar <span className="font-semibold text-gray-700">{redirectModal.label}</span>, serás redirigido a nuestro sitio web.
            </p>
            <button
              className="w-full py-3.5 rounded-2xl text-white font-bold text-sm mb-2.5 active:scale-[0.98] transition-transform"
              style={{ backgroundColor: RED }}
              onClick={closeRedirect}>
              Ir al sitio web
            </button>
            <button
              className="w-full py-3 rounded-2xl text-sm font-semibold active:bg-gray-50 transition-colors"
              style={{ color: "#6B7280" }}
              onClick={closeRedirect}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Home Screen ──────────────────────────────────────────────────────────────

function HomeScreen({ onOpenWeek, onRecipeDetail, selectedCount, onMisRecetas }: {
  onOpenWeek: (w: Week) => void;
  onRecipeDetail: (r: Recipe) => void;
  selectedCount: number;
  onMisRecetas: () => void;
}) {
  return (
    <div className="flex-1 overflow-y-auto bg-white" style={{ scrollbarWidth: "none" }}>
      <div className="p-4">
        {/* Mis Recetas pill — shown when recipes are in list */}
        {selectedCount > 0 && (
          <button onClick={onMisRecetas}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl mb-4 active:scale-[0.98] transition-transform shadow-sm"
            style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)" }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.10)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="white" strokeWidth="2" />
                <path d="M9 12h6M9 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <p className="text-white text-sm font-bold">Mis Recetas</p>
              <p className="text-white/60 text-xs">{selectedCount} {selectedCount === 1 ? "receta" : "recetas"} en tu lista</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {/* Today card — orange gradient, 2 recipes (Estándar + Vegana) */}
        <div className="rounded-2xl overflow-hidden mb-6"
          style={{ background: "linear-gradient(150deg, #F5A04A 0%, #D45C18 100%)" }}>
          <div className="px-4 pt-3 pb-2">
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.72)" }}>Hoy · Martes 15</p>
            <h2 className="text-white text-xl font-bold mt-0.5">Menú del día</h2>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.68)" }}>Tocá una receta para ver los detalles.</p>
          </div>
          <div className="flex gap-2.5 px-3 pb-3 mt-1">
            {TODAY_RECIPES.map((r) => (
              <button key={r.id} onClick={() => onRecipeDetail(r)}
                className="flex-1 rounded-2xl overflow-hidden bg-white shadow-md active:scale-95 transition-transform text-left">
                <div className="w-full relative" style={{ height: 100 }}>
                  <ImageWithFallback src={r.image} alt={r.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <DietBadge diet={r.diet} small />
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-bold text-gray-800 leading-tight truncate">{r.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="2.2" />
                      <path d="M12 6v6l4 2" stroke="#9CA3AF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[9px] text-gray-400">{r.time}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Weekly sections */}
        {WEEKS.map((week) => (
          <div key={week.id} className="mb-6">
            <p className="text-xs font-semibold mb-1" style={{ color: RED }}>{week.label}</p>
            <h2 className="text-lg font-bold text-gray-900 mb-3">{week.title}</h2>
            <button onClick={() => onOpenWeek(week)}
              className="w-full rounded-2xl overflow-hidden relative active:scale-[0.98] transition-transform shadow-md">
              <div className="h-48 relative">
                <ImageWithFallback src={week.coverImage} alt={week.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-3 left-4 text-white text-xs font-medium">Tocá para abrir la lista</p>
              </div>
            </button>
          </div>
        ))}

        {/* Especial del mes */}
        <div className="mb-6">
          <p className="text-xs font-semibold mb-1" style={{ color: RED }}>Julio 2026</p>
          <h2 className="text-lg font-bold text-gray-900 mb-3">Especial del mes</h2>
          <button onClick={() => onRecipeDetail(MONTHLY_SPECIAL)}
            className="w-full rounded-2xl overflow-hidden relative active:scale-[0.98] transition-transform shadow-md">
            <div className="h-48 relative">
              <ImageWithFallback src={MONTHLY_SPECIAL.image} alt={MONTHLY_SPECIAL.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-3 right-3 text-[9px] font-bold px-2.5 py-1 rounded-full text-white uppercase tracking-wide"
                style={{ backgroundColor: RED }}>Especial</span>
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-white font-bold text-sm leading-tight mb-0.5">{MONTHLY_SPECIAL.name}</p>
                <p className="text-white/75 text-xs">Tocá para ver la receta</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

const ALL_KNOWN_RECIPES: Record<number, Recipe> = { ...ALL_RECIPES, [MONTHLY_SPECIAL.id]: MONTHLY_SPECIAL };

export default function App() {
  const [authScreen, setAuthScreen]         = useState<AuthScreen | null>("login");
  const [view, setView]                     = useState<View>({ type: "home" });
  const [activeTab, setActiveTab]           = useState("menu");
  const [showProfile, setShowProfile]       = useState(false);
  const [selectedRecipeIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [doneIngredients, setDoneIngredients]       = useState<Set<string>>(new Set());
  const [removedIngredients, setRemovedIngredients] = useState<Set<string>>(new Set());
  const [cookedRecipeIds, setCookedIds]             = useState<Set<number>>(new Set());
  const [showMisRecetas, setShowMisRecetas]         = useState(false);

  const toggleRecipeInList = (id: number) =>
    setSelectedIds((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const selectedRecipes = [...selectedRecipeIds]
    .map((id) => ALL_KNOWN_RECIPES[id])
    .filter(Boolean) as Recipe[];

  const toggleDone = (key: string) =>
    setDoneIngredients(prev => { const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n; });

  const toggleAllDone = (keys: string[], done: boolean) =>
    setDoneIngredients(prev => { const n = new Set(prev); keys.forEach(k => done ? n.add(k) : n.delete(k)); return n; });

  const removeIngredient = (key: string) => {
    setRemovedIngredients(prev => { const n = new Set(prev); n.add(key); return n; });
    setDoneIngredients(prev => { const n = new Set(prev); n.delete(key); return n; });
  };

  const clearRecipeIngredients = (id: number) => {
    const shouldRemove = (k: string) => k.startsWith(`m-${id}-`) || k.startsWith(`g-${id}-`);
    setDoneIngredients(prev => new Set([...prev].filter(k => !shouldRemove(k))));
    setRemovedIngredients(prev => new Set([...prev].filter(k => !shouldRemove(k))));
  };

  const removeRecipeFromList = (id: number) => {
    toggleRecipeInList(id);
    clearRecipeIngredients(id);
  };

  const markCooked = (id: number) => {
    removeRecipeFromList(id);
    setCookedIds(prev => { const n = new Set(prev); n.add(id); return n; });
    setView({ type: "home" });
  };

  const handleTabChange = (t: string) => { setActiveTab(t); setView({ type: "home" }); };
  const handleLogin     = () => setAuthScreen(null);

  return (
    <div className="size-full flex items-center justify-center bg-gray-200 p-4">
      <div className="relative bg-white shadow-2xl overflow-hidden flex flex-col"
        style={{ width: 375, height: 812, borderRadius: 52, boxShadow: "0 40px 100px rgba(0,0,0,0.30), inset 0 0 0 1.5px rgba(0,0,0,0.10)", maxHeight: "96vh" }}>

        {/* iPhone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 z-50 rounded-b-2xl" style={{ backgroundColor: RED }} />

        {/* Status bar */}
        <IPhoneStatusBar time="9:41" />

        {/* Dynamic header — logo on menu tab, text on other tabs */}
        <div className="shrink-0 flex items-center justify-between px-5 py-3" style={{ backgroundColor: RED }}>
          <div className="w-9" />
          {activeTab === "menu" ? (
            <LogoMark fill="white" height={20} />
          ) : (
            <h1 className="text-white text-sm font-bold tracking-widest uppercase">{TAB_TITLES[activeTab]}</h1>
          )}
          <button onClick={() => setShowProfile(true)}
            className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center active:scale-90 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "menu"   && <HomeScreen onOpenWeek={(w) => setView({ type: "week-detail", week: w })} onRecipeDetail={(r) => setView({ type: "recipe-detail", recipe: r })} selectedCount={selectedRecipeIds.size} onMisRecetas={() => setShowMisRecetas(true)} />}
        {activeTab === "ebooks" && <EbooksScreen />}
        {activeTab === "lista"  && <ShoppingListTab selectedRecipes={selectedRecipes} doneIngredients={doneIngredients} removedIngredients={removedIngredients} onToggleDone={toggleDone} onToggleAllDone={toggleAllDone} onRemoveIngredient={removeIngredient} onRemoveRecipe={removeRecipeFromList} onGoToMenu={() => handleTabChange("menu")} onRecipeDetail={(r) => setView({ type: "recipe-detail", recipe: r })} />}

        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Navigation overlays */}
        {view.type === "week-detail" && (
          <WeekDetailScreen
            week={view.week}
            onBack={() => setView({ type: "home" })}
            onRecipeDetail={(r) => setView({ type: "recipe-detail", recipe: r })}
            onViewShoppingList={() => { setView({ type: "home" }); setActiveTab("lista"); }}
          />
        )}
        {view.type === "recipe-detail" && (
          <RecipeDetailScreen
            recipe={view.recipe}
            onBack={() => setView({ type: "home" })}
            isInList={selectedRecipeIds.has(view.recipe.id)}
            onToggleList={() => toggleRecipeInList(view.recipe.id)}
            onViewShoppingList={() => { setView({ type: "home" }); setActiveTab("lista"); }}
            onMarkCooked={() => markCooked(view.recipe.id)}
          />
        )}
        {showProfile && <ProfileScreen onClose={() => setShowProfile(false)} />}
        {showMisRecetas && (
          <MisRecetasScreen
            selectedRecipes={selectedRecipes}
            doneIngredients={doneIngredients}
            removedIngredients={removedIngredients}
            onClose={() => setShowMisRecetas(false)}
            onRecipeDetail={(r) => { setShowMisRecetas(false); setView({ type: "recipe-detail", recipe: r }); }}
            onMarkCooked={markCooked}
          />
        )}
        {/* Auth overlays — appear on top of everything */}
        {authScreen === "login" && (
          <LoginScreen onLogin={handleLogin} />
        )}
        {authScreen === "create-account" && (
          <CreateAccountScreen
            onBack={() => setAuthScreen("login")}
            onCreated={handleLogin}
          />
        )}
      </div>
    </div>
  );
}
