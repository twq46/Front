<template>
  <div id="detail">
    <!--导航栏   -->
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="content"
            @pullingUp="pullingUp"
            :pull-up-load="true" ref="detailScroll">
      <!--轮播图数据-->
      <DetailSwiper :top-images-swiper="topImages"></DetailSwiper>
      <!--商品信息展示-->
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <!--商家信息展示-->
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <!--商品详细信息-->
      <DetailGoodsInfo :detail-info="detailInfo"></DetailGoodsInfo>

      <!--商品参数信息-->
      <DetailParamInfo :param-info="paramInfo"></DetailParamInfo>
      <!--评论信息-->
      <DetailCommentInfo :comment-info="commentInfo"></DetailCommentInfo>
      <!--展示推荐信息-->
      <GoodsList :goods-list="recommends"></GoodsList>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";

import GoodsList from "@/components/content/goods/GoodsList";


import Scroll from "@/components/common/scroll/Scroll";

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
import {debounce} from "common/utils"
export default {
  name: "detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,

    GoodsList,
    Scroll
  },
  data(){
    return{
      iid:null,
      topImages:[],
      detailData:Object,
      goods:{},
      shop:{},
      detailInfo: {},
      paramInfo:{},
      commentInfo:{},
      recommends:[]
    }
  },
  created() {
    this.iid = this.$route.params.iid
    //请求详情数据
    getDetail(this.iid).then(res =>{
      // console.log('res',res);
      const data = res.result;
      // console.log('data',data);
      //1.获取图片轮播数据
      this.topImages = data.itemInfo.topImages

      //2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //3.获取商家信息
      this.shop = new Shop(data.shopInfo)

      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo


      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //6.获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })
    //请求推荐数据
    getRecommend().then(res =>{
      console.log(res);
      this.recommends = res.data.list;
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.detailScroll.refresh,500)
    this.$bus.$on('detailSwiperImageLoad',()=>{
      refresh()
    })
  },
  methods:{
    pullingUp(){

    }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: white;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
/*.content{*/
/*  position: relative;*/
/*  right: 0;*/
/*  left: 0;*/
/*}*/
.content{
  /*这个100%是相对于父元素来说的，因此父元素必须要设置高度*/
  height: calc(100% - 44px);
}
</style>
