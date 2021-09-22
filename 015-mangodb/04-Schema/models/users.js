const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({//定义Schema
	  name:{
	         type:String,
	         required:[true,"姓名必须有"],
	         minlength:[3,"用户名最小长度为三个字符"],
	         maxlength:[10,"用户名最大长度为十个字符"]
		},
	  age:{
	  		type:Number,
	  		min:[10,"年龄最小值为10"],
	  		max:[150,"年龄最大值为150"]
	 	 },
	  major:{
	         type:String,
	         enum:["Art","Sport","Com"]
		},
	  phone:{
			type:String,
			validate:{
				validator:function(val){
					return /1[358]\d{9}/.test(val);
				},
				message:"不是合法手机号"
			}
		},
	  isLocked:{
			type:Boolean,
			default:false
		},
	  createAt:{
			type:Date,
			default:Date.now()
		},
		friends:{
			type:Array//默认有一个空数组
		} 
	});
//注意不能用箭头函数因为要用到调用时的对象
UserSchema.methods.findBlogs=function(cb){//在UserSchema上定义一个实例函数
	// console.log(this)//实例方法中this是实例
	//this.model("blog")相当于BlogModel
	//this.model("user")相当于UserModel
	this.model('blog').find({author:this._id},cb)
}
UserSchema.statics.findByPhone=function(val,cb){
	//静态方法中 this指的是这个模型(UserModel)
	console.log(this==this.model('user'))
	this.findOne({phone:val},cb)
}
const UserModel = mongoose.model('user', UserSchema);//定义模型
module.exports=UserModel//导出