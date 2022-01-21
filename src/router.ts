

import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
// import Login from './views/containers/login.vue';
import Index from './views/containers/index.vue';

Vue.use(Router);
window.axiosCancel = [];

export const routes: RouteConfig[] = [
  // {
  //   path: '/login',
  //   component: Login,
  //   meta: { login: true },
  // },
  {
    path: '',
    component: Index,
    children: [
      {
        path: '/',
        component: () => import('./views/containers/dashboard.vue'),
        meta: { icon: 'chart', title: 'dashboard', exact: true },
      },
      {
        path: 'topology',
        component: () => import('./views/containers/topology/topology.vue'),
        meta: { icon: 'issues', title: 'topology', exact: false },
      },
      {
        name: 'trace',
        path: 'trace',
        component: () => import('./views/containers/trace.vue'),
        props: true,
        meta: { icon: 'merge', title: 'trace', exact: false },
      },
      {
        path: 'profile',
        component: () => import('./views/containers/profile.vue'),
        meta: { icon: 'timeline', title: 'profile', exact: false },
      },
      {
        path: 'log',
        component: () => import('./views/containers/log.vue'),
        meta: { icon: 'assignment', title: 'log', exact: false },
      },
      {
        path: 'alarm',
        component: () => import('./views/containers/alarm.vue'),
        meta: { icon: 'spam', title: 'alarm', exact: false },
      },
      {
        path: 'event',
        component: () => import('./views/containers/event.vue'),
        meta: { icon: 'storage', title: 'event', exact: false },
      },
      {
        path: 'debug',
        component: () => import('./views/containers/debug.vue'),
        meta: { icon: 'library_books', title: 'debug', exact: false },
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('skywalking-authority');
  if (window.axiosCancel.length !== 0) {
    for (const func of window.axiosCancel) {
      setTimeout(func(), 0);
    }
    window.axiosCancel = [];
  }
  // if (to.meta.login && (token === null || token === 'guest')) {
  //   next();
  // } else if (token === null || token === 'guest') {
  //   next('/login');
  // } else if (to.meta.login) {
  //   next(from.path);
  // } else {
  //   next();
  // }
  next();
});

export default router;
