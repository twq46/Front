<template>
  <div class="item-info">
    <div class="check-button">
      <CheckButton :is-checked="products.checked" @click.native="checkClick"></CheckButton>
    </div>
    <div class="cartImage">
      <img :src="products.image" alt="">
    </div>
    <div class="product-info">
      <div class="pro-title">{{products.title}}</div>
      <div class="pro-desc">{{products.desc}}</div>
      <div class="bottom">
        <div class="item-price">¥{{products.price}}</div>
        <div class="item-count">✖{{products.count}}</div>
      </div>
    </div>
<!--    {{products}}-->
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";
  export default {
    name: "CartListItem",
    components:{
      CheckButton
    },
    props:{
      products:{
        type:Object,
        default:{}
      }
    },
    methods:{
      checkClick(){
        this.products.checked = !this.products.checked
      }
    }
  }
</script>

<style scoped>
.check-button{
  width: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
}
.item-info{
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #e2e2e2;
}
.cartImage img{
  width: 62px;
  height: 77px;
  border-radius: 5px;
}
.product-info{
  width: 100%;
}
.pro-title{
  font-size: 15px;
}
.pro-desc{
  font-size: 12px;
  color: #747271;
}
.pro-title,.pro-desc{
  width: 70%;
  margin-left: 13px;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bottom{
  display: flex;
  position: relative;
  margin-left: 13px;
  margin-bottom: 5px;
}
.item-price{
  color: #fb5f2c;
}
.item-count{
  position: absolute;
  right: 114px;
}
</style>
