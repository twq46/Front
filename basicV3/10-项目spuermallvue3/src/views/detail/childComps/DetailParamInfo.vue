<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="table in paramInfo.sizes" class="info-size">
      <tr v-for="tr in table">
        <td v-for="td in tr">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="info in paramInfo.infos">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !==0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:Object,
    }
  }
</script>

<style scoped>
  .param-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-size{
    width: 100%;
  }
  .info-size tr{
    height: 42px;

  }
  .info-size tr td{
    border-bottom: 1px solid #efefef;
  }
  .info-param{
    width: 100%;
  }
  .info-param tr{
    height: 42px;
  }
  .info-param tr td{
    width: 37px;
    border-bottom: 1px solid #efefef;
  }
  .param-value{
    color: #d9556a;
  }




  /*.param-info{*/
  /*  padding: 20px 15px;*/
  /*  font-size: 14px;*/
  /*  border-bottom: 5px solid #f2f5f8;*/
  /*}*/
  /*.param-info table{*/
  /*  width: 100%;*/
  /*  !*相邻单元格的边框会合并为一个单一的边框线*!*/
  /*  border-collapse: collapse;*/
  /*}*/
  /*.param-info table tr{*/
  /*  height: 42px;*/
  /*}*/
  /*.param-info table tr td{*/
  /*  border-bottom: 1px solid rgba(100,100,100,.1);*/
  /*}*/
  /*.info-param-key{*/
  /*!*当value的数据量比较大的时候，会挤到key,所以给一个固定的宽度*!*/
  /*  width: 95px;*/
  /*}*/
  /*.info-param{*/
  /*  border-top:1px solid rgba(0,0,0,.1);*/
  /*}*/
  /*.param-value{*/
  /*  color: #eb4868;*/
  /*}*/
  /*.info-img img{*/
  /*  width: 100%;*/
  /*}*/
</style>
