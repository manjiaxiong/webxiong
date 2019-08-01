const mongoose = require('mongoose');
const BlogModel=require('./models/blogs.js')
//1.连接数据库(连接到数据库kuazhu  （没有就新建）)
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});
//获取db对象
const db = mongoose.connection;
//连接失败
db.on('error',()=>{
	console.log('connect db error');
	throw 'connect db error'
})
//连接成功
db.once('open',()=>{
	BlogModel.insertMany({
		type:"best blog",
		content:"this is a blog",
		author:"5d40f5ac4f842f1364f9c416"
	})
	.then(docs=>{
		console.log("insert users",docs)
	})
	.catch(err=>{
		console.log(err.message)
	})
		
})