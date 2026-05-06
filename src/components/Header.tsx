import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
	{ to: '/', label: 'Inicio' },
	{ to: '/quienes-somos', label: 'Quiénes somos' },
	{ to: '/servicios', label: 'Servicios' },
	{ to: '/trabajos', label: 'Trabajos' },
	{ to: '/planes', label: 'Planes' },
	{ to: '/faq', label: 'FAQ' },
	{ to: '/contacto', label: 'Contacto' },
] as const;

function isActive(pathname: string, href: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname.startsWith(href);
}

export function Header() {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-border bg-surface-elevated/95 backdrop-blur supports-[backdrop-filter]:bg-surface-elevated/80">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
				<Link to="/" className="group flex items-center gap-2 rounded-md focus-visible:outline-offset-4">
					<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
						VB
					</span>
					<span className="font-semibold text-ink transition-colors group-hover:text-accent">VisualBoost</span>
				</Link>

				<nav aria-label="Principal" className="hidden md:block">
					<ul className="flex flex-wrap items-center gap-1 lg:gap-2">
						{links.map(({ to, label }) => (
							<li key={to}>
								<Link
									to={to}
									className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
										isActive(pathname, to)
											? 'bg-accent-soft text-accent'
											: 'text-ink-muted hover:bg-accent-soft/60 hover:text-accent'
									}`}
									aria-current={isActive(pathname, to) ? 'page' : undefined}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link
					to="/contacto"
					className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-accent-hover md:inline-flex"
				>
					Solicitar cotización
				</Link>

				<div className="relative md:hidden">
					<button
						type="button"
						className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink"
						aria-expanded={open}
						aria-controls="mobile-nav"
						onClick={() => setOpen(!open)}
					>
						Menú
						<svg
							className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`}
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{open && (
						<div
							id="mobile-nav"
							className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,18rem)] rounded-xl border border-border bg-surface-elevated p-2 shadow-soft"
						>
							<ul className="flex flex-col gap-1">
								{links.map(({ to, label }) => (
									<li key={to}>
										<Link
											to={to}
											className={`block rounded-lg px-3 py-2 text-sm font-medium ${
												isActive(pathname, to)
													? 'bg-accent-soft text-accent'
													: 'text-ink-muted hover:bg-accent-soft/60'
											}`}
											aria-current={isActive(pathname, to) ? 'page' : undefined}
											onClick={() => setOpen(false)}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
							<Link
								to="/contacto"
								className="mt-2 flex w-full justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white"
								onClick={() => setOpen(false)}
							>
								Solicitar cotización
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
