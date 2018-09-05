import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [ {
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: resolve => require(['../view/index.vue'], resolve),
    name: '首页',
  }, {
    path: '/index',
    component: resolve => require(['../view/report/report-list.vue'],resolve),
    name: '报表列表',
  }, {
      path: '/report-detail',
      component: resolve => require(['../view/report/report-detail'], resolve),
      name: '报表详情',
    }]
});
  export default router
