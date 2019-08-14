import React,{Component} from "react";
class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		return(

			<li onClick={this.props.handleDelete}> {this.props.task}</li>

			)
	}
}
export default Item