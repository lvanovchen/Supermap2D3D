const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',

  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',

  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // 使用运行时编译器
  runtimeCompiler: true,

  // webpack配置
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production';
    } else {
      config.mode = 'development';
    }

    // 路径别名
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve('src'),
      '@c': resolve('src/components'),
      'excel': resolve('src/excel')
    };
  },

  // CSS配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'production',
    sourceMap: false
  },

  // webpack-dev-server 配置
  devServer: {
    open: true,
    port: 8080,
    https: false,
    hotOnly: false
  },

  // chainWebpack配置
  chainWebpack(config) {
    // SVG处理配置
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.include.add(resolve('src/icons/svg'));
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });

    // 排除SVG目录的图片处理
    const imagesRule = config.module.rule('images');
    imagesRule.exclude.add(resolve('src/icons/svg'));
  }
};
