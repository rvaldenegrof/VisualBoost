# VisualBoost - Contenido Estratégico para Ventas Digitales de Pymes

🎯 Sitio web moderno, rápido y optimizado para VisualBoost: agencia especializada en contenido visual estratégico para emprendedores y pymes.

## 🚀 Características

- **Diseño Responsivo**: Mobile-first, funciona perfectamente en todos los dispositivos
- **Rendimiento Excepcional**: Carga en menos de 2 segundos
- **Accesibilidad**: Cumple con pautas WCAG
- **SEO Optimizado**: Meta tags, structured data, sitemap
- **Componentes Interactivos**: Formularios, FAQ, filtros de portafolio
- **Fácil de Mantener**: Astro + React + TypeScript

## 📋 Stack Tecnológico

- **Framework**: Astro 4.x
- **UI Components**: React 18
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Package Manager**: npm

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
├── layouts/            # Layouts de Astro
├── pages/              # Páginas del sitio (rutas automáticas)
├── data/               # Datos estáticos (planes, servicios, etc)
├── styles/             # Estilos globales
public/                 # Archivos estáticos
```

## 🛠️ Instalación y Configuración

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Desarrollo Local

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### 3. Compilar para Producción

```bash
npm run build
```

### 4. Preview de Producción

```bash
npm run preview
```

## 📄 Páginas Disponibles

- **Inicio** (`/`) - Hero, servicios, planes, testimonios, FAQ
- **Servicios** (sección en inicio) - 4 servicios principales
- **Portafolio** (`/portafolio`) - Galería con categorías de trabajos
- **Quiénes Somos** (`/quienes-somos`) - Información de la empresa
- **Contacto** (`/contacto`) - Formulario de contacto
- **FAQ** (sección en inicio) - 8 preguntas frecuentes
- **Privacidad** (`/privacidad`) - Política de privacidad
- **Términos** (`/terminos`) - Términos y condiciones

## 🎨 Personalización

### Colores

Edita los colores en `tailwind.config.js`:

```javascript
colors: {
  primary: { 50: ..., 600: ..., 700: ... },
  accent: { 400: ..., 500: ..., 600: ... }
}
```

### Contenido

Edita los datos en `src/data/services.ts`:

- `PLANS` - Planes de precios
- `SERVICES` - Servicios ofrecidos
- `PORTFOLIO_ITEMS` - Trabajos del portafolio
- `TESTIMONIALS` - Testimonios de clientes
- `FAQ` - Preguntas frecuentes

### Información de Contacto

Actualiza en `src/components/ContactForm.tsx`:
- Email
- WhatsApp
- Teléfono

## 🌐 Despliegue

### GitHub Pages

1. Cambia `site` en `astro.config.mjs` a tu URL de GitHub Pages
2. Configura en GitHub: Settings → Pages → Build and deployment
3. Selecciona `GitHub Actions` como source
4. El sitio se deployará automáticamente en cada push

### Vercel

```bash
vercel
```

### Netlify

```bash
netlify deploy
```

## 📱 Responsive Design

El sitio es totalmente responsive:
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## ♿ Accesibilidad

- Colores de alto contraste
- Semántica HTML correcta
- Labels en formularios
- ARIA attributes donde es necesario
- Navegación por teclado funcional

## 🔍 SEO

- Meta descriptions dinámicas
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap generado automáticamente
- URLs amigables

## 🚀 Optimizaciones

- Image lazy loading
- Code splitting automático
- Minificación de CSS/JS
- Static generation por defecto
- Caché busting automático

## 📞 Soporte y Contacto

Para más información sobre VisualBoost:
- Email: contacto@visualboost.com
- WhatsApp: +56 9 1234 5678
- Teléfono: +56 2 1234 5678

## 📄 Licencia

© 2024 VisualBoost. Todos los derechos reservados.

## 🤝 Contribuciones

Las sugerencias y mejoras son bienvenidas. Contacta a nuestro equipo para discutir cambios importantes.

---

**Hecho con ❤️ por el equipo de VisualBoost**
