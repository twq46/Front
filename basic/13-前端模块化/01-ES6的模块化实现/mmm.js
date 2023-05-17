//1.以对象的形式导入
//这里接受小明模块中导出的flag 和 sum 变量
import {flag , sum} from './aaa.js'

//2.导入aaa中所有的东西,twq是重新起的别名
import * as twq from './aaa.js'
if(flag){
  console.log('小明模块的flag传入了mmm模块');
}
console.log(sum(40,60));

console.log(twq.height);
