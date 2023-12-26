import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '',
        name: 'Layout',
        component: () => import('@/layouts/Layout.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return savedPosition || { top: 0 };
    },
});

export default router;
