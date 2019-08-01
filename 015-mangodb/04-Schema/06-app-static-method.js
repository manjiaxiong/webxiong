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
	//通过电话号码查找
	// UserModel.findOne({phone:"13000000000"},(err,user)=>{
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		console.log(user)
	// 	}
	// })
	UserModel.findByPhone('13000000000',(err,user)=>{
		if(err){
			console.log(err)
		}else{
			console.log(user)
		}

		})
})