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
      name: '订单详情',
    },{
      path: '/integralprop',
      component: resolve => require(['../view/integral/integralprop.vue'], resolve),
      name: '积分比例指导',
    },{
      path: '/integral-detail',
      component: resolve => require(['../view/integral/integral-detail.vue'], resolve),
      name: '积分详情',
    },{
    path: '/reportlist',
    component: resolve => require(['../view/report/report-list.vue'], resolve),
    name: '我的订单',
  }, {
      path: '/daichuhuo',
      component: resolve => require(['../view/report/daichuhuo-list'], resolve),
      name: '待出货',
    }
    ,{
      path: '/daifukuan',
      component: resolve => require(['../view/report/daifukuan-list.vue'], resolve),
      name: '待付款',
    },{
    path: '/brandprop',
    component: resolve => require(['../view/brandprop/brandprop.vue'], resolve),
    name: 'TOP5品牌占比',
  },{
    path: '/bindcard',
    component: resolve => require(['../view/enroll/bindcard.vue'], resolve),
    name: '绑定会员卡',
  },{
    path: '/registercard',
    component: resolve => require(['../view/enroll/registercard.vue'], resolve),
    name: '注册会员',
  },{
    path: '/coupon',
    component: resolve => require(['../view/coupon/coupon.vue'], resolve),
    name: '我的优惠券',
  },{
      path: '/memberinfo',
      component: resolve => require(['../view/personal/memberinfo.vue'], resolve),
      name: '会员信息',
    },{
    path: '/nomessage',
    component: resolve => require(['../view/public/nomessage.vue'], resolve),
    name: '无数据信息',
  },{
      path: '/articlelist',
      component: resolve => require(['../view/article/articlelist.vue'], resolve),
      name: '文章列表',
    },{
      path: '/articledel',
      component: resolve => require(['../view/article/articledel.vue'], resolve),
      name: '文章详情',
    },{
      path: '/luckydraw',
      component: resolve => require(['../view/luckydraw/luckydraw.vue'], resolve),
      name: '幸运大抽奖',
    }]
});
  export default router
