import React,{Component} from "react";
import PropTypes from 'prop-types';//类型方法
class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		// console.log('Item render')
		// console.log(this.props)
		const {handleDelete,task}=this.props
		return(
			<li onClick={handleDelete}>{task}</li>

			)
	}
}
Item.propTypes = {//规定类型及是否必须引入
    handleDelete:PropTypes.func,
    task:PropTypes.string.isRequired
}

Item.defaultProps = {//设施默认值
    task:'Hello'
}
export default Item