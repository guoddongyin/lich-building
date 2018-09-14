// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入mintUI
import MintUI from 'mint-ui'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'
import {post,fetch,patch,put} from './api/http'

Vue.use(MintUI)
Vue.use(VueWechatTitle);

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
