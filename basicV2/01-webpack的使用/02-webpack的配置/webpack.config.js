const path = require('path')

module.exports = {
  //entry是要打包的文件
  entry:'./src/main.js',
  //output是打包之后生成的文件
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
}
   
