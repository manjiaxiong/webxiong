const path = require('path');

module.exports = {
  mode:'development',//开发环境
  // mode:'production',//辅助环境
  // entry: './src/index.js',//入口（被打包的文件）
  // entry:{ main:'./src/index.js'},//入口（被打包的文件）
  //多入口
  entry:{
  	//chunk名称:入口文件路径
  	index:'./src/index.js',
  	about:'./src/about.js',
  	concat:'./src/concat.js'
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
  	}
};