<template>
<div>
  <h2>我是用户界面</h2>
  <p>我是用户的相关信息，哈哈</p>
  <h2>{{ userid }}</h2>
</div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userid(){
        //$route表示拿到当前活跃路由界面传递的参数
        //拿到传到当前界面的参数
        return this.$route.params.abc
      }
    }
  }
</script>

<style scoped>

</style>
