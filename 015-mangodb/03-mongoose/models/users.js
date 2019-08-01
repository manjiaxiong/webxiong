const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({//定义Schema
	  name: String,
	  age:Number,
	  major:String
	});
const UserModel = mongoose.model('user', UserSchema);//定义模型
module.exports=UserModel//导出