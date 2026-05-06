import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { faqItems } from '../content/faq';

export function FaqPage() {
	return (
		<>
			<SEO
				title="Preguntas frecuentes"
				description="Respuestas sobre plazos, planes VisualBoost, formatos de entrega, revisiones y más."
			/>
			<div className="border-b border-border bg-surface-elevated py-12 md:py-16">
				<div className="mx-auto max-w-3xl px-4 md:px-6">
					<h1 className="text-4xl font-bold tracking-tight text-ink">Preguntas frecuentes</h1>
					<p className="mt-4 text-lg text-ink-muted">
						Si no encuentras lo que buscas, escríbenos por el formulario o por WhatsApp.
					</p>
				</div>
			</div>

			<div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
				<div className="divide-y divide-border rounded-2xl border border-border bg-surface-elevated">
					{faqItems.map((item, i) => (
						<details key={item.question} className="group p-6" name="faq">
							<summary className="cursor-pointer list-none text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
								<span className="flex items-start justify-between gap-4">
									{item.question}
									<svg
										className="mt-1 h-5 w-5 shrink-0 text-accent transition group-open:rotate-180"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
									</svg>
								</span>
							</summary>
							<p id={`faq-a-${i}`} className="mt-4 text-ink-muted">
								{item.answer}
							</p>
						</details>
					))}
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
