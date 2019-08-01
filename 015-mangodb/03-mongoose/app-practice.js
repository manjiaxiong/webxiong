//引入mongoose
const mongoose=require('mongoose');
const names=["Amy","LEO","Tom","Lucy","Edmun","Rick","Piter"];
const majors=["Art","Sport","Com","English"];
const getRadom=(min,max)=>{
	return Math.round(min+(max-min)*Math.random())
}
const getName=()=>names[getRadom(0,names.length)]
const getMajor=()=>majors[getRadom(0,majors.length)]
//链接数据库（没有就新建）
mongoose.connect('mongodb://localhost/web',{useNewUrlParser: true});
//获取db对象
const db=mongoose.connection;
//链接成功
//连接失败
db.on('error',()=>{
	console.log("connect is error");
	throw 'connect is error'
})

db.once('open',()=>{
	//定义Schema
	const UserSchema=new mongoose.Schema({
		task:String
	})
	//根据Schema定义数据模型
	const  UserModel=mongoose.model('data',UserSchema);

	// const user=new UserModel({name:"李白",age:19,major:"com"});
	/*
	user.save((err,docs)=>{
		if(err){
			console.log(err)
		}else{
			console.log(docs)
		}
	})
	*/
	// user.save()
	// .then(doc=>{
	// 	console.log(doc)
	// })
	// .catch(err=>{
	// 	console.log(err)
	// })
	UserModel.insertMany(
		[{task:"QWD"},{task:"QSWF"},{task:"QF"},{task:"sfwef"}])
	.then(docs=>{
		console.log(docs)
		console.log(11)
	}).catch(err=>{
		console.log(err)
	})
	// UserModel.create(
	// 	[{name:"libai",age:30,major:"Art"},
	// 	{name:"dufu",age:49,major:"Sport"}
	// 	],(err,docs)=>{
	// 		if(err){
	// 			console.log("insert is error",err)
	// 		}else{
	// 			console.log(docs)
	// 			console.log(22)
	// 		}
	// })
	// let arr=[];
	// 	for(let i=0;i<100;i++){
	// 		arr.push(
	// 				{
	// 					name:getName(),
	// 					age:getRadom(0,150),
	// 					major:getMajor()
	// 				}
	// 			)
	// }
	// UserModel.insertMany(
	// 	arr,(err,docs)=>{
	// 		if(err){
	// 			console.log("insert is error",err)
	// 		}else{
	// 			console.log(docs)
	// 		}
	// })
	// UserModel.find({age:{$gt:135}},"name age ",{sort:{age:1}},(err,docs)=>{
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })
	// UserModel.findById("5d3fabfa6820650d34ac5985","name age ",(err,docs)=>{
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		console.log(docs)
	// 	}
	// })
	// UserModel.find(null,(err,docs)=>{
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		console.log(docs[8].age)
	// 	}
	// })
	// var dos=null;
	//  UserModel.findOne(null,"name age ",(err,docs)=>{
	// 	if(err){
	// 		console.log(err)
	// 	}else{
	// 		// console.log(docs)
	// 		dos=docs
	// 		console.log(docs.age)
	// 	}
	// })
	
})