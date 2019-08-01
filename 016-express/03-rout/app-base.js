const express = require('express')
const app = express()

app.use(express.static('public'))//默认找到public下面的index.html
app.use('/static',express.static('public'))
app.all("/",(req,res,next)=>{
	console.log("do something.....");
	next();//有next才继续向下直行
	// res.send('all')
})
app.get('/', (req, res,next) => {//get 返回根 如果有index.html返回index.html的结构
	console.log('get response A');
	next();
},(req,res)=>{
	res.send('get response B')
});
app.post('/', (req, res) => res.send('post response '));
app.put('/', (req, res) => res.send('put response '));
app.delete('/', (req, res) => res.send('delete response '));

app.listen(3000, () => console.log('Example app listening on port 3000!'))