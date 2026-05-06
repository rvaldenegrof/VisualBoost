import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';
import { siteConfig, whatsappHref } from '../config/site';

const allowedPlans = ['basico', 'estandar', 'premium', 'personalizado'];

export function ContactoPage() {
	const [searchParams] = useSearchParams();
	const raw = searchParams.get('plan');
	const initialPlan = raw && allowedPlans.includes(raw) ? raw : null;

	const scheduleUrl = siteConfig.scheduleUrl;
	const waLink = whatsappHref(
		'Hola VisualBoost, quiero coordinar una llamada o cotización sobre contenido visual.',
	);

	return (
		<>
			<SEO
				title="Contacto"
				description="Escribe a VisualBoost: cotización, WhatsApp o agendar una reunión. Respondemos con propuesta clara."
			/>
			<div className="border-b border-border bg-surface-elevated py-12 md:py-16">
				<div className="mx-auto max-w-6xl px-4 md:px-6">
					<h1 className="text-4xl font-bold tracking-tight text-ink">Contacto</h1>
					<p className="mt-4 max-w-2xl text-lg text-ink-muted">
						Elige el canal que te resulte más cómodo. Para cotizaciones detalladas preferimos el formulario o WhatsApp
						con contexto de tu negocio.
					</p>
				</div>
			</div>

			<div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-5 md:gap-16 md:px-6 md:py-20">
				<div className="md:col-span-2">
					<h2 className="text-lg font-semibold text-ink">Otras formas de contacto</h2>
					<ul className="mt-6 space-y-6 text-ink-muted">
						<li>
							<p className="text-sm font-medium text-ink">Correo</p>
							<a
								href={`mailto:${siteConfig.email}`}
								className="mt-1 inline-block font-medium text-accent underline hover:no-underline"
							>
								{siteConfig.email}
							</a>
						</li>
						<li>
							<p className="text-sm font-medium text-ink">WhatsApp</p>
							<a
								href={waLink}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-1 inline-flex rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#20bd5a]"
							>
								Hablar por WhatsApp
							</a>
						</li>
						<li>
							<p className="text-sm font-medium text-ink">Agendar cita</p>
							<p className="mt-1 text-sm">
								Coordina un espacio en tu calendario externo (define la URL en la variable{' '}
								<code className="rounded bg-accent-soft px-1 text-ink">VITE_SCHEDULE_URL</code>).
							</p>
							<a
								href={scheduleUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 inline-flex rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-accent/40 hover:bg-accent-soft"
							>
								Agendar reunión
							</a>
						</li>
					</ul>
					<div className="mt-10 rounded-2xl border border-border bg-accent-soft/50 p-5">
						<p className="text-sm font-semibold text-ink">Certificado SSL y datos personales</p>
						<p className="mt-2 text-sm text-ink-muted">
							Este sitio debe servirse por HTTPS en producción. Los datos del formulario se envían al proveedor que
							configures (p. ej. Formspree). Más información en{' '}
							<Link to="/privacidad" className="font-medium text-accent underline hover:no-underline">
								Privacidad
							</Link>
							.
						</p>
					</div>
				</div>

				<div className="md:col-span-3" id="formulario">
					<h2 className="text-lg font-semibold text-ink">Enviar mensaje</h2>
					<p className="mt-2 text-sm text-ink-muted">
						Campos marcados con <span className="text-accent">*</span> son obligatorios.
					</p>
					<div className="mt-8">
						<ContactForm initialPlan={initialPlan} />
					</div>
				</div>
			</div>

			<section className="border-t border-border bg-surface py-12 md:py-16">
				<div className="mx-auto max-w-6xl px-4 text-center md:px-6">
					<p className="text-ink-muted">¿Prefieres ver precios antes?</p>
					<div className="mt-4 flex justify-center gap-4">
						<Button to="/planes">Ver planes</Button>
						<Button to="/faq" variant="secondary">
							FAQ
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
