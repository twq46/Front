const app = new Vue({
  el:'#app',
  data:{
    books:[{id:1,name:'a',data:'2006-2',price:21,count:1},{id:2,name:'b',data:'2006-2',price:22,count:1},{id:3,name:'c',data:'2006-2',price:23,count:1},{id:4,name:'d',data:'2006-2',price:24,count:1}],
    
  },
  computed:{
    total(){
      totalprice = 0;
      for(let i = 0 ;i < this.books.length; i++){
        totalprice += this.books[i].count * this.books[i].price;
      }
      return totalprice.toFixed(2);
    },
    
  },
  methods:{
    jianCLick(item){
      item.count --;
    },
    addClick(item){
      item.count ++;
    },
    yichuClick(index){
      this.books.splice(index,1)
    },
    getPrice(price){
      return '¥' + price.toFixed(2);
    }
  },
  
})