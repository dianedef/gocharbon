import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import vue from '@astrojs/vue';
import UnoCSS from '@unocss/astro';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';
import { shouldIncludeInSitemap } from './src/utils/indexation.ts';
import { createParcoursLaunchBuildIntegration } from './src/utils/launch-build.ts';
import { remarkInternalLinks } from './src/utils/remark-internal-links.ts';

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
        sitemap({
            filter: shouldIncludeInSitemap
        }),
        createParcoursLaunchBuildIntegration()
    ],
    site: SITE.url,
    trailingSlash: 'never',
    markdown: {
        remarkPlugins: [remarkInternalLinks],
    },
    build: {
        format: 'directory',
        inlineStylesheets: 'auto'
    },
    output: 'static',
    vite: {
        resolve: {
            alias: {
                '@diane-winflowz/gamification': fileURLToPath(
                    new URL('./node_modules/@diane-winflowz/gamification/src/index.ts', import.meta.url)
                ),
            },
        },
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
