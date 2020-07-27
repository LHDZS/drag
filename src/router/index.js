import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import yanshi from '@/pages/yanshi/index'
import yanshi1 from '@/pages/yanshi/index1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: Home
    },{
      path: '/yanshi',
      name: 'yanshi',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: yanshi

    },{
      path: '/yanshi1',
      name: 'yanshi1',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: yanshi1

    }
  ]
})
