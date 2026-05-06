# Guía de Personalización - VisualBoost

## 🎨 Colores

### Cambiar Colores Principales

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    600: '#0284c7',  // Cambiar este
    700: '#0369a1',  // Y este
  },
  accent: {
    400: '#f59e0b',  // Cambiar este
    500: '#f97316',  // Y este
  },
}
```

## 📝 Contenido Principal

### Planes de Precios

Edita `src/data/services.ts`:

```typescript
export const PLANS = [
  {
    id: 'basic',
    name: 'Nombre del plan',
    price: '$120.000',  // Cambiar precio
    description: 'Descripción breve',
    features: [
      'Característica 1',
      'Característica 2',
    ],
    popular: false,  // true para plan destacado
  },
];
```

### Servicios

Edita `SERVICES` en `src/data/services.ts`:

```typescript
{
  id: 'photography',
  name: 'Nombre del servicio',
  description: 'Descripción corta',
  icon: '📸',  // Cambiar emoji
  benefits: ['Beneficio 1', 'Beneficio 2'],
}
```

### Preguntas Frecuentes

Edita `FAQ` en `src/data/services.ts`:

```typescript
{
  question: '¿Tu pregunta?',
  answer: 'Tu respuesta detallada aquí.',
}
```

### Testimonios

Edita `TESTIMONIALS` en `src/data/services.ts`:

```typescript
{
  name: 'Nombre Cliente',
  role: 'Rol / Empresa',
  comment: 'Lo que dijeron de ti...',
  rating: 5,  // 1-5 estrellas
}
```

### Portafolio

Edita `PORTFOLIO_ITEMS` en `src/data/services.ts`:

```typescript
{
  id: 1,
  category: 'ecommerce',  // Una de las categorías
  title: 'Título del proyecto',
  description: 'Breve descripción',
  image: '/portfolio/1.jpg',  // Ruta de imagen
  tags: ['Etiqueta 1', 'Etiqueta 2'],
}
```

## 📱 Información de Contacto

### Teléfono, Email, WhatsApp

Edita `src/components/ContactForm.tsx`:

```typescript
{
  label: 'Email',
  href: 'mailto:tu@email.com',
}

{
  label: 'WhatsApp',
  href: 'https://wa.me/56912345678',
}
```

## 🖼️ Imágenes

### Agregar Logo

1. Coloca tu logo en `public/logo.png`
2. Reemplaza el V en Header.tsx con tu logo:

```typescript
<img src="/logo.png" alt="Logo" className="w-10 h-10" />
```

### Agregar Imágenes del Portafolio

1. Coloca imágenes en `public/portfolio/`
2. Actualiza `PORTFOLIO_ITEMS` con las rutas

Ejemplo:
```typescript
image: '/portfolio/proyecto1.jpg',
```

### Portada (Hero)

Reemplaza en `src/components/HeroSection.tsx`:

```typescript
<img 
  src="/hero.png" 
  alt="Hero" 
  className="w-full h-full object-cover"
/>
```

## 🔧 Componentes Personalizados

### Agregar Nueva Página

1. Crea archivo en `src/pages/nueva-pagina.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header';
import Footer from '../components/Footer';
---

<BaseLayout title="Mi Página">
  <Header client:load />
  <main>
    {/* Tu contenido aquí */}
  </main>
  <Footer client:load />
</BaseLayout>
```

2. Accesible en `/nueva-pagina`

### Agregar Nueva Sección

1. Crea componente en `src/components/MiSeccion.tsx`:

```typescript
export default function MiSeccion() {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Contenido aquí */}
      </div>
    </section>
  );
}
```

2. Úsalo en cualquier página:

```astro
import MiSeccion from '../components/MiSeccion';

<MiSeccion client:load />
```

## 🌍 Información de Sitio

### Cambiar URL

Edita `astro.config.mjs`:

```javascript
site: 'https://tudominio.com',
```

### Cambiar Nombre

Busca y reemplaza "VisualBoost" con el nombre de tu empresa

## ⚙️ Variables de Entorno

Crea `.env.local` desde `.env.example`:

```
SITE_URL=https://tudominio.com
PUBLIC_EMAIL=tu@email.com
PUBLIC_WHATSAPP=+56912345678
```

Úsalas así:

```typescript
import.meta.env.PUBLIC_EMAIL
```

## 🚀 Publicar Cambios

1. Edita tus archivos
2. Guarda los cambios
3. En terminal:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

4. El sitio se actualizará automáticamente en ~1 minuto

## 🎓 Tips de Diseño

### Tipografía

- **Títulos**: Poppins (Display)
- **Texto**: Inter (Sans)

Cambio en `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Tu Font', 'system-ui'],
  display: ['Tu Display Font', 'system-ui'],
}
```

### Espaciado

Use clases de Tailwind:
- `section-padding` = Padding estándar de sección
- `container-max` = Max-width y centrado

### Colores Predefinidos

- `.btn-primary` - Botón principal
- `.btn-secondary` - Botón secundario
- `.heading-xl` - Título extra grande
- `.text-muted` - Texto gris

## 📊 Analytics

Agrega Google Analytics:

1. Obtén tu ID de GA4
2. Edita `.env.local`:

```
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

3. Crea componente `src/components/Analytics.tsx`:

```typescript
export default function Analytics() {
  return (
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID}`}></script>
  );
}
```

## ✅ Checklist Pre-Launch

- [ ] URLs y información de contacto actualizadas
- [ ] Logo y colores personalizados
- [ ] Contenido de planes y servicios correcto
- [ ] Testimonios reales agregados
- [ ] Imágenes de portafolio subidas
- [ ] Dominio configurado
- [ ] Email de contacto funcionando
- [ ] SEO basics (meta descriptions, og:image)
- [ ] Testeado en móvil y desktop
- [ ] Deploy confirmado en GitHub Pages

---

¿Preguntas? Contacta al equipo de VisualBoost 📞
