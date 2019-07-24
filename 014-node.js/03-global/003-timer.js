// const t1=setTimeout(()=>{
// 	console.log('execute t1...');
// },100);
// clearTimeout(t1);
// console.log('alert t1')
// const t2=setInterval(()=>{
// 	console.log('execute t2...');
// },100);
// clearTimeout(t2);
const t3=setTimeout(()=>{
	console.log('execute t3...');
},100);
process.nextTick(()=>{//优先级在immediate之上（同步结束后先执行）
	console.log('nextTick')
}) 
const t4=setImmediate(()=>{
	console.log('execute t4...');
},100);
console.log('alert t4')
