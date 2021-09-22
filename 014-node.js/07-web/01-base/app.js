const http=require('http');
//每一次请求都会执行createServer方法中的函数
const server= http.createServer((req,res)=>{
	//req request 可读流
	//res response 可写流
	res.write('hello');
	res.end('good');
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('running in http://127.0.0.1:3000')
})