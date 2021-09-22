import {DELETE_ITEM,
		CHANGE_ITEM,
		ADD_ITEM,
		LOAD_DATA}from "./actionType.js"
import axios from "axios"//发送ajax的组件
export	const getChangeAction=(task)=>({
				type:CHANGE_ITEM,
				payload:task
})
export const getAddAction=()=>({
	type:ADD_ITEM
})
export const getDeleteAction=(index)=>({
	type:DELETE_ITEM,
	payload:index
})
const getLOADDATA=(payload)=>({
		type:LOAD_DATA,
		payload
	})
export const getRequestInitDataAction = ()=>{
    return (dispatch,getState)=>{
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            dispatch(getLOADDATA(result.data))//此时才是真正的向store发送action
        })
        .catch(err=>{
            console.log(err)
        })        
    }
}