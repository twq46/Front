import Vue from 'vue'
import App from './App'
//当导入的是router目录，会自动去找对应的index文件，所以index也可以不写
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
