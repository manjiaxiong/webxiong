const express = require('express')
const app = express()
const swig=require('swig')
app.use(express.static('public'))//默认找到public下面的index.html
// app.use('/static',express.static('public'))
//开发阶段设置不走缓存
swig.setDefaults({
	// cache:'memory'(设置缓存)
  	cache: false
})


//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile);

//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views', './views')

//第一个参数必须是view engine
//第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html')

app.get("/",(req,res)=>{
	res.render("index",{

	})
})
app.get("/layout",(req,res)=>{
	res.render("layout",{
		
	})
})
app.get("/list",(req,res)=>{
	res.render("list")
})

app.get('/base',(req,res)=>{
    
    //4.渲染模板
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('base',{
        title:'跨猪网',
        content:'我是内容',
        name:"aefd",
        obj:{
        	name:"Leo"
        },
        arr:["Amy","Kijh","222222222","d32wf2"]
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))