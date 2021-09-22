const path = require('path');

module.exports = {
  mode:'development',//开发环境
  // mode:'production',//辅助环境
  //单一入口
  entry: './src/index.js',//入口（被打包的文件）
  
  output: {  	//出口
    filename: 'bundle.js',//(打包后的文件名称)
    path: path.resolve(__dirname, 'dist')//把打包后的文件放在哪个文件夹下
  }
};