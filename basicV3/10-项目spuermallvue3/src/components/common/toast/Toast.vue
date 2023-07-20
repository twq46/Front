<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Totast",
    // props:{
    //   message:{
    //     type:String,
    //     default:''
    //   }
    // },
    data(){
      return{
        isShow:false,
        message:'',
      }
    },
    methods:{
      show(message,duration){
        this.message = message;
        this.isShow = true;

        setTimeout(()=>{
          this.isShow = false
        },duration)
      }
    }
  }
</script>

<style scoped>
.toast{
  padding: 5px;
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
  background-color: rgba(0,0,0,.6);
  border-radius: 5px;
  z-index: 999;
}
</style>
