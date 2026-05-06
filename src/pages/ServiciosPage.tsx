import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { SEO } from '../components/SEO';

export function ServiciosPage() {
	return (
		<>
			<SEO
				title="Servicios"
				description="Fotografía de producto y lifestyle, reels y contenido corto, y edición optimizada para redes. VisualBoost, contenido visual para vender más."
			/>
			<div className="border-b border-border bg-surface-elevated py-12 md:py-16">
				<div className="mx-auto max-w-6xl px-4 md:px-6">
					<h1 className="text-4xl font-bold tracking-tight text-ink">Servicios</h1>
					<p className="mt-4 max-w-2xl text-lg text-ink-muted">
						Cada servicio está pensado para un momento del embudo: que te descubran, confíen y te escriban. Combinamos
						técnica y criterio comercial.
					</p>
				</div>
			</div>

			<Section
				title="Lo que hacemos para tu negocio"
				subtitle="Puedes contratar piezas puntuales o integrar todo en un plan mensual."
			>
				<div className="grid gap-6 md:grid-cols-2">
					<Card
						icon="camera"
						title="Fotografía de producto"
						description="Fondos y encuadres que destacan atributos y uso. Ideal para catálogo, tienda online y fichas de marketplace: menos fricción al comprar."
					/>
					<Card
						icon="spark"
						title="Fotografía lifestyle"
						description="Escenas que conectan emocionalmente y muestran tu producto en contexto real, reforzando estilo de marca y confianza."
					/>
					<Card
						icon="film"
						title="Reels y contenido corto"
						description="Guiones breves, ritmo ágil y mensaje claro para reels, historias y piezas promocionales. Optimizado para móvil."
					/>
					<Card
						icon="edit"
						title="Edición optimizada para redes"
						description="Exportaciones en proporciones correctas, tipografía legible en pantalla pequeña y variantes para stories, feed y anuncios."
					/>
				</div>
			</Section>

			<section className="border-t border-border bg-accent-soft/30 py-14 md:py-20">
				<div className="mx-auto max-w-6xl px-4 md:px-6">
					<h2 className="text-2xl font-bold text-ink">Tu próximo paso</h2>
					<p className="mt-3 max-w-2xl text-ink-muted">
						Cuéntanos tu rubro, canales y objetivo. Preparamos una propuesta alineada a tu plan o una cotización a
						medida.
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<Button to="/contacto">Solicitar cotización</Button>
						<Button to="/planes" variant="secondary">
							Comparar planes
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
