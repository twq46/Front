<template>
  <div id="app">
    <!--active-class给标签地址定义类型为twq,表示当点击该标签时，需要渲染的一个样式
    如果有很多标签都需要设置激活时的样式，在每一个标签里写active-class
    效率不高，可以在router目录的index文件中配置一个linkActiveClass的属性
    -->
    <!--tag就表示他是什么标签-->
    <!--如果router-link添加了replace就表示浏览器返回的箭头就不能点了-->
    <!--<router-link active-class="twq" to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->
    <!-- router-view放在下面就表示当点击首页或者关于的时候，显示在首页关于两个字的下方   -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <!--向用户界面传递参数-->
    <!--<router-link :to="'/user/' +userid">用户</router-link>-->
    <button @click="userClick">用户</button>
    <!--
    写法一：
    <router-link to="/profile">档案</router-link>-->
    <!--写法二：-->
    <!--query用于传递参数-->
    <!--<router-link :to="{path:'/profile',query:{name:'tbh',age:18,height:1.88}}">档案</router-link>-->
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     userid:'zhangshan'
    }
  },
  methods:{
    homeClick(){
      //通过代码的方式修改路由
      // this.$router.push('/home')
      //让浏览器的返回按钮失效
      this.$router.replace('/home')
    },

    aboutClick(){
      // this.$router.push('/about')
      //让浏览器的返回按钮失效
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.push('/user/' + this.userid)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:18,
          height:1.88,
        }
      })
    },
  }
}
</script>

<style>

.twq{
  color:red
}
</style>
