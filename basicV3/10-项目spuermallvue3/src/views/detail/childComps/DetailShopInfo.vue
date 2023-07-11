<template>
  <div class="shop-info">
    <!--商家logo及店铺名-->
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <!--    -->
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">

        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells}}
          </div>
          <div class="sells-text">总销量</div>
        </div>

        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>

      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{scorebetter:item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{bettermore:item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:Object
    },
  }
</script>

<style scoped>
.shop-info{
  border-bottom: 5px solid #f2f5f8;
}
.shop-top{
  line-height: 60px;
}
.shop-top img{
  margin-left: 16px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.shop-top span{
  margin-left: 10px;
}
.shop-top span,img{
  vertical-align: middle;
}
.title{
  font-size: 7px;
}
.shop-middle{
  display: flex;
}
.shop-middle-item{
  flex: 1;
}
.shop-middle-left{
  display: flex;
  margin-top:10px ;
  margin-left: 20px;
}

.sells-count,.goods-count{
  margin-bottom: 5px;
}
.info-goods{
  margin-left:10px;
}
.score{
  font-size: 8px;
  padding-left:5px;
  color:rgb(116, 142, 100);
}
.better{
  font-size: 8px;
  color:white;
  margin-left:5px !important;
  background-color:rgb(116, 142, 100);
}
.scorebetter{
  color:rgb(250, 109, 100);
}
.bettermore{
  color: white;
  background-color: rgb(250, 109, 100);
}
.shop-bottom{
  font-size: 12px;
  width: 110px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  margin:10px auto;
  background: #f1f5fb;
  border-radius: 10px;
}
</style>
