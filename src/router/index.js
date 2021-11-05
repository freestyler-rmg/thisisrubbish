import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: { name: 'FantasyZone' }
  },
  {
    path: '/火',
    alias: '/%E7%81%AB',
    name: 'FantasyZone',
    component: () => import('@/views/FantasyZone.vue')
  },
  {
    path: '/水',
    alias: '/%E6%B0%B4',
    name: 'Revolver',
    component: () => import('@/views/Revolver.vue')
  },
  {
    path: '/木',
    alias: '/%E6%9C%A8',
    name: 'BoxOptic',
    component: () => import('@/views/BoxOptic.vue')
  },
  {
    path: '/金',
    alias: '/%E9%87%91',
    name: 'Lost',
    component: () => import('@/views/NotYet.vue')
  },
  {
    path: '/土',
    alias: '/%E5%9C%9F',
    name: 'ScrollingGradient',
    component: () => import('@/views/ScrollingGradient.vue')
  },
  {
    // 日
    path: '/日',
    alias: '/%E6%97%A5',
    name: 'Sinusoidal',
    component: () => import('@/views/NotYet.vue')
  },
  {
    // 月
    path: '/月',
    alias: '/%E6%9C%88',
    name: 'Lichtenberg',
    component: () => import('@/views/NotYet.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
