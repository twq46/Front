<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="collect">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImage(){
        return this.goodItem.image || this.goodItem.show.img
      }
    },
    methods:{
      imgLoad(){
        //因为在detail界面中的推荐数据也是显示的goodlist的数据，因此这里需要判断
        //是哪个组件的图片加载完成

        if(!this.$route.path.indexOf('/home')){
          this.$bus.$emit('homeImageLoad')
        } else if(!this.$route.path.indexOf('/detail')){
          this.$bus.$emit('detailImageLoad')
        }

      },
      itemClick(){
        // console.log(111,this.goodItem);
        this.$router.push('/detail/' + this.goodItem.iid)
      }
    },
  }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;
    /*宽度不设置具体的值，这样可以防止在不同的设备上预留的空隙不一样*/
    width:48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size:12px;
    position: absolute;
    bottom: 5px;
    left:0;
    right:0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top:-1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
