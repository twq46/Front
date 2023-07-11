import axios from "axios";

//写法三和写法二相同：
export function request(config){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000,
  })
  //2.axios的拦截器
  //2.1请求拦截
  instance.interceptors.request.use(config =>{

    //请求拦截的作用
        //1.比如config中的一些信息不符合服务器的要求,
        //需要对config中的内容进行一定的变化之后在返回给服务器

        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标(加载条)

        //3.某些网络请求（比如登录（token））,必须要携带一些特殊的信息

    return config//这里一定要返回，否则在instance内部发送真正请求的时候，就没有config
  },error => {
    console.log(error);
  })
  //2.2响应拦截
  instance.interceptors.response.use(res =>{

    return res.data
  },error => {
    console.log(error);
  })
  //3.发送真正的网络请求
  return  instance(config)
}
