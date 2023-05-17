//小红
//这里接受从小明模块中导出的sum函数并使用
//这里必须加上文件后缀名，否则找不到；到后期在项目中就不需要加后缀
import {sum} from "./aaa.js";

var flag = false;
var name = '小红'

console.log(name);
console.log(sum(20, 30));
