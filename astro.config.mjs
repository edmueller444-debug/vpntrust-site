import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vpntrust.ru',
  output: 'static',
  prefetch: true,
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
