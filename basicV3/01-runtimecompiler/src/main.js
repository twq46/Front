// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  render:function (Twq){
    //1.普通写法：createElement('标签',{标签的属性}，[''])
    // return createElement('h2',
    //   {class:'box'},
    //   ['hello,world',createElement('button',['按钮'])],
    //   )
    //2.传入组件对象
    return Twq(App)
  }
})
//当创建项目选择run time compiler会经过以下过程
//template -> ast(抽象语法树) ->render -> Vdom -> UI
