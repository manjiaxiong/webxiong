const { Writable } = require('stream');
// console.log(Writable)
class CustoWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log('chunk：',chunk.toString())
		console.log('encoding:',encoding)
		callback&&callback()
	}
};
const write=new CustoWriter();
write.on('finish',()=>{
	console.log('write done')
})
write.write('hello','',()=>{
	console.log('after write hello')
})
write.end('yes')