import { createStore } from 'redux'
import reducer from "./reducer.js"
//创建store 
const store=createStore(reducer)//里面期待一个函数
 
export default store