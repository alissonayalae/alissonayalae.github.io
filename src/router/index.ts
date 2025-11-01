import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import EXPOTech from '@/views/EXPOTech.vue'
import EXPOdelogros from '@/views/EXPOdelogros.vue'
import Hackathon from '@/views/Hackathon.vue'
import Jovenesconvoz from '@/views/Jovenesconvoz.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/expotech', component: EXPOTech },
  { path: '/expodelogros', component: EXPOdelogros },
  { path: '/jovenesconvoz', component: Jovenesconvoz },
  { path: '/hackathon', component: Hackathon },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' } // esto hace scroll al top al navegar
  }
})

export default router
