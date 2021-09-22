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
	// UserModel.insertMany({
	// 	name:"Leo",
	// 	age:'88',//只要是==就可以
	// 	major:"Com",
	// 	phone:"18000000000"
	// })
	// .then(docs=>{
	// 	console.log("insert users",docs)
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })
	// BlogModel.insertMany([{
	// 		title:"best blog",
	// 		content:"this is blog1",
	// 		author:"5d410d17c10aa91704bed5b7"
	// 	},{
	// 	title:"best blog",
	// 	content:"this is blog2",
	// 	author:"5d410d17c10aa91704bed5b7"
	// }])
	// .then(docs=>{
	// 	console.log("insert users",docs)
	// })
	// .catch(err=>{
	// 	console.log(err.message)
	// })	
	// UserModel.findOne({name:"Amy"},(err,user)=>{
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		BlogModel.find({author:user._id},(err,blogs)=>{
	// 			if(err){
	// 				console.log(err)
	// 			}else{
	// 				console.log(blogs)
	// 			}
	// 		})
	// 	}
	// })
	UserModel.findOne({name:"Amy"},(err,user)=>{
		if(err){
			console.log(err)
		}else{
			user.findBlogs((err,blogs)=>{
				if(err){
					console.log(err)
				}else{
					console.log(blogs)
				}
			})
		}
	})
})