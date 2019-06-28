import { createAction } from "redux-actions";
import Store from "../store";

/**
 * 这边作为action层
 * 定义action的地方。引入appStore的请求数据
 */

const initDataList = createAction("INIT_DATALIST", Store.initDataList);

const addData = createAction("ADD_DATA", Store.addData);

const actionCreators = {
  initDataList,
  addData
};

export default actionCreators;
