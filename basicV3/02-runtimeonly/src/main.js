import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render:function (h){
    return h(App)
  }
  //简写
  // render: h => h(App)
})

//创建项目的时候选择runTimeOnly是不用经过template到ast这一阶段
//那么.vue 文件中的template是由谁处理的？
//答：template是由vue-template-compiler给转成了render函数

//render-> vdom(虚拟dom) -> UI
