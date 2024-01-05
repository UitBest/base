import { createWebHistory, createRouter } from 'vue-router';
import { ref } from 'vue';

const routes = [
    {
        path: '',
        name: 'Layout',
        component: () => import('@/layouts/Layout.vue'),
        redirect: { name: 'Home' },
        meta: {
            mobile: ref(false),
        },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/Home.vue'),
            },
        ],
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
