
import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
// import Login from './views/containers/login.vue';
import Index from './views/containers/index.vue';

Vue.use(Router);
window.axiosCancel = [];
 /* eslint-disable */
  /* tslint:disable */
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
        path: 'home',
        component: () => import('./views/containers/home.vue'),
        meta: { icon: 'shouye', title: '首页', exact: false ,hidden:false},
      },
      {
        path: '/',
        component: () => import('./views/containers/dashboard.vue'),
        meta: { icon: 'dashboard', title: '服务监控', exact: true,hidden:false },
      },
      {
        path: 'database',
        component: () => import('./views/containers/database.vue'),
        meta: { icon: 'rizhi', title: '数据库监控', exact: false,hidden:false },
      }, 
     
      {
        path: 'topology',
        component: () => import('./views/containers/topology/topology.vue'),
        meta: { icon: 'Topology', title: '拓扑图', exact: false,hidden:false },
      },
      {
        name: 'trace',
        path: 'trace',
        component: () => import('./views/containers/trace.vue'),
        props: true,
        meta: { icon: 'dynatrace', title: '追踪', exact: false,hidden:false },
      },
      {
        path: 'profile',
        component: () => import('./views/containers/profile.vue'),
        meta: { icon: 'profile1', title: '性能剖析', exact: false,hidden:false },
      },
      {
        path: 'test',
        component: () => import('./views/containers/test.vue'),
        meta: { icon: 'profile1', title: 'test', exact: false,hidden:true },
      },
      // {
      //   path: 'log',
      //   component: () => import('./views/containers/log.vue'),
      //   meta: { icon: 'rizhi', title: 'Log', exact: false },
      // },
      // {
      //   path: 'alarm',
      //   component: () => import('./views/containers/alarm.vue'),
      //   meta: { icon: 'alarm1', title: 'Alarm', exact: false },
      // },
      // {
      //   path: 'event',
      //   component: () => import('./views/containers/event.vue'),
      //   meta: { icon: 'shijianevent3', title: 'Event', exact: false },
      // },
      // {
      //   path: 'debug',
      //   component: () => import('./views/containers/debug.vue'),
      //   meta: { icon: 'debug', title: 'Debug', exact: false },
      // },
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
