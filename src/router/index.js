import Vue from 'vue'
import Router from 'vue-router'

import { navConf } from './data'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
      //地址为空，跳转到登录页
      {
        path: '/',
        redirect: {name:'Main'},
      },
      {
        path: '/demo',
        component: () => import('@/views/demo')
      },
      ...navConf
    ],
  })

  export default router;