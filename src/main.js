//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
//import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
//import VueCompositionApi from '@vue/composition-api';
import CounterApp from '@/views/CounterApp.vue'
import Page_404 from '@/views/Page_404.vue'


//    /:catchAll(.*)
//      /:pathMatch(.*)*



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'CounterApp',
        component: CounterApp,
        },
        {
        path: '/:catchAll(.*)',
        name: 'Page_404',
        component: Page_404,
        }
]
})


//.use(VueCompositionApi)
createApp(App).use(store).use(router).mount('#app')
