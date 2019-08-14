//注意！！！！ react 返回HTML数据只能返回一个标签（放进一个标签里面或者用一个div/Fragment包裹）
import React,{Component} from 'react';
import "./App.css"
import Item from './Item.js'
class App extends Component{
		constructor(props){
			console.log('App constructor')//生命周期-创建-第一步
			super(props)
			this.state={
				list:["吃饭","睡觉","敲代码"],
				task:''
			}
			this.handleChange=this.handleChange.bind(this)
			this.handleAdd=this.handleAdd.bind(this)
		}
	

		static getDerivedStateFromProps(props, state){//生命周期-创建-第二步
			//生命周期-更新-第一步
			//多用于如果props有变化,需要更新state的场景,该方法返回state的更新
			console.log("etDerivedStateFromProps(props, state)",props,state)
			//把return的数据与当前的state合并 不合并可以return一个空对象/null
			/*
			return{
				task:'hellow'
			}
			*/
			return null
		}
		shouldComponentUpdate(nextProps, nextState){
			//提高效率 避免不必要更新
			console.log("shouldComponentUpdate(nextProps, nextState)",nextProps, nextState);
			if(nextState.task=='l'){
				return false//控制是否更新DOM(数据是一直更新的)
			}else{
				return true
			}
			
		}
		getSnapshotBeforeUpdate(prevProps, prevState){
			console.log("getSnapshotBeforeUpdate(prevProps, prevState)",prevProps, prevState)
			return 123
		}
		componentDidUpdate(prevProps, prevState,snapshot){
			// console.log(this.state)
			console.log("componentDidUpdate(prevProps, prevState,snapshot)",prevProps, prevState,snapshot)
		}
		componentDidMount(){//生命周期-创建-第四步
			//组件挂载完毕执行,多用于发送ajax获取数据
			console.log("componentDidMount")
		}
		componentWillUnmount(){
			//清除处理
			console.log("componentWillUnmount")
		}
		handleAdd(){
			// console.log(this)
			// console.log('btn click')
			//数据驱动页面变化
			
			this.setState((preState)=>({//异步
				list:[...preState.list,preState.task],
				task:''
			}),()=>{console.log("2::::",this.ul.children)})
			// console.log("1:::",this.ul.children)
			
		}
		handleChange(ev){
		
			const task=ev.target.value;
			this.setState(()=>({//异步
				task:task//冒号前面代表的是this.state.task 后面是自定义的 同名可只写一个
			}))
			// console.log(this.state.task)

		}
		handleDelete(index){
			const list=[...this.state.list];
			list.splice(index,1);//删除下标为index的元素 （改变原数组）
			this.setState(()=>({
				list
			}))

		}
		getItems(){

			return this.state.list.map((item,index)=>{
        		return (

        			<Item  key={index} task={item} handleDelete={this.handleDelete.bind(this,index)}/>

        			)
        	})
		}
	  render(){//生命周期-创建-第三步
	  	console.log('App render')
	  	console.log(111)
        return (
        <div className="App"> 
	        <input onChange={this.handleChange} value={this.state.task}/> 
	        <button onClick={this.handleAdd}>提交</button>
	        <ul ref = {(ul)=>{this.ul = ul}}>  
		        {
		        	// this.state.list.map((item,index)=>{
		        	// 	return (
		        	// 		<Item  key={index} task={item} handleDelete={this.handleDelete.bind(this,index)}/>
		        	// 		)
		        	// })
		        	this.getItems()
		        }
	        </ul> 
        </div>
        )
    }
}

export default App