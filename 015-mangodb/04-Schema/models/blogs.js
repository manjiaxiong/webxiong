const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({//定义Schema
	  title:{
	  	type:String
	  },
	  content:{
	  	type:String
	  },
	  author:{
	  	type:mongoose.Schema.Types.ObjectId,
	  	ref:'user'//跟user集合联系
	  }
	});
BlogSchema.statics.findBlogs=function(query){
	return this.findOne(query)
	.populate('author',"name -_id")
}
const BlogModel = mongoose.model('blog', BlogSchema);//定义模型
module.exports=BlogModel//导出