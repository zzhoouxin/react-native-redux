import {handleActions} from 'redux-actions';

/**
 * 这边是reducer层
 * 创建数据的地方-当然可以多个reducer
 */


interface stateType {
    count?:number
}

interface actionType {
    type?:string,
    payload?:any
}




const defaultState = { count: 1 ,name:""}
const oneReducers = {}

oneReducers['INCREMENT_2'] = (state:stateType, action:actionType) => {
    return {
        ...state,
        count: state.count + action.payload
    }
}

oneReducers['DECREMENT_2'] = (state:stateType) => {
    return {
        ...state,
        count: state.count - 1
    }
}




const reducer = handleActions(oneReducers, defaultState);

export default reducer;
