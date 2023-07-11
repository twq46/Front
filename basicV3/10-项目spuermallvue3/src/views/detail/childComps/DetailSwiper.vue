<template>
  <div>
    <Swiper class="swipe">
      <SwiperItem v-for="item in topImagesSwiper">
        <img :src="item" alt="" @load="imageLoad">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
//这里可以统一导入是因为swiper下有一个index.js文件中统一导出的
import {Swiper,SwiperItem} from "@/components/common/swiper";

export default {
  name: "DetailSwiper",
  props:{
    topImagesSwiper:Array,
    default(){
      return []
    }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('detailSwiperImageLoad')
    }
  }
}
</script>

<style scoped>
.swipe{
  height: 200px;
  overflow: hidden;
}
</style>
