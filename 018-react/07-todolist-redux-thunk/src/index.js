//多次调用只执行一次
/*
import "./Module.js"
import "./Module.js"
*/
import React from 'react';
import ReactDom from "react-dom";
import App from  "./App.js"



ReactDom.render(<App/>,document.getElementById('root'))

 
