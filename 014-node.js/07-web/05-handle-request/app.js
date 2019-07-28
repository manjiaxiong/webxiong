const http=require('http');
const fs=require('fs');
const path=require('path');
const mime=require('./mime.json')
const url=require('url'); 
const {get,add,del}=require('./model/item.js');
// const {add}=require('./model/item.js');
const swig=require('swig');
const querystring=require('querystring');
//每一次请求都会执行createServer方法中的函数
const server= http.createServer((req,res)=>{
//路由：根据不同请求做不同的事情
	// console.log(req.method+"::"+req.url);
	//静态资源处理
	const parseUrl=url.parse(req.url,true);//处理路径
	const pathname=parseUrl.pathname;
	// console.log('parseUrl:::',parseUrl)
	// console.log('pathname:::',pathname)
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
			// console.log(html)
			res.setHeader('Content-type',"text/html;charset=UTF-8")
			res.end(html);
		})
		.catch(err=>{
			res.setHeader('Content-type',"text/html;charset=UTF-8")
			res.statusCode = 404
			res.end('<h1>请求出错</h1>')
		})
	}//ajax请求
	else if(pathname=="/add"){//post请求 (ajax)
		//1获取参数
		
		let body='';
		req.on('data',(chunk)=>{//接收前台post的data
			body+=chunk;

		})
	
		//2根据参数获取任务对象并写入文件中
		req.on('end',()=>{
			// console.log(body)
			const query=querystring.parse(body);
			// console.log(body)
			// console.log('query:::',query)
			add(query.task)
			.then(data=>{
				//3如果写入成功将新生成的任务对象返回前台
				res.end(JSON.stringify({
					code:0,
					message:'添加成功',
					data:data
				}))
			})
			.catch(err=>{
				//4如果写入失败给出提示
				console.log('err');
				res.end(JSON.stringify({
					code:1,
					message:'添加失败',
				}))
			})
		})		
				
		
	}else if(pathname=='/del'){//get (ajax)
		//1获取参数
		// console.log(parseUrl)
		const id=parseUrl.query.id;
		del(id)//2根据参数删除任务对象 并更改文件
		.then(data=>{//3返回结果
			// console.log(data)
			res.end(JSON.stringify({
				code:0,
				message:"删除成功"
			}))
		})
		.catch(err=>{//3返回结果
			res.end(JSON.stringify({
				code:1,
				message:"删除失败"
			}))
		})
		
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