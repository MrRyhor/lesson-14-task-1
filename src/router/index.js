import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import FilterPage from "../views/FilterPage.vue"
import AddPage from "../views/AddPage.vue"

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsPage.vue'),
        children: [
            {
                path: 'selector',
                components: {
                    default: FilterPage,
                },
            },
            {
                path: 'editor',
                components: {
                    default: AddPage,
                },
            },
        ],
    },
    {
        path: '/supliers',
        name: 'supliers',
        component: () => import('../views/SupliersPage.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/ContactsPage.vue'),
    },
    {
        path: '/rules',
        name: 'rules',
        component: () => import('../views/RulesPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
