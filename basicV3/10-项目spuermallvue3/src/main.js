import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./stroe";

import FastClick from 'fastclick'

import VueLazyload from "vue-lazyload";

import toast from "components/common/toast"
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//安装toast插件，default导出的是obj,这里导入的时候可以重新命名
//而且一旦调用了use方法，那么就会调用toast中的install
Vue.use(toast)

//解决移动段300ms延迟
FastClick.attach(document.body)

//图片懒加载的插件
Vue.use(VueLazyload,{
  loading:  require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
