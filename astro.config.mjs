// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { DEFAULT_LANG } from './src/i18n/index.ts';

export default defineConfig({
  site: 'https://sadhanabyandre.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LANG,
        locales: {
          es: 'es-CO',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: DEFAULT_LANG,
    routing: {
      prefixDefaultLocale: false,
    },
  },

});
