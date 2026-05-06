import type { ReactNode } from 'react';

type Props = {
	id?: string;
	eyebrow?: string;
	title: string;
	subtitle?: string;
	className?: string;
	children: ReactNode;
};

export function Section({ id, eyebrow, title, subtitle, className = '', children }: Props) {
	const headingId = id ? `${id}-heading` : undefined;

	return (
		<section
			id={id}
			className={`py-14 md:py-20 ${className}`}
			aria-labelledby={headingId}
		>
			<div className="mx-auto max-w-6xl px-4 md:px-6">
				{eyebrow && (
					<p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
				)}
				<h2 id={headingId} className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
					{title}
				</h2>
				{subtitle && <p className="mt-3 max-w-2xl text-lg text-ink-muted">{subtitle}</p>}
				<div className="mt-10">{children}</div>
			</div>
		</section>
	);
}
