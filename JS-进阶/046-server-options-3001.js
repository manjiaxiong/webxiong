var http = require('http');

var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
	console.log(req.method);
	//允许访问源
	res.setHeader("Access-Control-Allow-Origin",'http://127.0.0.1:3000');
	//允许访问的方法
	res.setHeader("Access-Control-Allow-Methods",'PUT')
	//允许头信息字符段发送
	res.setHeader("Access-Control-Allow-Headers","kuazhu-com")
	//允许访问字符段 
	res.setHeader("Access-Control-Expose-Headers",'Date,Connection');
	//自定义字符段
	res.setHeader("Content-Type",'application/x-www-form-urlencoded');
	if(req.url == "/favicon.ico"){
		res.end("favicon.ico");
	}

	if(req.method == "POST"){
		var body = "";
		req.on("data",function(chunk){
			body += chunk;
		})
		req.on("end",function(){
			console.log(body);
			res.end(body);
		});
	}else if(req.method == "GET"){
		if(req.url.search(/\?/) != -1){
			var parm = url.parse(req.url,true).query;
			console.log(parm);
			var objToJSON = JSON.stringify(parm);
			res.end(objToJSON);
		}else{
			var filePath  = "./" + req.url;
			fs.readFile(filePath,function(err,data){
				if(err){
					res.statusCode = 404;
					res.end("not found!!!");
				}else{
					res.end(data);
				}
			})
		}
	}else{
		res.end('ok');
	}
});
server.listen(3001,"127.0.0.1",function(){
	console.log("server is running at http://127.0.0.1:3001");
});