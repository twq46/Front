import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = ()=> import('views/home/home')
const category = ()=> import('views/category/components/category')
const cart = ()=> import('views/cart/components/cart')
const profile = ()=> import('views/profile/components/profile')
const detail = ()=> import('views/detail/Detail')
//2.创建router
const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/category',
    component:category,
  },
  {
    path:'/cart',
    component:cart,
  },
  {
    path:'/profile',
    component:profile,
  },
  {
    path:'/detail/:iid',
    component:detail,
  },
]
const router = new Router({
  routes,
  mode:'history'
})
export default router
