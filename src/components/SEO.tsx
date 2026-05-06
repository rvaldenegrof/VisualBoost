import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';

type Props = {
	title: string;
	description?: string;
	ogImage?: string;
	noIndex?: boolean;
};

export function SEO({ title, description = siteConfig.description, ogImage = 'og-default.svg', noIndex = false }: Props) {
	const { pathname } = useLocation();
	const siteBase = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ?? '';
	const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

	const fromWindow =
		typeof window !== 'undefined'
			? `${window.location.origin}${import.meta.env.BASE_URL.replace(/\/$/, '')}${pathname === '/' ? '' : pathname}`
			: '';
	const canonical = siteBase ? `${siteBase}${pathname === '/' ? '' : pathname}` : fromWindow;

	const ogImageUrl =
		siteBase !== ''
			? `${siteBase}/${ogImage.replace(/^\//, '')}`
			: typeof window !== 'undefined'
				? new URL(ogImage, window.location.origin + import.meta.env.BASE_URL).href
				: ogImage;

	return (
		<Helmet htmlAttributes={{ lang: 'es-CL' }}>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{noIndex && <meta name="robots" content="noindex, nofollow" />}
			{canonical ? <link rel="canonical" href={canonical} /> : null}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			{canonical ? <meta property="og:url" content={canonical} /> : null}
			<meta property="og:image" content={ogImageUrl} />
			<meta property="og:locale" content="es_CL" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImageUrl} />
			<link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
		</Helmet>
	);
}
