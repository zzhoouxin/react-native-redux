/**
 * 这边的代码是专门处理redux方面的
 * 集成中间件以及生成数据源
 */

import reduders from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";

// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const loggerMiddleware = createLogger({ collapsed: true });
// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware, promiseMiddleware];
//合并所有的reducers
const composedReducer = combineReducers(reduders);
//创建数据源--并且集成到redux-devtools 方便调试
const Store = createStore(
  composedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
