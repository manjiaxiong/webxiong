const mongoose = require('mongoose');
const UserModel=require('./models/users.js');//获取UserModel
//1.连接数据库(连接到数据库kuazhu  （没有就新建）)
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});
//获取db对象
const db = mongoose.connection;
//连接失败
db.on('error',(err)=>{
	console.log('connect db error',err);
	throw 'connect db error'
})
//连接成功
db.once('open',()=>{

	UserModel.distinct("name",{age:{$gt:80}},(err,docs)=>{
		if(err){
			console.log("find is err",err)
		}else{
			console.log("distinct:::",docs)
		}
	})

})