<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="service">
        <i class="iconservice"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="iconshop"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="iconcollect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="center" @click="carClick">加入购物车</div>
    <div class="right">购买</div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      carClick(){
        this.$emit('carClick')
      }
    }
  }
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  position: relative;
  /*bottom: 49px;*/
  display: flex;
}
.left{
  background-color: #fff;
  width: 50%;
  display: flex;
  font-size: 13px;
}
.service{
  margin-left: 10px;
}
.service,.shop{
  margin-right: 25px;
}
.collect{
  margin-right: 10px;
}
.iconservice{
  display: block;
  height: 22px;
  width: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat  0 -52px/100%;
}
.iconshop{
  display: block;
  height: 22px;
  width: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -99px/100%;
}
.iconcollect{
  display: block;
  height: 22px;
  width: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat  0 1px/100%;
}
.center{
  background-color: #ffdd33;
  width: 25%;
  text-align: center;
  line-height: 49px;
}
.right{
  background-color: #ff7898;
  width: 25%;
  color: white;
  text-align: center;
  line-height: 49px;
}
</style>
