//注意！！！！ react 返回HTML数据只能返回一个标签（放进一个标签里面或者用一个div/Fragment包裹）
import React,{Component} from 'react';
import "./App.css"
import {Button,Input,Row,Col,List} from 'antd';
/*
class AppUI extends Component{
		
	  render(){
        return (
	        <div className="App"> 
	        	<Row>
		        	<Col span={18}>
			        	<Input onChange={this.props.handleChange} value={this.props.task}/>
			        </Col>
			        <Col span={6}>
		        	<Button type="primary" onClick={this.props.handleAdd}>提交</Button>
		        	</Col>

	        	</Row>
	        	  <List
				      style={{marginTop:20}}
				      bordered
				      dataSource={this.props.list}
				      renderItem={(item,index) => (
				        <List.Item
				        	onClick={()=>{this.props.handleDelete(index)}}
				        >
				         {item}
				        </List.Item>
				      )}
				    />
	        </div>
        )
    }
}
*/
const AppUI=(props)=>{
	const {task,list,handleDelete,handleChange,handleAdd}=props
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
export default AppUI