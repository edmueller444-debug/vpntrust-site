import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vpntrust.ru',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
