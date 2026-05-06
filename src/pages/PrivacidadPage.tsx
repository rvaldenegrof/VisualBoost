import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site';

export function PrivacidadPage() {
	return (
		<>
			<SEO
				title="Privacidad y protección de datos"
				description="Información sobre tratamiento de datos personales en el sitio VisualBoost y envío de formularios."
			/>
			<div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
				<h1 className="text-4xl font-bold tracking-tight text-ink">Privacidad y datos personales</h1>
				<p className="mt-4 text-ink-muted">Última actualización: mayo de 2026.</p>

				<div className="mt-10 max-w-none space-y-6 text-ink-muted">
					<h2 className="text-xl font-semibold text-ink">Responsable</h2>
					<p>
						El sitio web de <strong className="text-ink">{siteConfig.name}</strong> ({siteConfig.tagline}) informa sobre
						sus servicios y canales de contacto.
					</p>

					<h2 className="text-xl font-semibold text-ink">Datos que puedes enviar</h2>
					<p>
						A través del formulario de contacto puedes facilitar nombre, correo electrónico, teléfono, nombre de empresa
						y el contenido de tu mensaje. La base legal del tratamiento es la gestión de tu solicitud y, en su caso, la
						relación comercial previa.
					</p>

					<h2 className="text-xl font-semibold text-ink">Envío del formulario</h2>
					<p>
						Los mensajes pueden procesarse mediante un proveedor externo (por ejemplo Formspree u otro servicio de
						formularios) que actúa como encargado del tratamiento según su propia política. Te recomendamos revisar la
						política de dicho proveedor cuando configures el envío.
					</p>

					<h2 className="text-xl font-semibold text-ink">Conservación</h2>
					<p>
						Los datos se conservarán el tiempo necesario para responder a tu consulta y dar seguimiento comercial, salvo
						obligación legal de conservación distinta.
					</p>

					<h2 className="text-xl font-semibold text-ink">Derechos</h2>
					<p>
						Puedes solicitar acceso, rectificación, supresión, limitación u oposición según la normativa aplicable
						(incluido el RGPD si corresponde). Para ejercerlos, escríbenos a{' '}
						<a href={`mailto:${siteConfig.email}`} className="font-medium text-accent underline hover:no-underline">
							{siteConfig.email}
						</a>
						.
					</p>

					<h2 className="text-xl font-semibold text-ink">Seguridad</h2>
					<p>
						El sitio debe publicarse usando HTTPS (certificado SSL) en tu proveedor de hosting. Esto cifra la
						comunicación entre tu navegador y el servidor.
					</p>

					<h2 className="text-xl font-semibold text-ink">Enlaces externos</h2>
					<p>
						Podemos enlazar a WhatsApp, calendarios de citas u otras herramientas. Esas plataformas tienen sus propias
						políticas de privacidad y cookies.
					</p>
				</div>

				<p className="mt-12 text-sm text-ink-muted">
					<Link to="/contacto" className="font-medium text-accent underline hover:no-underline">
						Volver a contacto
					</Link>
				</p>
			</div>
		</>
	);
}
