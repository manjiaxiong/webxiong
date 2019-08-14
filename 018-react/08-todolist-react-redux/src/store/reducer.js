const defaultState={
		list:[],
		task:''
}
/*
1：reducer是一个函数，并且是一个纯函数（固定的输入就会有固定的输出），主要是用来处理业务数据
2：reducer需要返回一个新的state对象，并且不能更改参数中传递过来的state，
原因是传递过来的state是store中的state，所有组件中state都共享store中的state，
这个state有store来维护，store根据reducer返回新的state来更改自己的state，在组件中getState()
返回的是store中的state

*/
export default (state=defaultState,action)=>{
	console.log("state action",state,action)
	if(action.type=="change_item"){
		//错误的写法
		//state.task=action.payload
		const newState=JSON.parse( JSON.stringify(state))
		newState.task=action.payload
		return newState//传递至store后改变了它的task值
	}
	
	if(action.type=="add_item"){
		//错误的写法
		//state.task=action.payload
		const newState=JSON.parse( JSON.stringify(state))
		newState.list.push(state.task);
		newState.task=''
		return newState
	}
	if(action.type=="delete_item"){
	
		//错误的写法
		//state.task=action.payload
		const newState=JSON.parse( JSON.stringify(state))
		newState.list.splice(action.payload,1)
		return newState
	}
	if(action.type=="load_data"){
		const newState=JSON.parse( JSON.stringify(state))
		newState.list=action.payload
		return newState
	}
	return state//返回state （就是store的getState方法的结果）
}