import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Resume from './views/Resume.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/resume', component: Resume },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return { top: 0 };
    },
});

export default router;
