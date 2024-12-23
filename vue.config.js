const { codeInspectorPlugin } = require('code-inspector-plugin');
const dayjs = require('dayjs')
let output = {}
 
// 编译环境是H5
if( process.env.UNI_PLATFORM == 'h5' && process.env.NODE_ENV == 'production') {
  const timestamp = dayjs().format('YYYYMMDDHHmmss');
    output = {
        filename: `./static/js/[name].js?v=${timestamp}`, // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        chunkFilename: `./static/js/[name].js?v=${timestamp}`
    }
}
 
module.exports = {
  transpileDependencies: ['uview-ui'],
  // 发布时删除console
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // 打包删除所有console以及debugger,true打开/false关闭  VueCli 4.x
      config.optimization.minimizer('terser').tap((args) => {
        // args[0].parallel = true
        const compress = args[0].terserOptions.compress
        // 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
        compress.drop_console = false
        compress.drop_debugger = true
        compress.pure_funcs = [
          '__f__', // App 平台 vue 移除日志代码
          // 'console.debug', // 可移除指定的 console 方法
          // 'console.log'
        ]
        return args
      })
    } else {
      if (process.env.NODE_ENV !== 'production' && process.env.UNI_PLATFORM == 'h5') {
        // 为开发环境修改配置...
        config.plugin('code-inspector-plugin').use(
          codeInspectorPlugin({
            bundler: 'webpack',
          })
        );
      }
    }
  },
  
  configureWebpack: {
    output,    
    performance: {
      hints: false // 关闭 webpack 的性能提示      
    },
    stats: {
      all: false, // 关闭所有输出
      errors: true, // 只显示错误
      warnings: true, // 只显示警告
    },
    plugins: [],
    devtool: process.env.NODE_ENV !== 'production'&& process.env.UNI_PLATFORM == 'h5' ? 'source-map' : false,
    
  }
}