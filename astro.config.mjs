import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://5senscollection.com',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  compressHTML: true
});
