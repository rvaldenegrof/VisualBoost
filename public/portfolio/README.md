# Imágenes del Portafolio

Esta carpeta contiene las imágenes utilizadas en la sección de portafolio del sitio web.

## Estructura de archivos

- `accesorios-femeninos.jpg` - Tienda de accesorios femeninos
- `cafe-artesanal.jpg` - Café artesanal
- `studio-yoga.jpg` - Studio de yoga
- `ceramica-artesanal.jpg` - Emprendimiento de cerámica
- `cosmeticos-naturales.jpg` - Tienda de cosméticos naturales
- `restaurante-familiar.jpg` - Restaurante familiar

## Especificaciones de imágenes

- **Formato**: JPG o PNG
- **Resolución recomendada**: 800x600px mínimo, 1200x900px ideal
- **Tamaño**: Máximo 500KB por imagen
- **Aspect ratio**: 4:3 o similar para consistencia visual

## Cómo agregar nuevas imágenes

1. Coloca la imagen en esta carpeta
2. Actualiza el archivo `src/data/services.ts` agregando un nuevo objeto en `PORTFOLIO_ITEMS`
3. Asegúrate de que la propiedad `image` apunte a la ruta correcta: `/portfolio/nombre-imagen.jpg`

## Optimización

Las imágenes se optimizan automáticamente durante el build de Astro. Para mejores resultados:
- Usa imágenes de alta calidad pero comprimidas
- Evita imágenes demasiado grandes
- Considera usar WebP para mejor compresión