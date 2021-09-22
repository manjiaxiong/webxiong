const EventEmitter=require('events');
class CustomEmitter extends EventEmitter{};
const emitter =new CustomEmitter();
const listener=(arg1,arg2)=>{
	console.log('get arg1:',arg1);
	console.log('get arg2:',arg2);
}
emitter.on('test',listener)
console.log(emitter.removeListener==emitter.off)
const args=['aa','bb'];
emitter.off('test',listener);
emitter.emit('test',...args);