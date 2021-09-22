var http=require('http');
var port=3000;//端口
var hostname='127.0.0.1'//地址
var sever=http.createServer(function(req,res){
	res.end('HELLO XIONGJIAMAN');//页面返回结果
});
sever.listen(port,hostname,function(){
	console.log('http://'+hostname+':'+port);//git 提示
})
