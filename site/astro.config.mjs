import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import UnoCSS from '@unocss/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    server: {
        port: parseInt(process.env.PORT || "3014", 10)
    },
    integrations: [
        vue({
            jsx: true,
            appEntrypoint: '/src/_app'
        }),
        UnoCSS({
            injectReset: true,
            mode: 'global'
        }),
        sitemap()
    ],
    site: 'https://gocharbon.com',
    trailingSlash: 'never',
    build: {
        format: 'directory',
        inlineStylesheets: 'auto'
    },
    output: 'static',
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
        },
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: undefined
                }
            }
        }
    }
}); 
