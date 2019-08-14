//注意！！！！ react 返回HTML数据只能返回一个标签（放进一个标签里面或者用一个div/Fragment包裹）
import React,{Component} from 'react';
import { connect } from 'react-redux'
import {getChangeAction,getAddAction,getDeleteAction,getRequestInitDataAction}from "../../store/actionCreate.js"
import "./App.css"
import {Button,Input,Row,Col,List} from 'antd';
//容器组件

class App extends Component{
		componentDidMount(){
	        this.props.handleInit()
	    }
	  render(){
        const {task,list,handleDelete,handleChange,handleAdd,handleInit}=this.props
		return (
		        <div className="App"> 
		        	<Row>
			        	<Col span={18}>
				        	<Input onChange={handleChange} value={task}/>
				        </Col>
				        <Col span={6}>
			        		<Button type="primary" onClick={handleAdd}>提交</Button>
			        	</Col>
		        	</Row>
		        	  <List
					      style={{marginTop:20}}
					      bordered
					      dataSource={list}
					      renderItem={(item,index) => (
					        <List.Item
					        	onClick={()=>{handleDelete(index)}}
					        >
					         {item}
					        </List.Item>
					      )}
					    />
		        </div>
	        )
    }
}
//映射属性到组件
const mapStateToProps = (state)=>{//因为App.js被Provider包裹 又因为Provider里面传入了store所以可以拿到state
	//属性改变就会再调用
    return {
      task:state.task,
      list:state.list  
    }    
}

//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
    handleChange:(ev)=>{
        const task = ev.target.value
        dispatch(getChangeAction(task))
    },
    handleAdd:()=>{
        dispatch(getAddAction())
    },
    handleDelete:(index)=>{
        dispatch(getDeleteAction(index))
    },
    handleInit:()=>{
        dispatch(getRequestInitDataAction())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(App)