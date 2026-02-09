import { createRouter, createWebHistory } from 'vue-router'
import indexPage from './views/indexPage.vue'

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexPage
    }
  ]
})

export default router
