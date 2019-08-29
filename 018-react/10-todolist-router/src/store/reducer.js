/*
* @Author: TomChen
* @Date:   2019-08-12 10:29:05
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-14 10:59:09
*/
import { combineReducers } from 'redux-immutable'//让整个store的数据都变成immutable数据
import { reducer as todolistReducer } from '../pages/todolist/store'

export default combineReducers({//把各种reducer合并
    todolist:todolistReducer
})
