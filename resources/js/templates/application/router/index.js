import { createWebHistory, createRouter } from 'vue-router';
import { ref } from 'vue';

const routes = [
    {
        path: '',
        name: 'Layout',
        component: () => import('@/js/layouts/Layout.vue'),
        redirect: { name: 'Dashboard' },
        meta: {
            mobile: ref(false),
        },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('../../../views/Home.vue'),
            },
            {
                path: 'settings',
                name: 'Settings',
                component: () => import('@/js/views/Settings.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
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
