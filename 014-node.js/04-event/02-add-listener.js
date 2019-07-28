const EventEmitter=require('events');
class CustomEmitter extends EventEmitter{};
const emitter =new CustomEmitter();
/*
//用on 可以多次触发
emitter.on('test',()=>{
	console.log('test fn1')
})
//用Listener 可以多次触发
emitter.addListener('test',()=>{
	console.log('test fn2')
})
emitter.emit('test');
*/
//用once 不可以多次触发(一次性)
// emitter.once('test',()=>{
// 	console.log('test fn1')
// })
// emitter.emit('test');
// emitter.emit('test');
// console.log(emitter.on==emitter.addListener)true
 emitter.setMaxListeners(11)
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})
emitter.on('test',()=>{
	console.log('test fn1')
})

emitter.emit('test');