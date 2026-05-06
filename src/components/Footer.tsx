import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border bg-ink text-surface">
			<div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
				<div className="grid gap-10 md:grid-cols-3">
					<div>
						<p className="font-semibold text-white">VisualBoost</p>
						<p className="mt-2 text-sm text-white/80">{siteConfig.tagline}</p>
					</div>
					<div>
						<p className="text-sm font-semibold text-white">Enlaces</p>
						<ul className="mt-3 space-y-2 text-sm text-white/85">
							<li>
								<Link to="/servicios" className="underline-offset-4 hover:underline">
									Servicios
								</Link>
							</li>
							<li>
								<Link to="/planes" className="underline-offset-4 hover:underline">
									Planes
								</Link>
							</li>
							<li>
								<Link to="/trabajos" className="underline-offset-4 hover:underline">
									Trabajos
								</Link>
							</li>
							<li>
								<Link to="/faq" className="underline-offset-4 hover:underline">
									Preguntas frecuentes
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<p className="text-sm font-semibold text-white">Contacto</p>
						<ul className="mt-3 space-y-2 text-sm text-white/85">
							<li>
								<a href={`mailto:${siteConfig.email}`} className="underline-offset-4 hover:underline">
									{siteConfig.email}
								</a>
							</li>
							<li>
								<Link to="/contacto" className="underline-offset-4 hover:underline">
									Formulario y WhatsApp
								</Link>
							</li>
							<li>
								<Link to="/privacidad" className="underline-offset-4 hover:underline">
									Privacidad y datos
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<p className="mt-10 border-t border-white/15 pt-8 text-center text-sm text-white/65">
					© {year} VisualBoost. Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
}
