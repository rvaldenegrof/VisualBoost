import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Debe coincidir con el subdirectorio de GitHub Pages (repo Project site)
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/https://github.com/rvaldenegrof/VisualBoost/',
});
