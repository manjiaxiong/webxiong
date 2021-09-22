//步骤
//1引入events模块
//2用es6方法继承events模块
//绑定事件
//触发事件
const EventEmitter=require('events');
/*
const emitter =new EventEmitter();
//事件绑定
emitter.on('test',()=>{
	console.log('test fn');
})
//事件触发
emitter.emit('test')
*/
class CustomEmitter extends EventEmitter{

}
const emitter =new CustomEmitter();
//事件绑定
emitter.on('test',()=>{
	console.log('test fn');
})
//事件触发
emitter.emit('test');
