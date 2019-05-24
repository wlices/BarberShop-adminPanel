import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import AppLayout from '../components/admin/AppLayout'
import AuthLayout from '../components/auth/AuthLayout'

/* Views */
import Login from '@/components/auth/login/Login'
import AuthRedirect from '@/components/auth/login/authredirect'

import Dashboard from '@/components/dashboard/Dashboard'

import Services from '@/components/services/Services'
import CreateService from '@/components/services/CreateService'
import UpdateService from '@/components/services/UpdateService'

// import Reports from '@/components/services/Reports'

/* Pages */
import Page404 from '@/components/errorPage/404'

export const constantRouterMap = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: Login
      },
      {
        path: '',
        redirect: { name: 'login' }
      }
    ]
  },
  {
    path: '/authredirect',
    component: AuthRedirect
  },
  {
    path: '/404',
    component: Page404
  },
  {
    path: '',
    component: AppLayout,
    redirect: 'dashboard',
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: Dashboard,
        default: true
      },
      {
        name: 'services',
        path: 'services',
        component: Services,
        default: true
      },
      // {
        // name: 'reports',
        // path: 'reports',
        // component: Reports,
        // default: true
      // },
      {
        name: 'create-service',
        path: 'services/create',
        component: CreateService,
        default: true
      },
      {
        name: 'update-service',
        path: 'services/update/:id',
        component: UpdateService,
        default: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
