import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
    server: {
        host: true,
        port: 83,
        https: process.env.NODE_ENV === 'production',
        hmr: {
            host: process.env.HMR_HOST || 'localhost',
        },
        warmup: {
            clientFiles: ['resources/js/layouts/layout.vue'],
        },
    },
    resolve: {
        alias: {
            '@': '/resources',
        },
    },
    plugins: [laravel(['resources/css/app.css', 'resources/js/app.js']), vue(), vuetify()],
});
