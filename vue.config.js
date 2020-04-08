module.exports = {
    devServer: {
      open:true,//默认打开浏览器
      port:8000,//更改端口号8000
        overlay: {
          warnings: false,
          errors: false
        },
        proxy:{
          //代理
          "/ajax":{
            target:"http://m.maoyan.com",
            changeOrigin:true,//改变域名
            pathRewrite:{
              "^/ajax":""//把ajax开头的变为空
            }
          }
        }
       
    },
    lintOnSave:false,//直接关闭eslint检查
    configureWebpack: {
      resolve: {
          alias: {
              'assets': '@/assets',
              'con': '@/components',
              'views': '@/views',
          }
      }
  }
}