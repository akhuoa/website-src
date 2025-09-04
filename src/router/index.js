import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('redirect') !== null) {
          const redirect = sessionStorage.redirect
          delete sessionStorage.redirect
          next(redirect)
        } else {
          next()
        }
      }
    },
    {
      path: '/documentation/api/:pageName?',
      name: 'documentation',
      component: () => import('../views/APIDocumentationView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
