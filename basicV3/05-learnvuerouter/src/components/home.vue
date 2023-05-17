<template>
<div>
  <h2>我是首页</h2>

  <p>我是首页内容，哈哈哈</p>
  <router-link to="/home/message">信息</router-link>
  <router-link to="/home/news">新闻</router-link>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{
      }
    },
    created() {
      console.log('home created');
    },
    destroyed() {
      console.log('home destroyed');
    },
    //activated,beforeRouteLeave这两个函数只有在App.vue中使用了keep-alive的时候，才会生效
    activated() {
      this.$router.push(this.path)
    },
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path)
      this.path = this.$route.path;
      next()
    },
  }
</script>

<style scoped>

</style>
