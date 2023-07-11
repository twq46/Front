<template>
  <div class="goods">
    <GoodsListItem v-for="item in goodsList" :good-item="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";
  export default {
    name: "GoodsList",
    props:{
      goodsList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodsListItem,
    }
  }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  /*均等分*/
  justify-content: space-around;
}

</style>
