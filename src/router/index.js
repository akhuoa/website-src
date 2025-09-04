import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('redirect') !== null) {
          const redirect = sessionStorage.redirect
          delete sessionStorage.redirect

          const basePath = import.meta.env.BASE_URL
          let redirectPath = redirect

          if (basePath !== '/' && redirectPath.startsWith(basePath)) {
            redirectPath = redirectPath.substring(basePath.length - 1)
          }

          next(redirectPath)
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
