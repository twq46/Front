//配置路由相关的信息
import VueRouter from "vue-router";
//@/表示src目录
// import home from "@/components/home";
// import about from "../components/about";
// import user from "../components/User"
//使用下面懒加载的方式在项目打包的时候，
// 除了原本的
// app(当前应用程序开发的所有代码会打包在这里),
// mainfest(为打包的代码做底层支撑的，能使得文件的导入导出是有效的),
// vendor（项目中应用的第三方的东西(如vue,vue-router,axios),在打包的时候都会打包到这个文件里）
//然后组件里有多少文件，打包之后的dist目录中js里就会多出几个文件，序号从0开始，比如下面懒加载里三个文件
//dist目录下的js文件中就会多出三个文件
const home = () => import('@/components/home')
const about = () => import('../components/about')
const user = () => import('../components/User')
import Vue from "vue"
//1.要通过Vue.use（插件），安装插件
Vue.use(VueRouter)

const Message = () => import('../components/homeMessage')
const News = () => import('../components/homeNews')
const profilet = ()=> import('../components/Profile')
//2.创建VueRouter对象
const routes = [
  //默认显示首页内容
  {
    path:'',
    redirect:'/home'
  },
  {
    //这里得有/
    path:'/home',
    component:home,
    children:[
      //默认显示
      {
        path:'',
        redirect:'message'
      },
      //这里path不能加/
      {
        path:'message',
        component:Message,
      },
      {
        path:'news',
        component:News,
      },
    ],
    meta:{
      title:'首页'
    }
  },
  {
    path:'/about',
    component:about,
    meta:{
      title:'关于'
    }
  },
  {
    //这个：必须得写
    path:'/user/:abc',
    component: user,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:profilet,
    meta:{
      title:'档案'
    }
  },

]
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes,
  //这里可以让路径不再以哈希的方式显示，而是正常的显示路径
  mode:"history",
  linkActiveClass:"twq"
})

//前置守卫（guard）
//从一个界面跳转到另一个界面的时候修改标题title
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})

//后置钩子(hook)
router.afterEach((to,from)=>{

})


//3.将router对象传入到Vue实例中
export default router
