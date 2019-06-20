import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduders from '../reducer';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const loggerMiddleware = createLogger({collapsed: true});
// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware];
//合并所有的reducers
const composedReducer = combineReducers(reduders)
//创建数据源
const Store = createStore(
    composedReducer, composeWithDevTools(applyMiddleware(...middleware))
)

export default Store