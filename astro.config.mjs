import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vpn-russia.ru',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true,
  server: {
    port: 4321,
    host: true
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});
