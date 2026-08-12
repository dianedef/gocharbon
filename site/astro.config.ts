import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

import vue from '@astrojs/vue';

export default defineConfig({
  server: {
    port: parseInt(process.env.PORT) || 3000
  },
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://webinde.fr/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true }), vue()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});