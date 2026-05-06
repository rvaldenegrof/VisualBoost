import { Button } from '../components/Button';
import { PricingCard } from '../components/PricingCard';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export function PlanesPage() {
	return (
		<>
			<SEO
				title="Planes y precios"
				description="Planes mensuales VisualBoost en CLP: Básico $120.000, Estándar $200.000, Premium $350.000. Sesiones, banco de contenido y material listo para publicar."
			/>
			<div className="border-b border-border bg-surface-elevated py-12 md:py-16">
				<div className="mx-auto max-w-6xl px-4 md:px-6">
					<h1 className="text-4xl font-bold tracking-tight text-ink">Planes mensuales</h1>
					<p className="mt-4 max-w-2xl text-lg text-ink-muted">
						Precios referenciales en pesos chilenos (CLP). Incluyen sesiones al mes, banco de contenido y material listo
						para publicar. Ajustamos los detalles según tu rubro y canales.
					</p>
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
				<div className="grid gap-8 lg:grid-cols-3">
					<PricingCard
						planId="basico"
						name="Básico"
						price="$120.000"
						description="Ideal para empezar a ordenar el feed y tener stock de piezas cada mes."
						features={[
							'1 sesión de captura al mes',
							'Banco de contenido base (fotos estáticas)',
							'Material listo para feed y marketplace',
							'Asesoría breve de formato por canal',
						]}
						ctaTo="/contacto?plan=basico"
					/>
					<PricingCard
						planId="estandar"
						name="Estándar"
						price="$200.000"
						description="Balance entre volumen y variedad: fotos + algo de corto para redes."
						highlighted={true}
						features={[
							'2 sesiones de captura al mes',
							'Banco de contenido ampliado (estático + cortos)',
							'Piezas para feed, historias y al menos 1 reel/mes',
							'Calendario editorial sugerido (simple)',
						]}
						ctaTo="/contacto?plan=estandar"
					/>
					<PricingCard
						planId="premium"
						name="Premium"
						price="$350.000"
						description="Máxima producción y acompañamiento para marcas que publican seguido."
						features={[
							'3+ sesiones o producción extendida al mes',
							'Banco de contenido premium y más variantes de edición',
							'Reels / cortos con mayor volumen',
							'Prioridad en agenda y revisión de mensaje comercial',
						]}
						ctaTo="/contacto?plan=premium"
					/>
				</div>

				<p className="mt-10 text-center text-sm text-ink-muted">
					¿Necesitas algo fuera de estos paquetes?{' '}
					<Link to="/contacto" className="font-medium text-accent underline hover:no-underline">
						Solicita una cotización personalizada
					</Link>
					.
				</p>

				<div className="mt-12 flex justify-center">
					<Button to="/faq">Ver preguntas frecuentes</Button>
				</div>
			</div>
		</>
	);
}
