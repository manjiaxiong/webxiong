const fs=require('fs');
const ws=fs.createWriteStream('./ws.txt');
ws.on('finish',()=>{
	console.log('write data end....');
})
ws.on('open',()=>{
	console.log('stream write open....')
})
ws.on('close',()=>{
	console.log('stream write close....')
})
ws.write('hello');
ws.write('good');
ws.end();