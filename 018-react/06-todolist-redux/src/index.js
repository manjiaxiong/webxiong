//多次调用只执行一次
/*
import "./Module.js"
import "./Module.js"
*/
import React from 'react';
import ReactDom from "react-dom";
import App from  "./App.js"



ReactDom.render(<App/>,document.getElementById('root'))




//虚拟DOM测试
/*
function trik(){
	const elem=(
		<div>
			<h1>hellow</h1>
			<p>{new Date().toLocaleTimeString()}</p>
		</div>
		)
	ReactDom.render(elem,document.getElementById('root'))//只有p标签在更新(若用js方法则是整个root在变化)
}
setInterval(trik,1000)
*/