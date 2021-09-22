const http=require('http');
const fs=require('fs');
const path=require('path');
const mime=require('./mime.json')
//每一次请求都会执行createServer方法中的函数
const server= http.createServer((req,res)=>{
	// console.log('url:',req.url)
	const filePath = path.normalize(__dirname+'/static'+req.url);
	// console.log(filePath)
	//1读取文件
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
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000')
})
