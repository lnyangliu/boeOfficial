import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/solution',
    name: 'solution',
    component: () => import('@/pages/solution.vue'),
  },
  {
    path: '/production/:pro',
    name: 'production',
    component: () => import('@/pages/production/index.vue'),
    // props: true
  },
  {
    path: '/case',
    name: 'case',
    component: () => import('@/pages/case.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.afterEach((to, from, next) => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

export default router
