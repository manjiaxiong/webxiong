//注意！！！！ react 返回HTML数据只能返回一个标签（放进一个标签里面或者用一个div/Fragment包裹）
import React,{Component} from 'react';
import "./App.css"
import Item from './Item.js'
class App extends Component{
		constructor(props){
			super(props)
			this.state={
				list:["吃饭","睡觉","敲代码"],
				task:''
			}
		}
		handleAdd(){

			// console.log(this)
			// console.log('btn click')
			//数据驱动页面变化
			this.setState({//异步
				list:[...this.state.list,this.state.task],
				task:''
			})
			
		}
		handleChange(ev){
			// console.log(ev.target.value)
			//数据驱动页面变化
			// this.setState({
			// 	task:ev.target.value
			// })
			const task=ev.target.value;
			this.setState((preState)=>({//异步
				task:task//冒号前面代表的是this.state.task 后面是自定义的 同名可只写一个
			}))
			// console.log(this.state.task)

		}
		handleDelete(index){
			const list=[...this.state.list];
			list.splice(index,1);//删除下标为index的元素 （改变原数组）
			this.setState({
				list
			})

		}
	  render(){
        return (
        <div className="App"> 
	        <input onChange={this.handleChange.bind(this)} value={this.state.task}/> 
	        <button onClick={this.handleAdd.bind(this)}>提交</button>
	        <ul>
		        {
		        	this.state.list.map((item,index)=>{
		        		return (
		        			// <li
			        		// 	 key={index} 
			        		// 	 onClick={this.handleDelete.bind(this,index)}
		        			//  >
		        			// {item}
		        			// </li>
		        			<Item  key={index} task={item} handleDelete={this.handleDelete.bind(this,index)}/>
		        			)
		        	})
		        }
	        </ul> 
        </div>
        )
    }
}

export default App