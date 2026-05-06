export const PLANS = [
  {
    id: 'basic',
    name: 'Plan Básico',
    price: '$120.000',
    description: 'Perfecto para emprendedores que comienzan',
    period: 'mensual',
    features: [
      'Sesión de contenido 1 vez por mes',
      'Banco de 8-10 piezas de contenido',
      'Edición optimizada para Instagram',
      'Acceso a plantillas de publicación',
      'Seguimiento básico de resultados',
      'Soporte por email',
    ],
    popular: false,
  },
  {
    id: 'standard',
    name: 'Plan Estándar',
    price: '$200.000',
    description: 'La opción más popular para pymes en crecimiento',
    period: 'mensual',
    features: [
      'Sesión de contenido 2 veces por mes',
      'Banco de 15-20 piezas de contenido',
      'Reels editados y optimizados',
      'Edición para Instagram, TikTok y Facebook',
      'Estrategia básica de contenido',
      'Reportes mensuales de desempeño',
      'Soporte prioritario por email y WhatsApp',
      'Revisiones ilimitadas',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: '$350.000',
    description: 'Máximo crecimiento y presencia en redes',
    period: 'mensual',
    features: [
      'Sesión de contenido 4 veces por mes',
      'Banco de 30-40 piezas de contenido',
      'Reels, fotos lifestyle y producto',
      'Edición para todas las plataformas',
      'Estrategia personalizada de contenido',
      'Análisis de competencia',
      'Reportes semanales detallados',
      'Brainstorming creativo mensual',
      'Soporte VIP (WhatsApp + email)',
      'Acceso a recursos premium',
    ],
    popular: false,
  },
];

export const SERVICES = [
  {
    id: 'product-photography',
    name: 'Fotografía de Productos',
    description: 'Fotos profesionales que muestran tus productos como se merecen',
    icon: '📸',
    benefits: [
      'Iluminación profesional',
      'Múltiples ángulos',
      'Fondo limpio y consistente',
      'Listo para publicar',
    ],
  },
  {
    id: 'lifestyle-photography',
    name: 'Fotografía Lifestyle',
    description: 'Contenido que conecta emocionalmente con tu audiencia',
    icon: '🌟',
    benefits: [
      'Contexto real',
      'Auténtico y relatable',
      'Muestra el beneficio del producto',
      'Genera engagement',
    ],
  },
  {
    id: 'reels-content',
    name: 'Reels & Contenido Corto',
    description: 'Videos virales diseñados para vender',
    icon: '🎬',
    benefits: [
      'Edición profesional',
      'Efectos optimizados',
      'Subtítulos y gráficos',
      'Algoritmo-friendly',
    ],
  },
  {
    id: 'editing',
    name: 'Edición para Redes Sociales',
    description: 'Contenido pulido y listo para publicar',
    icon: '✨',
    benefits: [
      'Colores y contraste optimizados',
      'Tamaños para cada plataforma',
      'Branding consistente',
      'Profesional al 100%',
    ],
  },
];

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Marketplace',
    description: 'Tiendas online que venden más con mejor contenido visual',
  },
  {
    id: 'local-business',
    name: 'Negocios Locales',
    description: 'Cafés, restaurantes, tiendas físicas con fuerte presencia digital',
  },
  {
    id: 'services',
    name: 'Servicios Profesionales',
    description: 'Peluquerías, spas, consultorios, estudios creativos',
  },
  {
    id: 'handmade',
    name: 'Emprendimientos Artesanales',
    description: 'Productos handmade y creativos con historia',
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'ecommerce',
    title: 'Aumento de ventas 240%',
    description: 'Tienda de accesorios femeninos',
    image: '/portfolio/1.jpg',
    tags: ['Fotos Producto', 'Reels', 'Edición'],
  },
  {
    id: 2,
    category: 'local-business',
    title: 'Café artesanal con viralidad',
    description: 'Contenido lifestyle y ambiente',
    image: '/portfolio/2.jpg',
    tags: ['Lifestyle', 'Reels', 'Edición'],
  },
  {
    id: 3,
    category: 'services',
    title: 'Studio de yoga - 150 clientes nuevos',
    description: 'Transformación visual en 2 meses',
    image: '/portfolio/3.jpg',
    tags: ['Fotos', 'Reels', 'Estrategia'],
  },
  {
    id: 4,
    category: 'handmade',
    title: 'Emprendimiento de cerámica',
    description: 'De 0 a 5K seguidores en 3 meses',
    image: '/portfolio/4.jpg',
    tags: ['Producto', 'Lifestyle', 'Reels'],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Carolina Mendoza',
    role: 'Propietaria - Tienda de Accesorios',
    comment:
      'En 2 meses nuestras ventas aumentaron 240%. El equipo entiende realmente qué vende en redes.',
    rating: 5,
  },
  {
    name: 'Jorge Díaz',
    role: 'Dueño - Café Artesanal',
    comment:
      'Entendieron nuestro negocio al primer encuentro. El contenido que hacen es auténtico y vende.',
    rating: 5,
  },
  {
    name: 'Mariana Silva',
    role: 'Instructora - Studio de Yoga',
    comment:
      'Los reels que nos hacen son profesionales pero se ven reales. Atrae exactamente a nuestro público.',
    rating: 5,
  },
];

export const FAQ = [
  {
    question: '¿Cuál es el plan ideal para mi negocio?',
    answer:
      'Depende de tu objetivo. Si recién comienzas, el Plan Básico es excelente. Si ya tienes ventas y quieres escalar, el Estándar. Si quieres máxima presencia, el Premium es tu opción. Siempre podés cambiar de plan.',
  },
  {
    question: '¿Cuánto tiempo tarda una sesión de contenido?',
    answer:
      'Una sesión típica dura 3-4 horas. Capturamos 30-50 fotos y creamos múltiples piezas de contenido listas para publicar en todas tus plataformas.',
  },
  {
    question: '¿Qué pasa si no me gusta el contenido?',
    answer:
      'Hacemos revisiones ilimitadas hasta que estés 100% satisfecho. Tu satisfacción es nuestra prioridad. No termina hasta que sea perfecto.',
  },
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer:
      'Sí. Puedes cambiar de plan mes a mes sin penalizaciones. Muchos clientes comienzan en Básico y suben a Estándar o Premium.',
  },
  {
    question: '¿Cómo funciona si tengo tienda física y online?',
    answer:
      'Perfecto. Creamos contenido que funciona en ambos canales. Fotos de producto para marketplace y lifestyle para redes sociales.',
  },
  {
    question: '¿Qué incluye exactamente el "Banco de Contenido"?',
    answer:
      'Fotos editadas en PNG (fondo transparente) y JPG, reels editados, videos cortos y todas las versiones optimizadas para cada red social (Instagram, TikTok, Facebook, Pinterest).',
  },
  {
    question: '¿Hay contrato de larga duración?',
    answer:
      'No. Funcionamos mes a mes. Creemos en ganar tu confianza cada mes, no en obligarte a contratos largos.',
  },
  {
    question: '¿Puedo pausar mi plan temporalmente?',
    answer:
      'Sí. Si necesitas pausa puntual, contactanos. Podemos congelar por hasta 2 meses y reanudar después.',
  },
];
