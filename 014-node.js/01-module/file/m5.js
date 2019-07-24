//定义模块
console.log('in m5')
const str='hello';
const fn=()=>{
	console.log('fn....')
}
const obj={
	name:'tom',
	age:18
}
/*
console.log(exports);
console.log(module.exports)
console.log(module.exports==exports)
*/
//导出
// exports.str=str;
// exports.fn=fn;
// exports.obj=obj;
// console.log(exports)
/*
module.exports.str=str;
module.exports.fn=fn;
module.exports.obj=obj;
module.console.log(exports)
*/
//如果要导出一个对象,只能使用module.exports对象,此时exports对象的值就不会被导出
module.exports={//导出
	str,
	fn,
	obj
}

