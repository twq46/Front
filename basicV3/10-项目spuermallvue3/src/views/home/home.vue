<template>
  <div id="home">
   <NavBar class="home-nav"><div slot="center" >购物街</div></NavBar>
    <TabControl :titles="['流行','新款','精选']"
                class="tab-control1"
                @tabClick="tabClick"
                ref="tabcontrol1" v-show="isTabFixed"></TabControl>
    <Scroll class="content"
            ref="scroll"
            @scroll="backTop"
            :pull-up-load="true"
            @pullingUp="loadMore"
            :probe-type="3">
      <!--轮播图-->
      <home-swiper :banners="banners" @swiperImageLoading="swiperImageLoad"></home-swiper>
      <!--推荐图-->
      <RecommendView :recommends="recommends"></RecommendView>
      <!--流行图-->
      <FeatureView></FeatureView>
      <TabControl :titles="['流行','新款','精选']"
                  class="tab-control"
                  @tabClick="tabClick"
                  ref="tabcontrol"></TabControl>
      <!--props中goodsList采用的是驼峰命名，因此这里得使用连接符-->
      <GoodsList :goods-list="showType"></GoodsList>

    </Scroll>
    <!--监听组件的点击事件需要添加ntive修饰符，否则监听不到-->
    <BackTop v-show="backTopShow" @click.native="backTopClick"></BackTop>
  </div>
</template>

<script>
  //公用组件
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";

  //子组件
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "@/views/home/childComps/RecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";

  //接口
  import {getHomeMultidata,getHomeGoods} from "@/network/home";
  import {debounce} from "@/common/utils";

  import {backTopMixin} from "@/common/mixin";

  export default {
    //name这个属性也很重要，keep-alive的include和exclude要和这个name属性对应
    name: "home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    data(){
      return{
        homeres:null,
        banners:[],//轮播图数据
        recommends:[],//推荐数据
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        taboffsetTop:0,
        isTabFixed:false,
        saveY:0,
      }
    },
    mixins:[backTopMixin],
    computed:{
      showType(){
        return this.goods[this.currentType].list;
      }
    },
    created(){
      this.getHomeMultidata();
      //请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      //debounce提取到common文件里的utils下
      const refresh = debounce(this.$refs.scroll.refresh,300)

      //监听图片是否加载完成
      this.$bus.$on('homeImageLoad',()=>{
        // console.log('homeImageLoad');
        //如果我们直接执行refresh,那么refresh函数会被执行30次
        //可以将refresh函数传入到debounce函数中，生成一个新的函数
        // this.$refs.scroll.scroll.refresh()
        refresh()
      })
    },

    activated() {
      //回到该界面的时候，滚到上次停留的位置
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      //离开界面的时候保存当前停留的位置
      this.saveY = this.$refs.scroll.scroll.y
    },
    methods:{
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        //实现两个tabcontrol，选中的(流行，新款，精选)一样
        this.$refs.tabcontrol1.currentIndex = index;
        this.$refs.tabcontrol.currentIndex = index;
      },

      backTop(position){
        // //1.判断BackTop是否显示
        this.listenShowbackTop(position)
        // console.log(position);
        //2.决定tabControl 是否吸顶(position:fixed)
        this.taboffsetTop = 545;
        this.isTabFixed = (-position.y) > this.taboffsetTop
      },
      loadMore(){
        //这里要记得在调用接口请求完数据之后，使用scroll的finishPullUp方法，
        // 否则无法进行下一次上拉加载更多
        this.getHomeGoods(this.currentType);

        //这里要进行一次刷新，否则即使有数据有时也无法向下滚动，
        // 这是因为图片是异步加载的，当图片还没有加载完，scroll就已经
        //会设置一个高度(也就是可滚动的区域的高度),如果scroll不刷新，则可滚动的区域就不变，导致
        //下面虽然加载的有数据但是仍然不能进行向下滚动
        // this.$refs.scroll.refresh()
      },
      //获取offsetTop值要在监听轮播图加载完成之后，否则值的获取就不正确
      swiperImageLoad(){
        //tabControl位置的监听
        //所有的组件都有一个属性$el:用于获取组件中的元素
        this.taboffsetTop = this.$refs.tabcontrol.$el.offsetTop
        // console.log(this.taboffsetTop);
      },
      /**
       * 接口相关的方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          // console.log(111,res);
          this.homeres = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res =>{
          //这个不能直接push一个数组，否则res.data.list这个数组
          // 整个会成为this.goods[type].list的第一项
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;

          //scroll默认只向下加载一次，finishPullUp加载完第一次数据之后继续进行下一次的上拉加载更多
          this.$refs.scroll.scroll.finishPullUp()
        })
      }

    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color:white;
    /*position: fixed;*/
    /*left:0;*/
    /*right:0;*/
    /*top:0;*/
    /*z-index: 1;*/
  }
  #home{
    /*padding-top: 44px;*/
    /*vh为视口高度*/
    height: 100vh;
    position: relative;
  }
  .tab-control1{
    position: relative;
    z-index: 9;
  }
  .tab-control{
    /*position: sticky;*/
    /*top:44px;*/
    background-color: white;
    z-index: 1;
  }
  /*手机屏幕中除了顶部和底部，中间部分的高度
  目前接口没有对外开放，因此先注释掉
  计算中间高度的方法一：*/
  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left:0;
    right: 0;
    overflow: hidden;
  }
  .fixed{
    position: fixed;
    left:0;
    right:0;
    top:44px;
  }
  /*
  计算中间高度的方法二：*/

  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 51px;*/
  /*}*/
</style>
