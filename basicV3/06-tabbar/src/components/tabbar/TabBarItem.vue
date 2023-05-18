<template>
    <div class="tab-bar-item" @click="tarBarClick" :class="{isActiveT:isActive}">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:{
      type:String,
    }
  },
  methods:{
    tarBarClick(){
      console.log('itemCLick');
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      //$route表示当前处于激活状态的路由
      // 也可以实现点谁谁亮
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style scoped>
.isActiveT{
  color:red;
}
.tab-bar-item{
  flex: 1;
  text-align: center;

}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
