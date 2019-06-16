var http = require('http');
var fs=require('fs');//读文件模块
var hostname='127.0.0.1';
var port=3000;
var server = http.createServer(function (req, res) {
		console.log(req.url);
	if(req.url == "/favicon.ico"){//容错处理因为图标也请求一次
		res.end("favicon.ico");
	}
	var filePath  = "./" + req.url;//用户输入的地址
	fs.readFile(filePath,function(err,data){
		if(err){
			res.statusCode = 404;
			res.end("not found!!!");
		}else{
			res.statusCode = 200
			res.end(data);
		}
	})
});

server.listen(port,hostname, function(){
  console.log('Server running at http://'+hostname+':'+port);//git 运行提示
});