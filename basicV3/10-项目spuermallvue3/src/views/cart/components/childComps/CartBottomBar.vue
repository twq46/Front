<template>
  <div class="bottom">
    <div class="item-all">
      <div class="check-button"  @click="checkAll">
        <CheckButton :is-checked="isSelectChecked"></CheckButton>
      </div>
      <span class="checkall" >全选</span>
      <span class="allprice">合计：¥{{totalPrice}}</span>
    </div>
    <div class="right">去计算({{totalChecked}})</div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButton/CheckButton";
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton,
    },

    computed:{
      totalPrice(){
        //toFixed(2)表示小数点后保留两位小数
        // return this.$store.state.cartList.filter(item => item.checked).reduce((preValue,item)=>{
        //   return preValue + item.price * item.count
        // },0).toFixed(2)
        let total = 0
        for (let item of this.$store.state.cartList){
          if(item.checked){
            total += item.price * item.count
          }
        }
        return total
      },
      totalChecked(){
        // return this.$store.state.cartList.filter(item => item.checked).length
        let count = 0;
        for (let item of this.$store.state.cartList){
          if(item.checked){
            count += 1;
          }
        }
        return count
      },
      isSelectChecked(){
        //没有数据的时候返回false
        if(this.$store.state.cartList.length === 0) return false
        //第一种方法：使用filter如果有商品没有被选中，则全选按钮就不亮
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        //第二种方法：使用find,如果找到了没有被选中的商品，本来是是true,取反一下返回false
        return !(this.$store.state.cartList.find(item => !item.checked))
        //第三种方法:遍历
        /*for(let item of this.$store.state.cartList){
          if(!item.checked){
            return false
          }
        }
        return true  */
      }
    },
    methods:{
      checkAll(){
        if(this.isSelectChecked){//全部选中的时候
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else {//全部为选中，或者部分为选中
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
.bottom{
  height: 28px;
  position: relative;
  z-index: 9;
  background-color: #efedf0;
  display: flex;
}
.item-all{
  width: 70%;
  display: flex;
  line-height: 28px;
}
.check-button{
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 2px 0;
}
.checkall{
  font-size: 13px;
}
.allprice{
  font-size: 14px;
  margin-left: 10px;
}
.right{
  width: 30%;
  text-align: center;
  line-height: 28px;
  background-color:#ff5016;
  color: white;
  font-size: 13px;
}
.active{
  background-color: pink;
  border-color: pink;
}
</style>
