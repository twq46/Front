// filter/map/reduce
// filter中的回调函数有一个要求:必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false:当返回false时，函数内部会过滤掉这次的n

const nums = [10,20,111,222,444,40,50]

//1.filter函数的使用
//10，20，40，50
let newNums = nums.filter(function(n){
  //n就表示数组中的每一项
  return n < 100//过滤出nums数组中所有小于100的数
})
console.log(newNums);

//2.map函数的使用:将newNums中的每个数乘以2
//20,40,80,100
let new2Nums = newNums.map(function(n){
  //n就表示数组中的每一项
  return n * 2;
})
console.log(new2Nums)

//3.reduce函数的使用reduce(参数一，参数二)
//参数一通常为一个函数，参数二的初始值通常为0
//reduce作用是对数组中所有的内容进行汇总
let total1 = new2Nums.reduce(function(preValue,n){
  return preValue + n;
},0)
console.log(total1);
//第一次: preValue 0 n 20
//第二次: prevalue 20 n 40
//第三次: preValue 60 n 80
//第四次: preValue 140 n 100
//最后返回 240

//上述三种方法合起来的简写
const nums2 = [10,20,111,222,444,40,50];
let total2 = nums.filter(function(n){
  return n < 100;
}).map(function(n){
  return n * 2;
}).reduce(function(preValue,n){
  return preValue + n
},0)
console.log(total2)

//还可以简写为
const nums3 = [10,20,111,222,444,40,50];
let total3 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);
console.log(total3);


