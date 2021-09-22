import React,{Component} from 'react';
import "./App.css"
class App extends Component{
	  render(){
	 
        return (
        <div> 
	        <input/> 
	        <button className="btn">提交</button>
	        <ul style={{color:"red"}}>
		        <li>吃饭</li>
		        <li>睡觉</li>
		        <li>敲代码</li>
	        </ul> 
        </div>
        )
    }
}

export default App