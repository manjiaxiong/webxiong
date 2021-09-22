const express = require('express')
const app = express()

app.use(express.static('public'))//默认找到public下面的index.html
app.use('/static',express.static('public'))
app.all("/",(req,res,next)=>{
	console.log("do something.....");
	next();//有next才继续向下直行
	// res.send('all')
})
//users/34/books/88888
app.get('/users/:userId/books/:bookId', (req, res,next) => {//get 返回根 如果有index.html返回index.html的结构
	console.log(req.params);
	next();
},(req,res)=>{
	//.send可以发送多种数据 .end结束返回处理 .json返回多种类型数据
	// res.send('get response B');
	//
	res.send({
		name:"Tom"
	})
});
app.get('/',(req,res)=>{
	console.log(req.query);
	res.send('get response B')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))