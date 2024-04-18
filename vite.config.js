import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        host: true,
        port: '83',
        https: process.env.NODE_ENV === 'production',
    },
    resolve: {
        alias: {
            '@': '/resources',
        },
    },
    plugins: [
        laravel(['resources/css/app.css', 'resources/js/app.js']),
        vue(),
    ],
});
