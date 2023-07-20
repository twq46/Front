<template>
  <div class="nar-bar ignore">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nar-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .left,.right{
    width: 60px;
  }
  /*左和右边都被占据，中间部分占据剩余的部分*/
  .center{
    flex: 1;
    text-align: center;
  }
</style>
