const express = require('express')
const app = express()

app.use(express.static('public'))//默认找到public下面的index.html
// app.use('/static',express.static('public'))
app.use((req,res,next)=>{
	console.log('do something A');
	// res.send('task A done');
	 next()// next() 方法将控制权交给下一个中间件，否则请求就会挂起。
})
app.use((req,res,next)=>{
	console.log('do something B');
	// res.send('task B done');
	 next()// next() 方法将控制权交给下一个中间件，否则请求就会挂起。
})
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))