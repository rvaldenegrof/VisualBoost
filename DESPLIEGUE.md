# 🚀 Guía de Despliegue - VisualBoost

## Opciones de Hosting

### 1. GitHub Pages (RECOMENDADO - Gratis)

**Ventajas:**
- Gratis
- Despliegue automático con Git
- Dominio personalizado incluido
- HTTPS automático

**Pasos:**

#### Opción A: Con GitHub Actions (Automático)

1. **Criar repositorio en GitHub:**
   - Sube el código a `username/visualboost` o `username/visualboost-web`

2. **Configurar GitHub Pages:**
   - Settings → Pages
   - Build and deployment: GitHub Actions

3. **Deploy automático:**
   - El archivo `.github/workflows/deploy.yml` ya está configurado
   - Cada `git push` deployará automáticamente

#### Opción B: Manual

1. **Compilar localmente:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

#### Dominio personalizado:

1. **Edita `astro.config.mjs`:**
   ```javascript
   site: 'https://tudominio.com',
   ```

2. **GitHub Pages settings:**
   - Settings → Pages → Custom domain
   - Ingresa: `tudominio.com`

3. **DNS (Tu proveedor de dominio):**
   - Crea CNAME: `tudominio.com` → `username.github.io`
   - O usa los registros A que GitHub proporciona

---

### 2. Vercel (Gratis o Pago)

**Ventajas:**
- Muy rápido
- Deploy automático
- Analytics incluido
- Fácil de usar

**Pasos:**

1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Sigue las instrucciones:**
   - Conecta tu repositorio GitHub
   - Vercel deployará automáticamente en cada push

4. **Dominio personalizado:**
   - Vercel dashboard → Settings → Domains
   - Agrega tu dominio
   - Configura DNS

---

### 3. Netlify (Gratis o Pago)

**Ventajas:**
- Muy fácil
- Form submissions gratis
- Deploy automático
- Analytics

**Pasos:**

1. **Conecta en netlify.com:**
   - Sign up con GitHub
   - Selecciona tu repositorio

2. **Configuración automática:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

3. **Dominio personalizado:**
   - Settings → Domain management
   - Agrega tu dominio

---

### 4. Hosting Tradicional (Pago)

Compatible con: SiteGround, Hostinger, Bluehost, etc.

**Pasos:**

1. **Compilar:**
   ```bash
   npm run build
   ```

2. **Subir carpeta `dist` por FTP:**
   - Conecta con FileZilla o similar
   - Sube contenido de `dist/` a carpeta pública

3. **Configurar dominio:**
   - En tu hosting, apunta el dominio a la carpeta pública

---

## Opciones por Presupuesto

### 🆓 Opción Económica (Gratis)
- **Hosting:** GitHub Pages
- **Dominio:** Gratis (username.github.io) o compra dominio + apunta DNS
- **Costo:** $0-500/año (solo si compras dominio)
- **Comando:** `git push` (automático)

### 💰 Opción Profesional ($50-100/año)
- **Hosting:** Vercel/Netlify
- **Dominio:** Comprado en Namecheap o GoDaddy (~$10/año)
- **Costo:** ~$50-100/año
- **Ventajas:** Más rápido, mejor soporte, analytics

### 🏢 Opción Premium ($300+/año)
- **Hosting:** SiteGround/Hostinger
- **Dominio:** Incluido o comprado
- **SSL:** Incluido
- **Email:** Incluido
- **Ventajas:** Máximo control, email profesional

---

## Post-Deployment Checklist

- [ ] Sitio accesible en dominio
- [ ] Formulario de contacto funciona
- [ ] Links internos funcionan
- [ ] Imágenes cargan correctamente
- [ ] Responsive en móvil (prueba con DevTools)
- [ ] Meta tags correctos (revisa con SEO checker)
- [ ] Google Analytics funcionando (si tiene)
- [ ] Velocidad de carga <2s (prueba en Google PageSpeed)
- [ ] HTTPS activo (candado verde)
- [ ] Favicon visible

---

## Actualizaciones Futuras

Después de deploy, para actualizar contenido:

### Opción 1: Git (Recomendado)
```bash
# Edita archivos localmente
# Luego:
git add .
git commit -m "Actualización de contenido"
git push
# ¡Deploy automático!
```

### Opción 2: GitHub Web UI
- Edita archivos directamente en GitHub
- El cambio se deploya automáticamente

### Opción 3: CMS (Futuro)
- Agrega un CMS como Contentful o NetlifyCMS
- Edita contenido sin tocar código

---

## Monitoreo Post-Deploy

### Velocidad
- Google PageSpeed: https://pagespeed.web.dev
- WebPageTest: https://www.webpagetest.org

### SEO
- Google Search Console
- Google Analytics 4

### Uptime
- Uptime Robot (monitoreo gratis)

### Seguridad
- SSL Labs: https://www.ssllabs.com/ssltest/

---

## Troubleshooting

### "Deploy falla"
```bash
npm run build  # Prueba localmente primero
npm run preview  # Verifica que funcione
```

### "Sitio lento"
- Optimiza imágenes (TinyPNG, Squoosh)
- Usa CDN para imágenes (Cloudinary)
- Ativa caché del navegador

### "Formulario no envía"
- Para GitHub Pages: usa FormSubmit o Netlify Forms
- Edita endpoint en ContactForm.tsx

### "Dominio no funciona"
- Espera 24-48 hrs para DNS
- Verifica registros DNS con nslookup
- Purga caché del navegador

---

## Scripts Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview local del build
npm run preview

# Deploy a GitHub Pages
npm run deploy

# Linting
npm run lint

# Formatting
npm run format
```

---

## Contacto & Soporte

- 📧 Email: contacto@visualboost.com
- 💬 WhatsApp: +56 9 1234 5678
- 🌐 Sitio: visualboost.com

**¡Tu sitio está listo! 🚀**
