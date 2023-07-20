<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" @load="imageLoade">
    </div>
  </div>
</template>

<script>
  export default {
   name: "DetailGoodsInfo",
    props:{
     detailInfo:{
       type:Object,
     }
    },
    data(){
     return{
       counter:0,//当前已加载图片的个数
       imageLength:0//图片的总个数
     }
    },
    methods:{
      imageLoade(){
        //判断，所有的图片加载完成之后，在进行一次回调就可以了，
        //因为这里每一张图片的加载都会影响高度，而轮播图是只要一张图片
        //加载完成之后轮播图模块高度就已经确定了
        this.counter += 1
        if(this.counter === this.imageLength){
          this.$bus.$emit('GoodsInfoImageLoad')
        }
      }
    },
    watch:{
      //监听detailInfo属性值的改变
      detailInfo(){
        this.imageLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
.goods-info{
  padding: 20px 0;
}
.info-list img{
  width: 100%;
}
</style>
