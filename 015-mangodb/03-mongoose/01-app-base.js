const mongoose = require('mongoose');
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
	//1定义Schema(各种数据的类型)
	const UserSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  major:String
	});
	//2根据Schema定义数据模型
	//2.1model方法第一个参数指定集合名称，mongoose会默认将其转换为复数,而且会变成小写
	//2.2model方法第二个参数指定Schema
	const UserModel = mongoose.model('Kitten', UserSchema);
	//3使用模型（CRUD）
	//3.1新增
	// const user=new UserModel({name:"xiong",age:18,major:"Com"})//只能插入单条数据
	// user.save((err,doc)=>{
	// 	if(err){
	// 		console.log("err")
	// 	}else{
	// 		console.log(doc)
	// 	}
	// })
	//3.2查找
	UserModel.find({name:"xiong"},(err,docs)=>{
		if(err){
			console.log("find is err",err)
		}else{
			console.log(docs)
		}
	})
	//3.3更新
	// UserModel.updateOne({name:"xiong"},{$set:{age:20}},(err,result)=>{
	// 	if(err){
	// 		console.log("find is err",err)
	// 	}else{
	// 		console.log(result)
	// 	}
	// })
	// //3.4删除
	// UserModel.deleteOne({name:"xiong"},(err,result)=>{
	// 	if(err){
	// 		console.log("find is err",err)
	// 	}else{
	// 		console.log(result)
	// 	}
	// })
})