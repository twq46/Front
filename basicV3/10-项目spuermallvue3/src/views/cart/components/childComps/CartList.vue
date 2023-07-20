<template>
  <div>
    <CartListItem v-for="item in cartList" :products="item"></CartListItem>
  </div>
</template>

<script>
  import CartListItem from "@/views/cart/components/childComps/CartListItem";
  import {mapGetters} from "vuex";
  export default {
    name: "CartList",
    methods:{

    },
    components:{
      CartListItem,
    },
    computed:{
        ...mapGetters(['cartList'])
    },

  }
</script>

<style scoped>

</style>
