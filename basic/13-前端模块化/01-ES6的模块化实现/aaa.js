//小明
var age = 19;

var flag = true;

function sum(sum1,sum2){
  return sum1 + sum2;
}

console.log(flag);

if(flag){
  console.log('我是小明模块');
}
console.log(sum(10, 20));

//1.导出方式一：
export {
  flag,sum
}

//2.导出方式二：
export var num1 = 1000;
export var height = 1.88;

//3.导出函数/类
export function mul(num1,num2){
  return num1 + num2;
}
