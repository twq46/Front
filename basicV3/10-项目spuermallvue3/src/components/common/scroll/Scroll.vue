<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0,
    },
    pullUpLoad:Boolean,
  },
  data(){
    return{
      scroll:null,
      message:'twq哈哈',
    }
  },
  mounted() {
    //通过document.querySelector来获取数据时有时获取的并不准确，
    //比如如果有多个组件里都有wrapper这个类，则可能并不会获取到当前的wrapper
    // this.scroll = new BScroll(document.querySelector('.wrapper'),{
    //
    // })

    // ref如果是绑定在组件中的,那么通过this.$refs.refname获取到的是一个组件对象
    // ref如果是绑定在普通的元素中,那么通过this.$refs.refname获取到的是一个元素对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
    })
    //2.监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    //3.监听上拉事件
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time=300){
      //先判断scroll这个对象是否存在，在调用其中的方法，这样写比较严谨
      this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
