import router from '@/router'
import { getToken } from '@/utils/auth' // getToken from cookie

const whiteList = ['/auth/login', '/authredirect']// no redirect whitelist

router.beforeEach((to, from, next) => {
  if (getToken()) { // determine if there has token
    /* has token*/
    if (to.path === '/auth/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/auth/login')
    }
  }
})
