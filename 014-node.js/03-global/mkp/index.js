//指定项目名称，创建前端项目的目录结构
//1获取名称
const fs=require('fs');

// const pathName=process.argv[2];
// // console.log(pathName)
// //2根据名称生成文件
// fs.mkdirSync(pathName);
// fs.mkdirSync(pathName+'/css');
// fs.mkdirSync(pathName+'/js');
// fs.mkdirSync(pathName+'/images');
//封装函数
function mkp(){
	const pathName=process.argv[2];
	// console.log(pathName)
	//2根据名称生成文件
	fs.mkdirSync(pathName);
	fs.mkdirSync(pathName+'/css');
	fs.mkdirSync(pathName+'/js');
	fs.mkdirSync(pathName+'/images');
}
module.exports=mkp;
mkp();