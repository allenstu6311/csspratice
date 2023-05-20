import { createRouter, createWebHistory } from "vue-router";
import page1 from '@/view/page1.vue'
import page2 from '@/view/page2.vue'



export const routes =  [
    { path: '/', name: "home", component: page1 },
    { path: '/page2', name: "page2", component: page2 },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

