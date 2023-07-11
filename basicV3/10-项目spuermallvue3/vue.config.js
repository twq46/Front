// const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
//
// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack: config => {
//     config.resolve.alias
//       .set('@', path.resolve(__dirname, 'src'))
//       .set('assets', path.resolve(__dirname, 'src/assets'))
//       .set('common', path.resolve(__dirname, 'src/common'))
//       .set('components', path.resolve(__dirname, 'src/components'))
//       .set('network', path.resolve(__dirname, 'src/network'))
//       .set('views', path.resolve(__dirname, 'src/views'))
//   }
// })
//
//
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
