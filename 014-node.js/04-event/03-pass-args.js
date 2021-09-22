const EventEmitter=require('events');
class CustomEmitter extends EventEmitter{};
const emitter =new CustomEmitter();
emitter.on('test',(arg1,arg2)=>{
	console.log('get arg1:',arg1);
	console.log('get arg2:',arg2);
})
// emitter.emit('test','aa','bb');
const args=['aa','bb'];
emitter.emit('test',...args);

