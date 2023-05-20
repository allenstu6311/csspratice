import { createRouter, createWebHistory } from "vue-router";
import Homeview from '@/view/Homeview.vue'
import About from '@/view/About.vue'



export const routes =  [
    { path: '/', name: "home", component: Homeview },
    { path: '/About', name: "about", component: About },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

