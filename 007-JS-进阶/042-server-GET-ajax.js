var http=require('http');
var fs=require('fs');
var hostname='127.0.0.1';
var port=3000;
var server=http.createServer(function(req,res){
 	console.log(req.url);
 	var filePath='./'+req.url;
 	fs.readFile(filePath,function(err,data){
 		if(err){
 			res.statusCode=404;
 			res.end('not found');
 		}else{
 			res.statusCode=200;
 			res.end(data);
 		}
 	})
 })
 server.listen(port,hostname,function(){
 	console.log('http://'+hostname+':'+port);
 })