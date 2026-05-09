import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rvaldenegrof.github.io',
  base: '/VisualBoost/',
  integrations: [
    react(),
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ['framer-motion']
    }
  },
  output: 'static',
});
