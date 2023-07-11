<template>
  <div class="tab-control" >
    <div v-for="(item,index) in titles"
         class="title_tabItem"
         :class="{active:index===currentIndex}"
         @click="titleItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0,
    }
  },
  methods:{
    titleItemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
  }
  .title_tabItem{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .title_tabItem span{
    padding: 3px;
  }
  .active{
    color: var(--color-tint);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
