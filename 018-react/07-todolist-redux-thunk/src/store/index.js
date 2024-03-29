import { createStore,applyMiddleware } from 'redux'
import reducer from "./reducer.js"
import thunk from 'redux-thunk'//引入中间件
import { createLogger } from 'redux-logger'

 
const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({

    })
    middlewares.push(logger)
}

//创建store
const store = createStore(reducer,applyMiddleware(...middlewares))
export default store