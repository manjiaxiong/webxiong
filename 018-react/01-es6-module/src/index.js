//多次调用只执行一次
/*
import "./Module.js"
import "./Module.js"
*/


//引用模块
import {a,b} from "./Module.js"
import {c as c1} from "./Module.js"
import {d1} from "./Module.js"
import e from "./Module.js"//default默认
console.log("here in index....")
console.log("a=",a)
console.log("b=",b)
console.log("c=",c1)
console.log("d1=",d1)
console.log("e=",e)