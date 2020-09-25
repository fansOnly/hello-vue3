import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '../pages/index/Index.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "page" */ '../pages/user/Index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
