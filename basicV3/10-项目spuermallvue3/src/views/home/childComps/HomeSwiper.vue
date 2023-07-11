<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoading">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
    data(){
      return{
        isLoad:true,
      }
    },
    methods:{
      imageLoading(){
        if(this.isLoad){
          this.$emit('swiperImageLoading')
          this.isLoad = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
