import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/form.vue'),
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../pages/preview.vue'),
    },
  ],
})

export default router
