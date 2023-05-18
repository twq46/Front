<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar";
export default {
  name: 'App',
  components:{MainTabBar},
  data(){
    return{
      //isActive : true
    }
  },


}
</script>

<style>
/*在样式里导入样式必须要加@符号*/
@import "assets/css/yangshi.css";

</style>
