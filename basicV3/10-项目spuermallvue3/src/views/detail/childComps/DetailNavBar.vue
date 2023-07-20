<template>
  <div>
    <NavBar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" alt="" @click="backprev">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles"
             class="title-item"
             @click="titleItemClick(index)" :class="{active:currentIndex === index}">{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar,
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0,
    }
  },
  methods:{
    titleItemClick(index){
      this.currentIndex = index;
      this.$emit('detailTitleItem',index)
    },
    backprev(){
      //返回上一级
      this.$router.back()
      // this.$router.push('/home')
    },
  },
}
</script>

<style scoped>
  .titles{
    display: flex;
    font-size:13px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .back img{
    vertical-align: middle;
    margin-left: 15px;
  }
</style>
