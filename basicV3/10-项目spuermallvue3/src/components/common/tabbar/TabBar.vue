<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
.tab-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f5f5f5;
  box-shadow: 0 -3px 10px rgba(0,0,0,.1);
}

</style>
