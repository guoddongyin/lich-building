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

  }
      , {
          path: '/startpage',
          component: resolve => require(['../view/public/startPage.vue'], resolve),
          name: '登录',

      },{
    path: '/information',
    component: resolve => require(['../view/personal/information.vue'], resolve),
    name: '个人信息',
  },{
      path: '/report-detail',
      component: resolve => require(['../view/report/report-detail'], resolve),
      name: '报表详情',
    },{
      path: '/integralprop',
      component: resolve => require(['../view/integral/integralprop.vue'], resolve),
      name: '积分比例',
    },{
      path: '/integral-detail',
      component: resolve => require(['../view/integral/integral-detail.vue'], resolve),
      name: '积分详情',
    },{
    path: '/reportlist',
    component: resolve => require(['../view/report/report-list.vue'], resolve),
    name: '下单报表',
  },{
    path: '/brandprop',
    component: resolve => require(['../view/brandprop/brandprop.vue'], resolve),
    name: '绑定会员卡',
  },{
    path: '/bindcard',
    component: resolve => require(['../view/enroll/bindcard.vue'], resolve),
    name: '绑定会员卡',
  },{
    path: '/registercard',
    component: resolve => require(['../view/enroll/registercard.vue'], resolve),
    name: '绑定会员卡',
  },{
    path: '/coupon',
    component: resolve => require(['../view/coupon/coupon.vue'], resolve),
    name: '我的优惠券',
  }]
});
  export default router
