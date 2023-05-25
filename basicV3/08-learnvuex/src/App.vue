<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>---------App内容:modules中的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="ansycUpateName">异步修改名字</button>

    <h2>---------App内容----------</h2>
    <span>{{$store.state.counter}}</span><br>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="additionCount(5)">+5</button>
    <button @click="additionCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>


    <h2>----------app内容：getters相关信息</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.moreAgestu(12)}}</h2>
    <h2>---------hello-vuex的内容----------</h2>
    <hello-vuex ></hello-vuex>
  </div>
</template>

<script>
import helloVuex from "./components/helloVuex";
export default {
  name: 'App',
  data(){
    return{
      message:'asf',
    }
  },
  components:{
    helloVuex
  },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    additionCount(count){
      this.$store.commit('incrementCount',count)
    },
    addStudent(){
      const stu = {id:114,name:'tbh',age:40}
      this.$store.commit('addStudent',stu)
    },
    updateName(){
      this.$store.commit('updateName','twq12')
    },
    ansycUpateName(){
      this.$store.dispatch('aUpdateName')
    }
  }

}
</script>

<style>

</style>
