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

## Despliegue en Vercel

- **Root Directory:** `frontend` (el proyecto está en esta subcarpeta del repositorio).
- **Framework:** Vite. Build `pnpm build`, salida `dist`.
- **URL del sitio:** las vistas previas al compartir el enlace (Open Graph) y los datos estructurados necesitan una URL absoluta. En Vercel se usa automáticamente la URL de producción del proyecto. Si conectas un dominio propio, define la variable de entorno `SITE_URL` (por ejemplo `https://jonathanmorera.dev`) para que se use ese.
- La imagen para compartir está en `public/og-image.jpg` (1200 × 630).
