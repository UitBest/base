import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        host: 'localhost',
        port: '83',
        https: process.env.NODE_ENV === 'production',
    },
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    plugins: [
        laravel(['resources/css/app.css', 'resources/js/app.js']),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
