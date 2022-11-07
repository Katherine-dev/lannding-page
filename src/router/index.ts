import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

  {
    path: '#main',
    name: 'Main',
    component: () => import('@/views/Header/index.vue'),
  },
  {
    path: '#services',
    name: 'Services',
    component: () => import('@/views/Services/index.vue'),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return null;
  },
});

export default router;
