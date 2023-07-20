<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <Scroll class="content" ref="scroll">
      <CartList></CartList>
    </Scroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";

  import CartList from "@/views/cart/components/childComps/CartList";
  import CartBottomBar from "@/views/cart/components/childComps/CartBottomBar";

  import {mapGetters} from 'vuex';
  export default {
    name: "cart",
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar,
    },
    computed:{
      //将getters.js文件中封装好的属性直接作为这里的计算属性，
      // 这时需要使用mapGetters
      /*这两种写法都可以，但是不好
      cartLength(){
        return this.$store.state.cartList.length
      }
      cartLength(){
        return this.$store.getters.cartLength
      }*/
      //使用mapGetters，直接使用getters.js文件中封装好的属性
      //...mapGetters(['cartLength','cartList'])//搞一个数组指明将getters.js文件中哪几个属性转化为计算属性
      //如果上面使用的名字和getters.js文件中封装好的属性名字不一样
      //下面的key用引号引起来也可以
      ...mapGetters({
        'length':"cartLength",
        'list':'cartList'
      })
    },
    //因为每次添加商品，会更改可滚动取悦的高度，
    // 所以当cart组件处于激活状态时刷新一下高度
    activated() {
      this.$refs.scroll.refresh();
    }
}
</script>

<style scoped>
.cart{
  height: 100vh;

}
.nav-bar{
  position: relative;
  background-color: var(--color-tint);
  color: white;
}
.content{
  height: calc(100% - 44px - 49px - 25px);
  overflow: hidden;
}
</style>
