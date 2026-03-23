import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vpn-russia.ru',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true
});
