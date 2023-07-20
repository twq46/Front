<template>
  <div id="detail">
    <!--导航栏   -->
    <DetailNavBar class="detail-nav" @detailTitleItem="titleClick" ref="detailNavBar"></DetailNavBar>

    <Scroll class="content"
            @pullingUp="pullingUp"
            @scroll="detailScroll"
            :probe-type="3"
            :pull-up-load="true" ref="scroll">
      <!--轮播图数据-->
      <DetailSwiper :top-images-swiper="topImages"></DetailSwiper>
      <!--商品信息展示-->
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <!--商家信息展示-->
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <!--商品详细信息-->
      <DetailGoodsInfo :detail-info="detailInfo"></DetailGoodsInfo>

      <!--商品参数信息-->
      <DetailParamInfo :param-info="paramInfo" ref="param"></DetailParamInfo>
      <!--评论信息-->
      <DetailCommentInfo :comment-info="commentInfo" ref="comment"></DetailCommentInfo>
      <!--展示推荐信息-->
      <GoodsList :goods-list="recommends" ref="recommend"></GoodsList>
    </Scroll>
    <DetailBottomBar @carClick="addCarToClick"></DetailBottomBar>
    <BackTop v-show="backTopShow" @click.native="backTopClick"></BackTop>
<!--    <Toast></Toast>-->
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
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

// import Toast from "@/components/common/toast/Toast";

import GoodsList from "@/components/content/goods/GoodsList";

import Scroll from "@/components/common/scroll/Scroll";

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
import {debounce} from "common/utils"

import {backTopMixin} from "@/common/mixin";

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
    DetailBottomBar,

    // Toast,

    GoodsList,
    Scroll
  },
  //使用混入对象
  mixins:[backTopMixin],
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
      recommends:[],
      themTopYs:[],
      toastMessage:'',
      show:false,
    }
  },
  created() {
    this.iid = this.$route.params.iid
    //请求详情数据
    getDetail(this.iid).then(res =>{
      const data = res.result;
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
      this.recommends = res.data.list;
    })
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500)
    //监听轮播图是否加载完
    this.$bus.$on('detailSwiperImageLoad',()=>{
      // console.log('detailSwiperImageLoad');
      refresh()
    })
    this.$bus.$on('GoodsInfoImageLoad',()=>{
      refresh()
      this.detailImageLoad()
    })

  },
  //获取组件所在的位置
  //可以在updated中获取值，获取的也不准确，也是因为图片没有加载完毕
  // updated() {
  //   this.themTopYs = []
  //
  //   this.themTopYs.push(0);
  //   this.themTopYs.push(this.$refs.param.$el.offsetTop)
  //   this.themTopYs.push(this.$refs.comment.$el.offsetTop)
  //   this.themTopYs.push(this.$refs.recommend.$el.offsetTop)
  //
  //   console.log(this.themTopYs);
  // },
  methods:{
    pullingUp(){

    },
    titleClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0 , -this.themTopYs[index] , 100)
    },
    detailImageLoad(){
      this.themTopYs = []

      this.themTopYs.push(0);
      this.themTopYs.push(this.$refs.param.$el.offsetTop)
      this.themTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themTopYs.push(this.$refs.recommend.$el.offsetTop)

      // console.log(this.themTopYs);
    },
    //滚动到一定的位置，detailNavBar中对应的标题就会亮
    detailScroll(position){
      // console.log(position.y);
      let i;
      let length = this.themTopYs.length
      for(i = 0; i < length; i++){
        if((i < length - 1 && -position.y >= this.themTopYs[i] && -position.y <= this.themTopYs[i+1]) || (i === length -1 && -position.y >= this.themTopYs[i])){
          this.$refs.detailNavBar.currentIndex = i
        }

        //不能用相等来判断，应该用一段区间的值来判断,并且这里的k不是数组的值，而是下标
        // if(i < length - 1 && -position.y > this.themTopYs[i] && -position.y < this.themTopYs[i+1]){
        //   this.$refs.detailNavBar.currentIndex = i
        // }
        // else if(this.themTopYs.length - 1 === i){
        //   this.$refs.detailNavBar.currentIndex = i
        // }
      }
      this.listenShowbackTop(position)
    },
    addCarToClick(){
      // console.log('----');
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //2.将商品添加到购物车里
      //以下的写法是在mutations里面的写法
      // this.$store.commit('addCart',product)
      //actions里的写法如下
      //如果在vuex中做了某些操作，你想让外面知道你完成了这个操作，
      //store中的addCart函数要用promise，然后在这里接收返回的promise
      this.$store.dispatch('addCart',product).then(res=>{

        this.$toast.show(res,2000)
        // this.toastMessage = res;
        // this.show = true;
        // setTimeout(()=>{
        //   //弹窗显示1.5秒之后消失
        //   this.show = false;
        // },1500)
        // console.log(res);//打印出的结果为promise中的resolve的结果
      })
    },
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
  height: calc(100% - 44px - 49px);
}

</style>
