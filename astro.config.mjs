import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vpntrust.ru',
  integrations: [sitemap(), tailwind()],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
