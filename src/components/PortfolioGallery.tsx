import { useId, useMemo, useState } from 'react';
import type { PortfolioCategory, PortfolioItem } from '../content/portfolio';
import { portfolioCategories } from '../content/portfolio';

type FilterId = (typeof portfolioCategories)[number]['id'];

interface Props {
	items: PortfolioItem[];
}

export default function PortfolioGallery({ items }: Props) {
	const baseId = useId();
	const [active, setActive] = useState<FilterId>('all');

	const filtered = useMemo(() => {
		if (active === 'all') return items;
		return items.filter((i) => i.category === active);
	}, [active, items]);

	const labelId = `${baseId}-label`;

	return (
		<div>
			<p id={labelId} className="sr-only">
				Filtrar trabajos por categoría
			</p>
			<div
				className="flex flex-wrap gap-2"
				role="group"
				aria-labelledby={labelId}
			>
				{portfolioCategories.map(({ id, label }) => {
					const pressed = active === id;
					return (
						<button
							key={id}
							type="button"
							onClick={() => setActive(id)}
							aria-pressed={pressed}
							className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
								pressed
									? 'border-accent bg-accent text-white'
									: 'border-border bg-surface-elevated text-ink-muted hover:border-accent/40 hover:text-accent'
							}`}
						>
							{label}
						</button>
					);
				})}
			</div>

			<ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
				{filtered.map((item) => (
					<li key={item.id}>
						<figure className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft">
							<div className="aspect-[4/5] w-full bg-accent-soft">
								<img
									src={item.image}
									alt={item.alt}
									width={800}
									height={1000}
									loading="lazy"
									decoding="async"
									className="h-full w-full object-cover"
								/>
							</div>
							<figcaption className="border-t border-border px-4 py-3">
								<span className="text-xs font-semibold uppercase tracking-wide text-accent">
									{categoryLabel(item.category)}
								</span>
								<p className="mt-1 font-semibold text-ink">{item.title}</p>
							</figcaption>
						</figure>
					</li>
				))}
			</ul>

			{filtered.length === 0 && (
				<p className="mt-8 text-center text-ink-muted" role="status">
					No hay trabajos en esta categoría.
				</p>
			)}
		</div>
	);
}

function categoryLabel(c: PortfolioCategory): string {
	const map: Record<PortfolioCategory, string> = {
		producto: 'Producto',
		lifestyle: 'Lifestyle',
		reels: 'Reels y corto',
		edicion: 'Edición',
	};
	return map[c];
}
