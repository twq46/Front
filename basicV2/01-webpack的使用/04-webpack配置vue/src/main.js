//导入方式一
import * as twq from './js/mathUtils.js'

import {age,height} from './js/info'
console.log(twq.sum(10, 20));

console.log(twq.mutil(20, 30));

console.log(age);
console.log(height);

//依赖css文件
//如果只使用webpack，将无法对css文件进行一个打包，这时需要使用合适的loader进行打包
//在webpack官网中，https://webpack.js.org/
require('./css/normal.css')
require('./css/special.less')
document.writeln('<h2>你好哇，Twq</h2>')

//使用vue进行开发
import Vue from 'vue'
new Vue({
  el:'#app',
  template:`<div>
  {{message}}
  </div>`,
  data:{
    message:"我是Vue",
  }
})
