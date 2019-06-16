var http=require('http');
var fs=require('fs');
var port=3000;
var hostname='127.0.0.1';
var server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url=="/favicon.ico"){
		res.end("/favicon.ico")
	}
	var filePath='./'+req.url;
	fs.readFile(filePath,function(err,date){//读取文件
		if(err){
			res.statusCode=404;
			res.end('not found');
		}else{
			res.end(date);
		}
	})
})
server.listen(port,hostname,function(){
	console.log('http://'+hostname+':'+port);
})