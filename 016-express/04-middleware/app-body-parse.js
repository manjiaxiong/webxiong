const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const querystring=require('querystring');
app.use(express.static('public'))//默认找到public下面的index.html
//解析json
app.use(bodyParser.json());
//解析urlencoded内容
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/',(req, res) =>{

	/*
	let body='';
	req.on('end',()=>{
		console.log(querystring.parse(body))
	})
	req.on('data',(chunk)=>{
		body+=chunk;
		console.log(11)
	})
	*/
	
	console.log(req.body)
	res.json({
		code:0
	})
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))