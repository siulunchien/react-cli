module.exports = {
  // 文件路径
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',

  // 开发环境服务器配置
  host: 'localhost',
  port: 8089,
  autoOpenBrowser: false,
  errorOverlay: true, // 是否开启全屏错误提示
  notifyOnErrors: true, // 是否开启错误弹窗
  poll: false,
  proxyTable: {},

  // Source Maps
  devtool: 'eval-source-map',
  cssSourceMap: false,
  
  env: {
    NODE_ENV: '"development"'
  }

}