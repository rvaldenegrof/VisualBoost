# VisualBoost

Sitio de marketing con **Vite**, **React**, **TypeScript** y **Tailwind CSS v4**. Contenido en español de Chile (`lang="es-CL"`); montos en **CLP**.

El proyecto está configurado para **GitHub Pages** con `base: '/VisualBoost/'` (subdirectorio del repositorio). En desarrollo abre: `http://localhost:5173/VisualBoost/`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build y vista previa

```bash
npm run build
npm run preview
```

El script `build` copia `index.html` a `404.html` para que las rutas del SPA funcionen al recargar o al abrir enlaces directos en GitHub Pages.

## Variables de entorno

Copia `.env.example` a `.env`:

| Variable | Uso |
|----------|-----|
| `VITE_SITE_URL` | URL canónica sin barra final (ej. `https://usuario.github.io/VisualBoost`) |
| `VITE_FORMSPREE_ID` | ID del formulario en [Formspree](https://formspree.io) |
| `VITE_WHATSAPP_NUMBER` | Código país + número (Chile: `56…`) |
| `VITE_SCHEDULE_URL` | Calendly u otro agendador |

Chat de terceros (Crisp, Tawk): añade el script al final de `index.html` o monta un componente cuando lo necesites.

## Contenido editable

- FAQ: `src/content/faq.ts`
- Portafolio: `src/content/portfolio.ts`

## Despliegue

El workflow `.github/workflows/deploy.yml` ejecuta `npm ci` y `npm run build`, y publica la carpeta `dist/` en GitHub Pages.
