import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/open-source',
        name: 'OpenSource',
        component: () => import('../views/OpenSource.vue')
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('../views/Privacy.vue')
    },
    {
        path: '/ten-skills',
        name: 'TenSkills',
        component: () => import('../views/TenSkills.vue')
    },
    {
        path: '/timeline',
        name: 'Timeline',
        component: () => import('../views/Timeline.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 