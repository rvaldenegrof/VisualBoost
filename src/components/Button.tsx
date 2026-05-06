import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const base =
	'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-offset-2';

const variants = {
	primary: 'bg-accent text-white shadow-soft hover:bg-accent-hover',
	secondary:
		'border border-border bg-surface-elevated text-ink hover:border-accent/40 hover:bg-accent-soft',
	ghost: 'text-accent hover:bg-accent-soft',
} as const;

type Props = {
	variant?: keyof typeof variants;
	to?: string;
	href?: string;
	className?: string;
	children: ReactNode;
};

export function Button({ variant = 'primary', to, href, className = '', children }: Props) {
	const c = `${base} ${variants[variant]} ${className}`;
	if (to) return <Link to={to} className={c}>{children}</Link>;
	if (href?.startsWith('http') || href?.startsWith('mailto:')) {
		return (
			<a href={href} className={c}>
				{children}
			</a>
		);
	}
	if (href) return <Link to={href} className={c}>{children}</Link>;
	return null;
}
