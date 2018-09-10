import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';
import Lock from '@/components/lock/Lock';
import Login from '@/components/login/';

import IndexDashboard from '@/components/index/Dashboard/';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/index/dashboard',
    component: Index,
    children: [{
      path: '/index/dashboard',
      name: '首页',
      component: IndexDashboard,
      meta: { getName: false }
    }]
  },
  {
    path: '/lock',
    name: 'lock',
    component: Lock
  },
  {
    path: '*',
    redirect: '/Login'
  }]
});
