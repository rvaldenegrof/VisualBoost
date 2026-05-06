/** URLs y meta del sitio. Variables `VITE_*` en `.env` */

export const siteConfig = {
	name: 'VisualBoost',
	tagline: 'Contenido Estratégico para Ventas Digitales de Pymes',
	description:
		'Ayudamos a emprendedores y pymes a vender más con contenido visual estratégico: fotografía de producto, lifestyle, reels y edición para redes. Entregas en 48 a 72 horas y planes mensuales en pesos chilenos (CLP).',
	email: 'hola@visualboost.com',
	whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? '56912345678',
	scheduleUrl: import.meta.env.VITE_SCHEDULE_URL ?? 'https://calendly.com',
};

export function whatsappHref(text?: string): string {
	const base = `https://wa.me/${siteConfig.whatsappNumber}`;
	if (!text?.trim()) return base;
	const params = new URLSearchParams({ text: text });
	return `${base}?${params}`;
}

export function formspreeAction(): string | null {
	const id = import.meta.env.VITE_FORMSPREE_ID;
	return id ? `https://formspree.io/f/${id}` : null;
}
