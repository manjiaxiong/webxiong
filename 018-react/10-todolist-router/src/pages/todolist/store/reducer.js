/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-14 10:59:53
*/
import * as types  from './actionTypes.js'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    list:["吃饭","睡觉"],
    task:''
})
export default (state=defaultState,action)=>{
    
    if(action.type == types.CHANGE_ITEM){
        /*
        const newState = JSON.parse(JSON.stringify(state))
        newState.task = action.payload
        return newState
        */
        return state.set('task',action.payload)//修改单个属性用set
    }
    if(action.type == types.ADD_ITEM){
        /*
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.task)
        newState.task = ''
        return newState
        */
        const list = [...state.get('list')]//获取属性用get
        list.push(state.get('task'))
        return state.merge({//修改多个属性用merge
            list,
            task:''
        })
    }
    if(action.type == types.DEL_ITEM){
        /*
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.payload,1)
        return newState        
        */
        const list = [...state.get('list')]
        list.splice(action.payload,1)
        return state.set('list',list)
    }
    if(action.type == types.LOAD_DATA){
        /*
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.payload
        return newState
        */
        return state.set('list',action.payload)
    }
    return state
}