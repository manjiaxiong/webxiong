const express = require('express')
const app = express()

app.use(express.static('public'))//默认找到public下面的index.html
app.use('/static',express.static('public'))

//users/34/books/88888
app.get('/users/:userId/books/:bookId', (req, res,next) => {//get 返回根 如果有index.html返回index.html的结构
	console.log(req.params);
	next();
},(req,res)=>{
	res.send('get response A')
});
app.get('/',(req,res)=>{
	console.log(req.query);
	res.send('get response B')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))