const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode:'development',//开发环境
  // mode:'production',//辅助环境
  // entry: './src/index.js',//入口（被打包的文件）
  // entry:{ main:'./src/index.js'},//入口（被打包的文件）
  //多入口
  entry:{
  	//chunk名称:入口文件路径
  	//chunk名称不能一致
  	index:'./src/page/index/index.js',
  	common:'./src/page/common/index.js'
  
  },
  output: {  	//出口
    filename: '[name]-[chunkhash].bundle.js',//(打包后的文件名称)
    path: path.resolve(__dirname, 'dist')//把打包后的文件放在哪个文件夹下
  },
    module: {
	    rules: [//是一个数组 一个对象是一个规则
	    //处理CSS文件
	    //npm install --save-dev style-loader css-loader
	      {
	        test: /\.css$/,
	        use: [
	          'style-loader',

	          'css-loader'
	        ]
	      },
	      //处理图片文件
	      //npm install --save-dev url-loader
	      {
				test: /\.(png|jpg|gif|jpeg)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			//npm install file-loader --save-dev
			    			options: {//图片打包后不加可能是二进制文件 加了可能是一个图片文件
			      			limit: 400//大于这个字节数才会打包成图片
			    		}
			  		}
				]
			}		
	    ]
  	},
  	//npm install html-webpack-plugin --save-dev
  	plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/view/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true,//给生成的js/css文件添加一个唯一的hash 
	        chunks:['index','common']//引入那些文件 默认是全部被打包的文件
	    }),
	    new CleanWebpackPlugin(),//清除输出文件npm install clean-webpack-plugin --save-dev
	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:8090//服务运行的端口(默认是8080)
	  }
};