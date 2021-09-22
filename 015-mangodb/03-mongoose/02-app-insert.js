const mongoose = require('mongoose');
const names=["Amy","LEO","Tom","Lucy","Edmun","Rick","Piter"];
const majors=["Art","Sport","Com","English"];
const getRadom=(min,max)=>{
	return Math.round(min+(max-min)*Math.random())
}
const getName=()=>names[getRadom(0,names.length)]
const getMajor=()=>majors[getRadom(0,majors.length)]
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
	// const user=new UserModel({name:"xiong",age:18,major:"Com"})//一条一条创建
	// user.save((err,doc)=>{
	// 	if(err){
	// 		console.log("err")
	// 	}else{
	// 		console.log(doc)
	// 	}
	// })
	/*
	user.save()
	.then(doc=>{
		console.log(doc)
	})
	.catch(err=>{
		console.log(err)
	})
	*/
	/*方法一
	UserModel.insertMany(
		[{name:"PE",age:30,major:"Art"},
		{name:"Leo",age:49,major:"Sport"}
		],(err,docs)=>{
			if(err){
				console.log("insert is error",err)
			}else{
				console.log(docs)
			}
	})
	*/
	//方法二
	// UserModel.insertMany(
	// 	[{name:"PE",age:30,major:"Art"},
	// 	{name:"Leo",age:49,major:"Sport"}
	// 	])
	// .then(docs=>{
	// 	console.log(docs)
	// }).catch(err=>{
	// 	console.log(err)
	// })
	//方法三(也可以用promise方法)
	// UserModel.create(
	// 	[{name:"libai",age:30,major:"Art"},
	// 	{name:"dufu",age:49,major:"Sport"}
	// 	],(err,docs)=>{
	// 		if(err){
	// 			console.log("insert is error",err)
	// 		}else{
	// 			console.log(docs)
	// 		}
	// })
	let arr=[];
	for(let i=0;i<100;i++){
		arr.push(
				{
					name:getName(),
					age:getRadom(0,150),
					major:getMajor()
				}
			)
	}
	UserModel.insertMany(
		arr,(err,docs)=>{
			if(err){
				console.log("insert is error",err)
			}else{
				console.log(docs)
			}
	})
})