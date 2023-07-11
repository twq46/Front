<template>
  <div id="app">
    <!--
     include="home" 保留home界面的缓存
     exclude="detail" 不保留detail界面的缓存
     这里的home,detail，与其组件中name属性对应-->
    <!--详情界面不需要保存缓存状态    -->
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>

</template>

<script>

import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
