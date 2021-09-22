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
	
	UserModel.find({age:{$gt:140}},"name age ",(err,docs)=>{
		if(err){
			console.log("find is err",err)
		}else{
			console.log(docs)
		}
	})
	// UserModel.find({age:{$gt:140}},"name age -_id",{limit:1},(err,docs)=>{
	// 	if(err){
	// 		console.log("find is err",err)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })
	// UserModel.find({age:{$gt:140}},"name age -_id",{skip:1},(err,docs)=>{
	// 	if(err){
	// 		console.log("find is err",err)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })
	// 	UserModel.find({age:{$gt:140}},"name age -_id",{sort:{age:1}},(err,docs)=>{
	// 	if(err){
	// 		console.log("find is err",err)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })
	// UserModel.findById("5d3eba4cec647f0e1852a9e1","name age -_id",(err,docs)=>{
	// 	if(err){
	// 		console.log("find is err",err)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })
	// UserModel.findOne({age:{$gt:140}},"name age -_id",(err,docs)=>{
	// 	if(err){
	// 		console.log("find is err",err)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })

})