/*
* @Author: TomChen
* @Date:   2019-07-26 16:52:36
* @Last Modified by:   TomChen
* @Last Modified time: 2019-07-26 16:54:05
*/
const {get:getItem,add:addItem,del:delItem}=require('./../model/item.js');
const path=require('path');
const swig=require('swig');
const querystring=require('querystring')
class Controller{
    index(req,res,...args){
        getItem()
        .then(data=>{
			const filePath = path.normalize(__dirname+'/../view/item/index.html');
			//引入模板()
			const template=swig.compileFile(filePath);
			const html=template({
				data:data
			})
			// console.log(html)
			res.setHeader('Content-type',"text/html;charset=UTF-8")
			res.end(html);
		})
		.catch(err=>{
			res.setHeader('Content-type',"text/html;charset=UTF-8")
			res.statusCode = 404
			res.end('<h1>请求出错</h1>')
		})
    }
}

module.exports = new Controller()