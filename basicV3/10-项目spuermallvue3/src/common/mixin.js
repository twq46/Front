//将backtop所用的到的函数以及组件的注册都抽取到一个变量里
import BackTop from "@/components/content/backTop/BackTop";
export const  backTopMixin = {
  components:{
    BackTop,
  },
  data(){
    return{
      backTopShow:false,
    }
  },
  methods:{
    //滚到顶部
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    //回到顶部按钮是否显示
    listenShowbackTop(position){
      this.backTopShow = -position.y > 1000
    }
  }
}
