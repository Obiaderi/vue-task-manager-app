import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import NotFound from '../views/NotFound.vue'
import GuestLayout from '../components/GuestLayout.vue'
import AuthenticatedLayout from '../components/AuthenticatedLayout.vue'
import { useAuthentication } from '../use/useAuthentication'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: AuthenticatedLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('../views/CategoryView.vue')
      }
    ]
  },
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: GuestLayout,
    meta: { isGuest: true },
    children: [
      {
        path: '/login',
        component: () => import('../views/auth/LoginView.vue')
      },
      {
        path: '/register',
        component: () => import('../views/auth/RegisterView.vue')
      }
    ]
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  }

  // {
  //   path: '/',
  //   name: 'home',
  //   component: DashboardView
  // },
  // {
  //   path: '/category',
  //   name: 'category',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/CategoryView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuthentication()
  if (to.meta.requiresAuth && !store.user.token) {
    next('/login')
    return
  } else if (to.meta.isGuest && store.user.token) {
    next('/dashboard')
    return
  } else {
    next()
    return
  }
})

export default router
