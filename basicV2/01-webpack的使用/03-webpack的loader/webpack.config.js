const path = require('path')

module.exports = {
  //entry是要打包的文件
  entry:'./src/main.js',
  //output是打包之后生成的文件
  output:{
    //寻找当前文件所在的路径并拼接上dist，然后在dist目录下创建bundle.js文件
    //在终端中就可以使用webpack 来代替webpack ./src/main.js -o ./dist/bundle.js
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  //下面这段从官网进行复制
  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //webpack在使用多个loader时，是从右向左依次使用
        use: [ "style-loader","css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
}

