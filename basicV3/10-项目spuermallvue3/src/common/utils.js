// 公用的方法的抽取
//防抖动函数debounce
//给一个函数，和单位时间内该函数需要等待多久
export function debounce(func,delay){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}

//时间戳格式化
export function formatDate(date,fmt){
  //1.获取年份
  if(/(y+)/.test(fmt)){
    //用RegExp.$1(也就是yyyy)替换后面一堆((date.getFullYear() + '')表示将数字年份转化为字符串，
    // 然后截取传入的年份的长度，比如传入的fmt是yy,2019经过substr(2)之后就变成了19)
    fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4-RegExp.$1.length));
  }
  //2.获取
  //M+:一个或多个M
  let o ={
    'M+':date.getMonth() + 1,
    'd+':date.getDate(),
    'h+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds(),
  }
  for (let k in o){
    if(new RegExp(`(${k})`).test(fmt)){
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt
}
//不足两位补零
function padLeftZero(str){
  //比如传入的str为6，经过'00' + str之后变成006，再经过substr(str.length)就变成了06
  return ('00' + str).substr(str.length)
}
