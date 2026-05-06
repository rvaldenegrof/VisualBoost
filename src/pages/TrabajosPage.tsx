import { Section } from '../components/Section';
import PortfolioGallery from '../components/PortfolioGallery';
import { SEO } from '../components/SEO';
import { portfolioItems } from '../content/portfolio';

export function TrabajosPage() {
	return (
		<>
			<SEO
				title="Nuestros trabajos"
				description="Portafolio VisualBoost: producto, lifestyle, reels y edición para redes. Galería por categorías."
			/>
			<div className="border-b border-border bg-surface-elevated py-12 md:py-16">
				<div className="mx-auto max-w-6xl px-4 md:px-6">
					<h1 className="text-4xl font-bold tracking-tight text-ink">Nuestros trabajos</h1>
					<p className="mt-4 max-w-2xl text-lg text-ink-muted">
						Selecciona una categoría para filtrar. Puedes reemplazar las fotografías de ejemplo por tus propios trabajos
						actualizando los datos en el proyecto.
					</p>
				</div>
			</div>

			<Section title="Galería por categoría" subtitle="Producto, lifestyle, reels y edición: contenido orientado a ventas digitales.">
				<PortfolioGallery items={portfolioItems} />
				<p className="mt-10 text-center text-sm text-ink-muted">
					Fotografías de ejemplo proporcionadas por{' '}
					<a
						href="https://unsplash.com"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-accent underline hover:no-underline"
					>
						Unsplash
					</a>{' '}
					(licencia propia del autor).
				</p>
			</Section>
		</>
	);
}
