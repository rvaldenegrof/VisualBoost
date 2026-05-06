import { Link } from 'react-router-dom';

type Props = {
	name: string;
	price: string;
	description: string;
	features: string[];
	highlighted?: boolean;
	ctaTo: string;
	planId: string;
};

export function PricingCard({
	name,
	price,
	description,
	features,
	highlighted = false,
	ctaTo,
	planId,
}: Props) {
	return (
		<article
			className={`flex flex-col rounded-2xl border p-6 md:p-8 ${
				highlighted
					? 'border-accent bg-accent-soft shadow-soft ring-2 ring-accent/20'
					: 'border-border bg-surface-elevated shadow-soft'
			}`}
			aria-labelledby={`plan-${planId}`}
		>
			<h3 id={`plan-${planId}`} className="text-lg font-bold text-ink">
				{name}
			</h3>
			<p className="mt-1 text-sm text-ink-muted">{description}</p>
			<p className="mt-4">
				<span className="text-3xl font-bold tracking-tight text-ink">{price}</span>
				<span className="text-sm text-ink-muted"> / mes · CLP</span>
			</p>
			<ul className="mt-6 flex-1 space-y-3 text-sm text-ink-muted">
				{features.map((f) => (
					<li key={f} className="flex gap-2">
						<span className="mt-0.5 text-accent" aria-hidden="true">
							✓
						</span>
						<span>{f}</span>
					</li>
				))}
			</ul>
			<Link
				to={ctaTo}
				className={`mt-8 inline-flex w-full justify-center rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-offset-2 ${
					highlighted
						? 'bg-accent text-white hover:bg-accent-hover'
						: 'border border-border bg-white text-ink hover:border-accent/40 hover:bg-accent-soft'
				}`}
			>
				Elegir plan
			</Link>
		</article>
	);
}
