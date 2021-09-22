const mongoose = require('mongoose');
const moment=require('moment');
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
	UserModel.findById('5d40f5ac4f842f1364f9c416',(err,user)=>{
		if(err){
			console.log(err)
		}else{
			const date=new Date(user.createAt);
			//方法一
			console.log(date.toLocaleTimeString());
			//方法二
			console.log(moment(user.createAt,).format('YYYY - MM - DD HH:mm:ss'));//createdAt表示当前时间
		}
	})
		
})