import React,{Component} from "react";

class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		// console.log(this.props)
		const {handleDelete,task}=this.props
		return(

			<li onClick={handleDelete}> {task}</li>

			)
	}
}

export default Item