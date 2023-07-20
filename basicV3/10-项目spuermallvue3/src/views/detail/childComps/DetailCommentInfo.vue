<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <!--showDate过滤器-->
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="item in commentInfo.images" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils";

  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{

    },
    //  问题: 如何将 时间戳 转成时间格式化字符串(常用)
    //  时间戳: 1535694719(秒)
    //  1.将时间戳转成Date对象const date = new Date(1535694719*1000)
    //  2.将date进行格式化,转成对应的字符串
    //  date.getYear()+date.getMonth()+1
    //  date->FormatString(太常用)
    //  fmt.format(date, "yyyy-MM-dd hh:mm:ss" )
    //  y: year 年
    //  M Month 月
    //  d: day 日
    //  h:hours 小时(h(12小时/H(24小时))
    //  m: minutes 分钟
    //  s: seconds 秒钟
    filters:{
      showDate(value){
        // 1.将时间戳转成Date对象
        const date = new Date(value*1000)
        // 2.将date进行格式化
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
.info-header{
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #eaeaea;
}
.header-title{
  flex:1;
}
.info-user{
  padding: 10px;
}
.info-user img{
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
.info-user span{
  margin-left: 5px;
}
.info-detail{
  padding: 10px;
  font-size: 12px;
}
.info-other{
  margin: 5px 0;
  color: #9f9f9f;
  font-size: 12px;
}
.info-other span:last-child{
  margin-left: 5px;
}
.comment-info{
  margin-bottom: 10px;
  border-bottom: 5px solid #f2f5f8;
}
.info-imgs img{
  margin-right: 10px;
  width: 50px;
  height: 50px;
}
</style>
