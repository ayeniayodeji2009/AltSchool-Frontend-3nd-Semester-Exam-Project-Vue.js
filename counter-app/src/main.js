import { createApp } from 'vue'
import App from './App.vue'
//import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import CounterApp from '@/views/CounterApp.vue'
import Page_404 from '@/views/Page_404.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/counter',
        name: 'CounterApp',
        component: CounterApp,
        },
        {
        path: '/:pathMatch(.*)*',
        name: 'Page_404',
        component: Page_404,
        }
]
})



createApp(App).use(router).mount('#app')
