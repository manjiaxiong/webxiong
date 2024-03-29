/*
* @Author: TomChen
* @Date:   2019-08-08 16:30:19
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-09 11:38:58
*/

const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    //指定环境
    mode:'development',
    // mode:'production',
    //单一入口
    // entry: './src/index.js',
    // entry: {main:'./src/index.js'},
    //多入口
    entry:{
        index:'./src/index.js',
    },
    //出口
    output: {
        //「入口分块(entry chunk)」的文件名模板
        // filename: '[name]-[chunkhash]-bundle.js',
        filename: '[name]-[hash]-bundle.js',
        //所有输出文件的目标路径
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        //处理css文件
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
        //处理图片
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 400
                        }
                    }
                ]
            },
        //bable
        //Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] ]
                    }
                }               
            },                    
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template:'./src/index.html',//模板文件
            filename:'index.html',//输出的文件名
            // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
            hash:true,//给生成的js/css文件添加一个唯一的hash
        })
    ],
    devServer: {
        contentBase: './dist',//内容的目录
        port:8090,//指定服务端口
    },                
}