/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SITE_URL: string;
	readonly VITE_FORMSPREE_ID: string;
	readonly VITE_WHATSAPP_NUMBER: string;
	readonly VITE_SCHEDULE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
