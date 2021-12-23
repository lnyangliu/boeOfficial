import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/home.vue'),
  },
  {
    path: '/solution',
    component: () => import('@/pages/solution.vue'),
  },
  {
    path: '/production',
    component: () => import('@/pages/production/index.vue'),
    children: [
      {
        path: '/detail',
        component: () => import('@/pages/production/detail.vue'),
      },
    ],
  },
  {
    path: '/case',
    component: () => import('@/pages/case.vue'),
  },
  {
    path: '/about',
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
