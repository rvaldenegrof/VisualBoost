export type PortfolioCategory = 'producto' | 'lifestyle' | 'reels' | 'edicion';

export interface PortfolioItem {
	id: string;
	title: string;
	alt: string;
	image: string;
	category: PortfolioCategory;
}

export const portfolioCategories: { id: PortfolioCategory | 'all'; label: string }[] = [
	{ id: 'all', label: 'Todos' },
	{ id: 'producto', label: 'Producto' },
	{ id: 'lifestyle', label: 'Lifestyle' },
	{ id: 'reels', label: 'Reels y corto' },
	{ id: 'edicion', label: 'Edición' },
];

const u = (id: string) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=1000&q=80`;

/**
 * Fotografías de ejemplo (Unsplash). Sustituye por archivos propios en `public/portfolio/`
 * o actualiza las URLs en despliegues de producción.
 */
export const portfolioItems: PortfolioItem[] = [
	{
		id: '1',
		title: 'Catálogo cosmetología',
		alt: 'Productos de maquillaje y frascos dispuestos sobre fondo claro, encuadre para e-commerce',
		image: u('photo-1596462502278-27bfdc403348'),
		category: 'producto',
	},
	{
		id: '2',
		title: 'Textil y detalle',
		alt: 'Textura de tela plegada en tonos neutros para ficha de producto textil',
		image: u('photo-1620799140408-edc6dcb6d633'),
		category: 'producto',
	},
	{
		id: '3',
		title: 'Cafetería y ambiente',
		alt: 'Taza de café y granos en mesa de madera, escena lifestyle para redes sociales',
		image: u('photo-1509042239860-f550ce710b93'),
		category: 'lifestyle',
	},
	{
		id: '4',
		title: 'Moda y estilo',
		alt: 'Indumentaria en perchero con fondo desenfocado, ambientación para marca de moda',
		image: u('photo-1469334031218-e382a71b716b'),
		category: 'lifestyle',
	},
	{
		id: '5',
		title: 'Food y preparación',
		alt: 'Manos preparando comida en cocina, encuadre vertical tipo reel o historia',
		image: u('photo-1556910103-1c02745aae4d'),
		category: 'reels',
	},
	{
		id: '6',
		title: 'Contenido móvil',
		alt: 'Teléfono inteligente mostrando pantalla, referencia de vídeo corto vertical',
		image: u('photo-1511707171634-5f897ff02aa9'),
		category: 'reels',
	},
	{
		id: '7',
		title: 'Presencia en redes',
		alt: 'Persona revisando teléfono con aplicaciones, planificación de publicaciones digitales',
		image: u('photo-1611162617474-5b21e879e113'),
		category: 'edicion',
	},
	{
		id: '8',
		title: 'Producción audiovisual',
		alt: 'Cámara sobre trípode y equipo de grabación, referencia de edición y postproducción',
		image: u('photo-1536240478700-b869070f9279'),
		category: 'edicion',
	},
];
