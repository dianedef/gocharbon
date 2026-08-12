import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import UnoCSS from '@unocss/astro';

export default defineConfig({
    integrations: [
        vue({
            jsx: true,
            appEntrypoint: '/src/_app'
        }),
        UnoCSS({
            injectReset: true,
            mode: 'global'
        })
    ],
    site: 'https://webinde.fr',
    trailingSlash: 'never',
    build: {
        format: 'directory'
    },
    vite: {
        server: {
            host: '0.0.0.0',
            strictPort: false,
            allowedHosts: ['.nip.io', '.dianedefores.fr']
        },
        ssr: {
            noExternal: ['@unocss/astro']
        },
        optimizeDeps: {
            include: ['vue']
        }
    }
}); 