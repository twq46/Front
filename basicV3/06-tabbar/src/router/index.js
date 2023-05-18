import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home = ()=> import('../views/home/components/home')
const category = ()=> import('../views/category/components/category')
const cart = ()=> import('../views/cart/components/cart')
const profile = ()=> import('../views/profile/components/profile')
export default new Router({
  routes: [
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
  ],
})
