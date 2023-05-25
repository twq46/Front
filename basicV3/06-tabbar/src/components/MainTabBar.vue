<template>
<div>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="@/assets/img/tabbar/1.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <!--因为我在build目录下的webpack.base.conf.js中配置了
      assets，因此这里可以使用快捷方式，但是由于不是import导入而是在html中
      所以assets前面需要加一个波浪号～这个符号
      -->
      <img slot="item-icon" src="~assets/img/tabbar/2.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/3.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img slot="item-icon" src="../assets/img/tabbar/4.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{TabBar,TabBarItem}
}
</script>

<style scoped>

</style>
