import { createRouter, createWebHistory } from 'vue-router'
import homeView from '@/views/homeView.vue'
import serviçosView from '@/views/serviçosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/serviços',
      name: 'serviços',
      component: serviçosView
    }
  ],
})

export default router
