const http=require('http');
const fs=require('fs');
const path=require('path');
const mime=require('./mime.json')
const url=require('url')
const {get}=require('./model/item.js')
const swig=require('swig')
//每一次请求都会执行createServer方法中的函数
const server= http.createServer((req,res)=>{
//路由：根据不同请求做不同的事情
	// console.log(req.method+"::"+req.url);
	//静态资源处理
	const parseUrl=url.parse(req.url,true);//处理路径
	const pathname=parseUrl.pathname;
	// console.log('parseUrl:::',parseUrl)
	console.log('pathname:::',pathname)
	//路由处理

	//首页路由 index.html
	if(pathname=="/"||pathname=="index.html"){
		get()
		.then(data=>{
			const filePath = path.normalize(__dirname+'/static/index.html');
			//引入模板()
			const template=swig.compileFile(filePath);
			const html=template({
				data:data
			})
			console.log(html)
			res.setHeader('Content-type',"text/html;charset=UTF-8")
			res.end(html);
		})
		.catch(err=>{
			res.setHeader('Content-type',"text/html;charset=UTF-8")
			res.statusCode = 404
			res.end('<h1>请求出错</h1>')
		})
	}//ajax请求
	else if(pathname=="/add"){
		console.log('add...')
		res.end(JSON.stringify({
			code:0
		}))
	}//css index等文件
	else{
		//1读取文件
		const filePath = path.normalize(__dirname+'/static'+req.url);
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-type',"text/html;charset=UTF-8")
				res.statusCode = 404
				res.end('<h1>请求出错</h1>')
				
			}else{
				const extname=path.extname(filePath);
				const mimeType=mime[extname] ||"text/plain";
				res.setHeader('Content-type',mimeType+";charset:UTF-8")
				res.end(data);
			}
		})
	}
	// console.log(filePath)
	
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000')
})