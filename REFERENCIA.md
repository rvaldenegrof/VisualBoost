# 📚 Referencia Rápida - VisualBoost

## Comandos Esenciales

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

## Estructura de Archivos

```
visualboost/
├── src/
│   ├── components/       # Componentes React reutilizables
│   ├── layouts/          # Layouts compartidos
│   ├── pages/            # Páginas (rutas automáticas)
│   ├── data/             # Datos estáticos
│   └── styles/           # Estilos globales
├── public/               # Archivos estáticos
├── package.json
├── astro.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

## Clases de Tailwind Personalizadas

```html
<!-- Botones -->
<button class="btn-primary">Primario</button>
<button class="btn-secondary">Secundario</button>

<!-- Títulos -->
<h1 class="heading-xl">Extra Grande</h1>
<h2 class="heading-lg">Grande</h2>
<h3 class="heading-md">Medio</h3>
<h4 class="heading-sm">Pequeño</h4>

<!-- Contenedor -->
<div class="container-max section-padding">Contenido</div>

<!-- Texto -->
<p class="text-muted">Texto gris</p>
```

## Crear Nueva Página

1. Crea `src/pages/mi-pagina.astro`
2. Usa Layout:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header';
import Footer from '../components/Footer';
---

<BaseLayout title="Mi Página">
  <Header client:load />
  <main><!-- Contenido --></main>
  <Footer client:load />
</BaseLayout>
```
3. Accesible en `/mi-pagina`

## Crear Nuevo Componente

1. Crea `src/components/MiComponente.tsx`:
```typescript
'use client';
import React from 'react';

export default function MiComponente() {
  return <div>Mi componente</div>;
}
```

2. Úsalo:
```astro
import MiComponente from '../components/MiComponente';
<MiComponente client:load />
```

## Editar Contenido

Archivo: `src/data/services.ts`

```typescript
export const PLANS = [/* Planes */];
export const SERVICES = [/* Servicios */];
export const TESTIMONIALS = [/* Testimonios */];
export const FAQ = [/* Preguntas */];
export const PORTFOLIO_ITEMS = [/* Portfolio */];
```

## Rutas Disponibles

| Ruta | Archivo |
|------|---------|
| `/` | `src/pages/index.astro` |
| `/portafolio` | `src/pages/portafolio.astro` |
| `/quienes-somos` | `src/pages/quienes-somos.astro` |
| `/contacto` | `src/pages/contacto.astro` |
| `/privacidad` | `src/pages/privacidad.astro` |
| `/terminos` | `src/pages/terminos.astro` |
| `/404` | `src/pages/404.astro` |

## Variables de Entorno

Edita `.env.local`:

```
SITE_URL=https://visualboost.com
PUBLIC_EMAIL=contacto@visualboost.com
PUBLIC_WHATSAPP=+56912345678
```

Úsalas:
```typescript
import.meta.env.PUBLIC_EMAIL
```

## Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Azul */ },
  accent: { /* Naranja */ }
}
```

## Fuentes

`tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', ...],      // Texto
  display: ['Poppins', ...], // Títulos
}
```

## Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Ejemplo:
```html
<div class="text-sm md:text-lg lg:text-xl">
  Tamaño diferente por dispositivo
</div>
```

## Animaciones

En `tailwind.config.js`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
}
```

Uso:
```html
<div class="animate-fade-in">Fade in</div>
```

## Deploy

```bash
# Git push -> Deploy automático a GitHub Pages
git add .
git commit -m "Mensaje"
git push

# O manual:
npm run build
# Subir carpeta `dist/`
```

## Performance Tips

1. **Imágenes:** Comprime antes de subir
2. **Componentes:** Usa `client:load` solo si necesario
3. **CSS:** Tailwind purga automáticamente
4. **Caché:** Astro cachea automáticamente

## Debugging

```bash
# Build con detalles
npm run build -- --verbose

# Dev con logs
npm run dev -- --verbose
```

## Links Útiles

- Astro Docs: https://docs.astro.build
- Tailwind Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs/

## Keyboard Shortcuts

- `Ctrl/Cmd + K` - Paleta de comandos (VSCode)
- `F12` - DevTools (navegador)
- `Ctrl/Cmd + Shift + R` - Hard refresh

---

**¿Necesitas ayuda? Revisa README.md o PERSONALIZACION.md**
