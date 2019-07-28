const fs=require('fs');
const util=require('util')
//同步
	//1.1逐步操作
		/*
		//1.1.1打开文件
			const fd=fs.openSync('01.txt','r');//返回表示文件描述符的整数
			//用r没有文件会报错
			console.log(fd)
		//1.1.2读出文件内容
			//准备一个buffer容器	
			const buf=Buffer.alloc(100)
			fs.readSync(fd,buf,0,50,0)//三个数字：1是 buffer 中开始写入的偏移量。2：是一个整数，指定要读取的字节数3： 参数指定从文件中开始读取的位置
			console.log(buf.toString());
		//1.1.3关闭文件
		fs.closeSync(fd)
		*/
	//1.2合并操作
	// const data=	fs.readFileSync('01.txt',{encoding:'utf-8'})
	// console.log(data)
//异步
	//2.1逐步操作
	
		//2.1.1打开文件
			// const buf=Buffer.alloc(100);
			// fs.open('01.txt','r',(err,fd)=>{
			// 	if(err){
			// 		console.log('open file err')
			// 	}else{
			// 		// console.log(fd)
			// 		//2.1.2读出文件内容
			// 		fs.read(fd,buf,0,50,0,err=>{
			// 			if(err){
			// 				console.log('read is err')
			// 			}else{
			// 				console.log('read is success');
			// 				console.log(buf.toString());
			// 			}
			// 		})
			// 		// //2.1.3关闭文件
			// 		fs.close(fd,err=>{
			// 			if(err){
			// 				console.log('close is err')
			// 			}else{
			// 				console.log('close is success')
			// 			}
			// 		});
			// 	}
			// })
		
		
	//2.2合并操作
		fs.readFile('01.txt',{flag:'r',encoding:'utf-8'},(err,data)=>{
			if(err){
				console.log('read is err')
			}else{
				console.log(data)
			}
		})
	//3promise处理异步
		// const readFile=util.promisify(fs.readFile)
		// readFile('01.txt',{flag:'r'})
		// .then(data=>{
		// 	console.log(data.toString())
		// })
		// .catch(err=>{
		// 	console.log('err')
		// })