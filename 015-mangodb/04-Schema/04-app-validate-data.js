const mongoose = require('mongoose');
const UserModel=require('./models/users.js')
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
	UserModel.insertMany({
		name:"Amy",
		age:'21',//只要是==就可以
		major:"Art",
		phone:"13000000000"
	})
	.then(docs=>{
		console.log("insert users",docs)
	})
	.catch(err=>{
		console.log(err.message)
	})
		
})