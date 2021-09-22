const fs=require('fs');
const util=require('util')
//同步
	//1.1逐步操作
		/*
		//1.1.1打开文件
			const fd=fs.openSync('01.txt','a');//返回表示文件描述符的整数
				//用w没有文件会自动生成
			// console.log(fd);
		//1.1.2写入文件
			fs.writeSync(fd,'hello');//返回字节数
		//1.1.3关闭文件
			fs.closeSync(fd)
		*/
	//1.2合并操作
		// fs.writeFileSync('01.txt','hello',{flag:'a'})
//异步
	//2.1逐步操作
		
		//2.1.1打开文件
			fs.open('01.txt','w',(err,fd)=>{
				if(err){
					console.log('open file err',err)
				}else{
					// console.log(fd)
					//2.1.2写入文件
					fs.write(fd,'你好',(err)=>{
							if(err){
								console.log('write file err',err)
							}else{
								console.log('write file sucess')
							}
						})
					//2.1.3关闭文件
					fs.close(fd,err=>{
						if(err){
							console.log('close file err',err)
						}else{
							console.log('close file success')
						}
					})
				}
					});//返回表示文件描述符的整数
					// console.log(fd);
				
	//2.2合并操作
		// fs.writeFile('01.txt','hello',{flag:'a'},err=>{
		// 	if(err){
		// 		console.log('writeFile is err')
		// 	}else{
		// 		console.log('writeFile is sucess')
		// 	}
		// })
	//3promise处理异步
		const writeFile=util.promisify(fs.writeFile);
		writeFile('01.txt','hello',{flag:'a'})
		.then(data=>{
			console.log('write file sucess')
		})
		.catch(err=>{
			console.log('write file err')
		})
		