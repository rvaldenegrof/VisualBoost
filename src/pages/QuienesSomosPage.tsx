import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site';

export function QuienesSomosPage() {
	return (
		<>
			<SEO
				title="Quiénes somos"
				description="Conoce VisualBoost: contenido visual orientado a ventas para emprendedores y pymes, con lenguaje simple y foco en resultados."
			/>
			<div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
				<h1 className="text-4xl font-bold tracking-tight text-ink">Quiénes somos</h1>
				<p className="mt-4 text-lg text-ink-muted">
					{siteConfig.name} nace para resolver un problema común: tener “buenas fotos” que no traducen en más ventas.
				</p>

				<div className="mt-10 max-w-none space-y-6 text-ink-muted">
					<h2 className="text-xl font-semibold text-ink">Nuestra propuesta</h2>
					<p>
						Ayudamos a emprendedores y pymes a vender más a través de contenido visual{' '}
						<strong className="text-ink">estratégico</strong>, no solo estético. Eso significa pensar en quién compra,
						qué duda tiene antes de escribirte y cómo tu imagen puede responder en segundos.
					</p>

					<h2 className="mt-10 text-xl font-semibold text-ink">Cómo trabajamos</h2>
					<p>
						Usamos un lenguaje simple, sin tecnicismos innecesarios. Te contamos qué vamos a producir, para qué canal y
						qué resultado buscamos (más consultas, más claridad de oferta, más confianza). Las entregas suelen estar
						listas en <strong className="text-ink">48 a 72 horas</strong> según el proyecto.
					</p>

					<h2 className="mt-10 text-xl font-semibold text-ink">A quién acompañamos</h2>
					<ul className="mt-3 list-disc space-y-2 pl-5">
						<li>Emprendedores con o sin tienda física.</li>
						<li>Pymes que venden por Instagram, TikTok o marketplaces.</li>
						<li>Negocios locales que están creciendo y necesitan orden en su comunicación visual.</li>
					</ul>

					<h2 className="mt-10 text-xl font-semibold text-ink">Qué puedes esperar</h2>
					<p>
						Sesiones de captura al mes (según tu plan), un banco de contenido para no quedarte sin publicaciones y
						archivos listos para publicar en el formato correcto. Si quieres ver ejemplos, visita{' '}
						<Link to="/trabajos" className="font-medium text-accent underline hover:no-underline">
							nuestros trabajos
						</Link>
						.
					</p>
				</div>

				<div className="mt-12 flex flex-wrap gap-4">
					<Button to="/contacto">Solicitar cotización</Button>
					<Button to="/planes" variant="secondary">
						Ver planes
					</Button>
				</div>
			</div>
		</>
	);
}
