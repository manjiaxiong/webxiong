/*
1向文件中增加对象//用a写入

2向文件中获取对象//用read获取 buffer

3向文件中删除对象//
*/
const fs=require('fs');
// const buf=Buffer.alloc(100);
const util=require('util');
writeFile=util.promisify(fs.writeFile);
readFile=util.promisify(fs.readFile);
writeFile('01.txt','hello',{flag:'a'})
.then(data=>{
	console.log('write file sucess')
})
.catch(err=>{
	console.log(err)
})
readFile('01.txt',{flag:'r',encoding:'utf-8'})
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err)
})
// 3删除文件中的对象