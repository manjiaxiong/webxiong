const {Readable}=require('stream');
class CustomReadr extends Readable{
	//模拟底层数据读取
	constructor(){
		super();
		this.index=0;
	}
	_read(){
		this.index++;
		if(this.index>5){
			this.push(null)
		}else{
			this.push(this.index+'')//不能是数字类型
		}
	}
}
const reader=new CustomReadr();
/*
//步骤1：初始化一个变量用来储存数据
let body='';
//步骤3：监听end事件，在回调函数中使用保存的变量
reader.on('end',()=>{
	console.log(body)
})
//步骤2：监听data事件把每一次获取的数据累加
reader.on('data',(chunk)=>{
body+=chunk
})
*/
//把可读流->标准流输出
reader.pipe(process.stdout)