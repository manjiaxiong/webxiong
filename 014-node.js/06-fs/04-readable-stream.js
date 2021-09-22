const fs=require('fs');
const rs=fs.createReadStream('./rs.txt');
// rs.on('finish',()=>{
// 	console.log('write data end....');
// })
rs.on('open',()=>{
	console.log('stream read open....')
})
rs.on('close',()=>{
	console.log('stream read close....')
})
rs.on('data',(chunk)=>{
	console.log('chunk:',chunk)
})
rs.on('end',()=>{
	console.log('read is end')
});