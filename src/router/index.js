import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(), // hash模式
  // history: createWebHashHistory(), // history模式
  routes: [
    {
      path: '/',
      component: () => import('@/views/welcome.vue'),
    },
    {
      path: '/counter',
      component: () => import('@/views/counter.vue'),
    },
    {
      path: '/charts',
      component: () => import('@/views/charts.vue'),
    },
    {
      path: '/fabric',
      component: () => import('@/views/vue-fabric.vue'),
    },
  ],
});

export default router;
