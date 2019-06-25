import {handleActions} from 'redux-actions';

/**
 * 这边是reducer层
 * 创建数据的地方-当然可以多个reducer
 */


interface stateType {
    dataList?:any
}

interface actionType {
    type?:string,
    payload?:any
}



const defaultState = { dataList:[]}
const oneReducers = {}


oneReducers['INIT_DATALIST'] = (state:stateType,action:actionType) => {
    return {
        ...state,
        dataList: action.payload
    }
}



const reducer = handleActions(oneReducers, defaultState);

export default reducer;
