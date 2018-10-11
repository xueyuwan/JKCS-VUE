import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import userCenter from '../pages/userCenter.vue'
import login from '../pages/login.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/login',
      name: 'login',
      component: login
    }

  ]
})
