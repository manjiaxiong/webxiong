const mongoose = require('mongoose');
const UserModel=require('./models/users.js')
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
	//构建测试数据
	//根据名称查询博客详细信息
	/*
	BlogModel.findOne({title:"best blog"},(err,blog)=>{
		if(err){
			console.log(err)
		}else{
			const resulut={}
			resulut.blog=blog;
			UserModel.findBy
		}
	}
	*/
	
	BlogModel.findOne({title:"best blog"})
	.populate('author',"name -_id")//关联的字段
	.then(data=>{
		console.log(data)
	})
	
	// BlogModel.findBlogs({title:"best blog"})
	// .then(data=>{
	// 	console.log(data)
	// })
})