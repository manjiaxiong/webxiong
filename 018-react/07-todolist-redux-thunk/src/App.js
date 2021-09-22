//注意！！！！ react 返回HTML数据只能返回一个标签（放进一个标签里面或者用一个div/Fragment包裹）
import React,{Component} from 'react';
import store from "./store"//自动去找index.js
import {getChangeAction,getAddAction,getDeleteAction,getRequestInitDataAction}from "./store/actionCreate.js"
import AppUI from "./AppUI.js"

//容器组件
class App extends Component{
		constructor(props){
			super(props)
			/*
			this.state={
				list:["吃饭","睡觉","敲代码"],
				task:''
			}
			*/
			this.state=store.getState()//初始化数据
			this.handleChange=this.handleChange.bind(this);
			this.handleAdd=this.handleAdd.bind(this);
			this.handleDelete = this.handleDelete.bind(this);
			//store里面的state发生改变时触发
			store.subscribe(()=>//
				this.setState(//改变组件里面的state
					store.getState()
				)
			)
		}
		componentDidMount(){//挂载阶段结束时自动触发
			/*
			axios.get("http://127.0.0.1:3000")
			.then(result=>{
				store.dispatch(getLOADDATA(result.data))
			})
			.catch(err=>{
				console.log(err)
			})
			*/
			//发送ajax
			store.dispatch(getRequestInitDataAction())
		}
		handleAdd() {
			/*
			this.setState((preState)=>({//异步
				list:[...preState.list,preState.task],
				task:''
			}))
			*/
			/*
			const action={
				type:add_item
				
			}
			*/
		
			store.dispatch(getAddAction())
		}
		handleChange(ev){
		
			const task=ev.target.value;
			/*
			this.setState(()=>({//异步
				task:task//冒号前面代表的是this.state.task 后面是自定义的 同名可只写一个
			}))
			// console.log(this.state.task)
			*/
			//派发action
			//action就是一个对象
			// const action ={
			// 	type:change_item,
			// 	payload:task
			// }
			
			
			store.dispatch(getChangeAction(task))//把action传递stoe再传给reducer
		}
		handleDelete(index){
			/*
			const list=[...this.state.list];
			list.splice(index,1);//删除下标为index的元素 （改变原数组）
			this.setState(()=>({
				list
			}))
			*/
			/*
			const action ={
				type:delete_item,
				payload:index
			}
			*/
			
			
			store.dispatch(getDeleteAction(index))

		}
		getItems(){

			return this.state.list.map((item,index)=>{
        		return (

        			<Item  key={index} task={item} handleDelete={this.handleDelete.bind(this,index)}/>

        			)
        	})
		}
	  render(){
	  
        return (
        	//UI组件
	        <AppUI
	        task={this.state.task}
	        list={this.state.list}
	        handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            handleAdd={this.handleAdd}
	        />
        )
    }
}

export default App