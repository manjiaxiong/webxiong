var http=require('http');
var fs=require('fs');
var hostname='127.0.0.1';
var url=require('url');
var port=3000;
var server=http.createServer(function(req,res){
 	console.log(req.method);
 	if(req.method=="POST"){
 		var body='';
 		req.on("data",function(chunk){
 			body+=chunk;
 		})
 		req.on("end",function(){
 			console.log(body);
 			res.end(body);
 		})
 	}else if(req.method=="GET"){
 		if(req.url.search(/\?/)!=-1){
			var parm = url.parse(req.url,true).query;
			console.log(parm);
			var objToJSON = JSON.stringify(parm);
			res.end(objToJSON);
 		}else{
 			var filePath='./'+req.url;
 			fs.readFile(filePath,function(err,date){
		 		if(err){ 
		 			res.statusCode=404;
		 			res.end('not found');
		 		}else{
		 			res.statusCode=200;
		 			res.end(date);
		 		}
	 		})
 		}
 		
 	}else{
 		res.end('ok');
 	}	
 })
 server.listen(port,hostname,function(){
 	console.log('http://'+hostname+':'+port);
 })