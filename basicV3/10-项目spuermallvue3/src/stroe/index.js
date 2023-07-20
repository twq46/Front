import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },

  //mutations唯一的目的就是修改state中的状态
  //mutations中的每个方法尽可能完成的事件比较单一一点
  //而下面注释的addCart则做了两件事(也不是不可以)，因此可以放到actions中处理
  mutations:{
    /*addCart(state,payload){
      //将传入的products对象传入到数组中
      //1.查找之前的数组中是否含有该商品
      let oldproduct = null;
      for (let item of state.cartList){
        if(item.iid === payload.iid)
          oldproduct = item;
      }
      //新商品在数组中存在
      if(oldproduct){
        oldproduct.count += 1
      }else{
        //新商品在数组中不存在，则该商品的个数为1，且将新商品加入数组中
        payload.count = 1
        state.cartList.push(payload)
      }
    }*/
    addCounter(state,payload){
      payload.count += 1
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  actions:{
    addCart(context,payload){
      return new Promise((resolve,reject) =>{
        //将传入的products对象传入到数组中
        //1.查找之前的数组中是否含有该商品
        let oldproduct = null;
        for (let item of context.state.cartList){
          if(item.iid === payload.iid)
            oldproduct = item;
        }
        //新商品在数组中存在
        if(oldproduct){
          context.commit('addCounter',oldproduct)
          resolve('当前商品数量+1')
        }else{
          //新商品在数组中不存在，则该商品的个数为1，且将新商品加入数组中
          payload.count = 1
          payload.checked = true;
          context.commit('addToCart',payload)
          resolve('当前商品添加成功')
        }
      })
    }
  },
  getters,
})

//3.挂载Vue实例上
export default store
