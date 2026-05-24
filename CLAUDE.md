# VisualBoost — Claude Code Guide

## Proyecto
Sitio web estático de marketing para una agencia de contenido visual dirigida a PYMEs hispanohablantes. Construido con Astro + React + TypeScript + Tailwind CSS. Sin backend ni base de datos.

## Stack
- **Framework**: Astro 5 (output: static)
- **UI**: React 18 (componentes interactivos con `client:load`)
- **Estilos**: Tailwind CSS 3 + variables CSS globales en `src/styles/global.css`
- **Animaciones**: Framer Motion
- **Testing**: Playwright (E2E)
- **Deploy**: GitHub Pages (base: `/VisualBoost/`)

## Comandos
```bash
npm run dev      # Dev server en localhost:4321
npm run build    # Build estático en dist/
npm run preview  # Preview del build
npx playwright test          # Correr tests E2E (requiere servidor activo o webServer config)
npx playwright test --ui     # Playwright con UI interactiva
```

## Estructura
```
src/
├── components/   # Componentes React (interactivos con client:load)
├── pages/        # Rutas Astro — cada archivo es una página
├── layouts/      # BaseLayout.astro (wrapper global)
├── data/         # services.ts — toda la data del sitio (planes, servicios, portfolio)
└── styles/       # global.css (variables CSS, utilidades)
e2e/              # Tests Playwright
public/           # Assets estáticos (imágenes portfolio en public/portfolio/)
```

## Páginas
| Ruta | Archivo |
|------|---------|
| `/` | `src/pages/index.astro` |
| `/contacto` | `src/pages/contacto.astro` |
| `/portafolio` | `src/pages/portafolio.astro` |
| `/quienes-somos` | `src/pages/quienes-somos.astro` |
| `/privacidad` | `src/pages/privacidad.astro` |
| `/terminos` | `src/pages/terminos.astro` |

## Datos del sitio
Todo el contenido editable vive en [src/data/services.ts](src/data/services.ts):
- `PLANS` — 3 planes de precios (Básico, Estándar, Premium)
- `SERVICES` — 4 servicios ofrecidos
- `PORTFOLIO_ITEMS` — Proyectos del portfolio (imágenes en `public/portfolio/`)
- `PORTFOLIO_CATEGORIES` — Categorías de filtro del portfolio
- `TESTIMONIALS` — Testimonios de clientes
- `FAQ` — Preguntas frecuentes

## Variables de entorno
Copiar `.env.example` a `.env` para configurar:
```bash
cp .env.example .env
```
| Variable | Descripción |
|----------|-------------|
| `PUBLIC_FORMSPREE_ENDPOINT` | URL del endpoint Formspree para el formulario de contacto |

Para producción, configurar como secreto en GitHub Actions (`Settings → Secrets → Actions`).

## Formulario de contacto
El formulario usa [Formspree](https://formspree.io). Para activarlo:
1. Crear cuenta en formspree.io
2. Crear un nuevo formulario
3. Copiar el endpoint (ej: `https://formspree.io/f/xxxxxxxx`)
4. Agregar al `.env` como `PUBLIC_FORMSPREE_ENDPOINT`

Sin esta variable, el formulario muestra un mensaje de configuración pendiente.

## Tests
Los tests E2E cubren:
- Carga de la homepage con secciones principales
- Navegación entre páginas
- Filtros del portfolio
- Validación del formulario de contacto
- Menú mobile

Para correr con el servidor de desarrollo (automático):
```bash
npx playwright test
```

## Notas de desarrollo
- Los componentes React se importan con `client:load` en páginas Astro para hidratación en cliente
- `dist/` está en `.gitignore` — no commitear la carpeta de build
- El deploy a GitHub Pages se hace automáticamente vía GitHub Actions al pushear a `main`
- Las imágenes del portfolio van en `public/portfolio/` y se referencian con ruta desde la raíz (ej: `/portfolio/cm/imagen.jpg`)
