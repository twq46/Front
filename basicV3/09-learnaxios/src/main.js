import Vue from 'vue'
import App from './App'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios({
  url:'http://123.207.32.32:8000/home/multidata',
  //没有指定methods也就是get和post方法的话，默认使用get方式进行请求
  //专门针对get请求的参数拼接
  params:{
    type:'pop',
    page:1
  }
}).then(res =>{
  console.log(res);
})

//2.axios多个请求同时发送完成之后对数据进行统一的处理

//设置全局的baseURL
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000//5秒内没有请求到数据就会报超时的错误

// axios.all([axios({}),axios({})]).then()
axios.all([axios({
  //写法一：url写全部的链接地址
  // url:'http://123.207.32.32:8000/home/multidata',
  //写法二：使用baseURL + url的方式
  url:'/home/multidata'
}),axios({
  url:'/home/data',
  params:{
    type:'sell',
    page:4
  }
//当两个请求都完成之后就会来到then这里
})])
  //写法一：
  // .then(res=>{
  //   //打印的是一个数组，数组里有两个值(result[0],result[1])
  //   console.log(res);
  //   console.log(res[0]);
  //   console.log(res[1]);
  // })

  //写法二：
  .then(axios.spread((res1,res2)=>{
    console.log(res1);
    console.log(res2);
  }))

//3.创建对应的axios的实例
const instance1 = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})

instance1({
  url:'/home/multidata'
}).then(res =>{
  console.log('instance1的multidata',res);
})

instance1({
  url:'/home/data',
  params:{
    type:'pop',
    page:1
  },
}).then(res =>{
  console.log('instance1的data',res);
})

//4.封装request模块
import  {request} from "./network/request";
//法一：
// request({
//   url:'home/multidata'
// },res=>{
//   console.log('requestSuccessRes',res);
// },err=>{
//   console.log('requestErrRes',err);
// })

//法二：
request({
  url:'home/multidata'
}).then(res =>{
  console.log('request Res',res);
}).catch(err =>{
  console.log('request Err',err);
})


