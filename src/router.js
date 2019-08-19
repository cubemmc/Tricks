import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/cssProgress',
      name: 'cssProgress',
      component: () => import('@/views/css-module/css-progress')
    },
    {
      path: '/blockJump',
      name: 'blockJump',
      component: () => import('@/views/css-module/block-jump')
    },
    {
      path: '/cssLoading',
      name: 'cssLoading',
      component: () => import('@/views/css-module/css-loading')
    },
    {
      path: '/according',
      name: 'according',
      component: () => import('@/views/css-module/according')
    },
    {
      path: '/cssRotate',
      name: 'cssRotate',
      component: () => import('@/views/css-module/css-rotate')
    }
  ]
})
