import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formspreeAction } from '../config/site';

const planOptions = [
	{ value: '', label: 'Selecciona un plan (opcional)' },
	{ value: 'basico', label: 'Básico' },
	{ value: 'estandar', label: 'Estándar' },
	{ value: 'premium', label: 'Premium' },
	{ value: 'personalizado', label: 'Cotización personalizada' },
];

type Props = {
	initialPlan?: string | null;
};

export function ContactForm({ initialPlan }: Props) {
	const action = formspreeAction();
	const [plan, setPlan] = useState(initialPlan ?? '');

	useEffect(() => {
		if (initialPlan && planOptions.some((o) => o.value === initialPlan)) {
			setPlan(initialPlan);
		}
	}, [initialPlan]);

	if (!action) {
		return (
			<div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950" role="status">
				<p className="font-semibold">Configura el envío del formulario</p>
				<p className="mt-2 text-sm">
					Crea un formulario en{' '}
					<a href="https://formspree.io" className="underline" target="_blank" rel="noopener noreferrer">
						Formspree
					</a>{' '}
					y añade <code className="rounded bg-white/80 px-1">VITE_FORMSPREE_ID</code> en tu archivo{' '}
					<code className="rounded bg-white/80 px-1">.env</code>. Mientras tanto, usa WhatsApp o el enlace para
					agendar.
				</p>
			</div>
		);
	}

	return (
		<form action={action} method="POST" className="space-y-6" name="contact" aria-label="Formulario de contacto">
			<input type="hidden" name="_subject" value="Nuevo mensaje desde VisualBoost" />
			<div className="grid gap-6 sm:grid-cols-2">
				<div className="sm:col-span-1">
					<label htmlFor="name" className="block text-sm font-medium text-ink">
						Nombre <span className="text-accent">*</span>
					</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						autoComplete="name"
						className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
					/>
				</div>
				<div className="sm:col-span-1">
					<label htmlFor="email" className="block text-sm font-medium text-ink">
						Correo electrónico <span className="text-accent">*</span>
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						autoComplete="email"
						className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="phone" className="block text-sm font-medium text-ink">
					Teléfono (celular) / WhatsApp
				</label>
				<input
					id="phone"
					name="phone"
					type="tel"
					autoComplete="tel"
					className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
				/>
			</div>
			<div>
				<label htmlFor="business" className="block text-sm font-medium text-ink">
					Empresa o marca
				</label>
				<input
					id="business"
					name="business"
					type="text"
					autoComplete="organization"
					className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
				/>
			</div>
			<div>
				<label htmlFor="plan" className="block text-sm font-medium text-ink">
					Plan de interés
				</label>
				<select
					id="plan"
					name="plan"
					value={plan}
					onChange={(e) => setPlan(e.target.value)}
					className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
				>
					{planOptions.map((o) => (
						<option key={o.value || 'empty'} value={o.value}>
							{o.label}
						</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor="message" className="block text-sm font-medium text-ink">
					Cuéntanos tu necesidad <span className="text-accent">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					rows={5}
					required
					className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-ink shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
				/>
			</div>
			<div className="flex items-start gap-3">
				<input
					id="consent"
					name="consent"
					type="checkbox"
					required
					className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
				/>
				<label htmlFor="consent" className="text-sm text-ink-muted">
					Acepto el tratamiento de mis datos para responder a esta consulta, según la{' '}
					<Link to="/privacidad" className="font-medium text-accent underline hover:no-underline">
						información de privacidad
					</Link>
					. <span className="text-accent">*</span>
				</label>
			</div>
			<button
				type="submit"
				className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				Enviar mensaje
			</button>
		</form>
	);
}
