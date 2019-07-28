const EventEmitter=require('events');
class CustomEmitter extends EventEmitter{};
const emitter =new CustomEmitter();
emitter.on('newListener',(eventName,cb)=>{
	console.log('execute newListener fn....')
	console.log(eventName);//新绑定的事件名
	cb()//cb就是新绑定的事件的回调函数
})
emitter.on('text1',()=>{
	console.log('text1.....');
})
emitter.on('text2',()=>{
	console.log('text2....');
})