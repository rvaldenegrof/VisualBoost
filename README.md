# VisualBoost

Sitio estático de marketing para **VisualBoost** (Astro, TypeScript, Tailwind CSS, isla React para la galería de trabajos).

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

## Variables de entorno

Copiá `.env.example` a `.env` y completá:

| Variable | Uso |
|----------|-----|
| `PUBLIC_SITE_URL` | URL canónica (Open Graph, `astro.config` vía `process.env` en build) |
| `PUBLIC_FORMSPREE_ID` | ID del formulario en [Formspree](https://formspree.io). Sin esto, en contacto se muestra un aviso y el formulario no envía. |
| `PUBLIC_WHATSAPP_NUMBER` | Código país + número, sin `+` ni espacios (ej. `573001234567`). |
| `PUBLIC_SCHEDULE_URL` | Enlace a Calendly, Google Appointment o similar para “Agendar reunión”. |

**Chat (Crisp, Tawk, etc.):** no se incluye script por defecto. Añadí el snippet del proveedor al final de `src/layouts/Layout.astro` (antes de `</body>`) cuando quieras activarlo.

## Despliegue

Generá `dist/` con `npm run build` y publicá en **Vercel**, **Netlify** o cualquier hosting estático. Asegurá **HTTPS** en producción.

## Contenido

- Textos y FAQ: `src/content/faq.ts`
- Portafolio (categorías e imágenes): `src/content/portfolio.ts` e imágenes en `public/portfolio/`
- Marca, email y fallbacks: `src/config/site.ts` y variables `PUBLIC_*`
