import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA = {
  state:{
    name :'moduleAName',
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
    fullname(state){
      return state.name + '11111'
    },
    //在上方fullname的基础上继续拼接fullname
    fullName2(state,getters){
      return getters.fullname + '22222'
    },
    //在上方fullName2的基础上继续拼接store中的counter
    fullName3(state,getters,rootState){
      return getters.fullName2 + rootState.counter
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','wangwu')
      },1000)
    }
  },

  modules:{},
}

const store = new Vuex.Store({
  state:{
    counter:4600,
    student:[
      {id:110,name:'why',age:18},
      {id:111,name:'kobe',age:24},
      {id:112,name:'james',age:30},
      {id:113,name:'curry',age:10},
    ]
  },
  mutations:{
    //修改state中的值就可以通过在mutations中定义的方法进行修改
    //方法
    increment(state){
      state.counter ++
    },
    decrement(state){
      state.counter --
    },
    incrementCount(state,count){
      state.counter += count
    },
    addStudent(state,stu){
      state.student.push(stu)
    }
  },
  actions:{

  },
  getters:{//类似于之前的compute,就是当别人
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.student.filter(s => s.age > 20)
    },
    more20stuLength(state,getters){
      //获取年龄大于20的人的个数
      return getters.more20stu.length
    },
    //获取年龄大于age的人，age是一个变量，由调用者传入
    moreAgestu(state){
      return function (age){
        return state.student.filter(s => s.age > age)
      }
    }
  },
  modules:{
    //a会被自动保存到state中
    a:moduleA,
  },
})

//3.导出store独享
export default store
