# JonathanOS — portfolio

Portfolio personal de Jonathan Morera, desarrollador fullstack. Simula un escritorio inspirado en macOS: barra de menús, dock, ventanas que se pueden arrastrar, minimizar y maximizar, Finder con proyectos, galería, CV en PDF y ajustes de tema e idioma.

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, GSAP y Zustand.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Estructura

- `src/constants` — datos: apps del dock, proyectos, carpetas y archivos del Finder.
- `src/i18n` — textos en español (`locales/es.ts`) e inglés (`locales/en.ts`). Ningún componente escribe texto directamente.
- `src/styles` — `tokens.css` define colores, radios y sombras; el tema oscuro solo redefine esas variables.
- `src/windows` — una ventana por archivo, envuelta con `hoc/WindowWrapper`.

El plan de rediseño está en [`docs/redesign-brief.md`](docs/redesign-brief.md).
