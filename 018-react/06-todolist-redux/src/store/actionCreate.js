import {DELETE_ITEM,
		CHANGE_ITEM,
		ADD_ITEM,
		LOAD_DATA}from "./actionType.js"
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
export const getLOADDATA=(payload)=>({
		type:LOAD_DATA,
		payload
	})