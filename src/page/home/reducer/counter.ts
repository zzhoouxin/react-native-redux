import {Constants} from '../constants'

/**
 * 这边代码为reducer层
 */


/**
 * 初始化数据源
 */
const defaultState = {
    number: 0,
    user: {name: "1"}
}

/**
 * 定义ts的类型
 */
declare interface ActionType {
    type?: any;
    data?: any;
}


/**
 * 处理reducer的数据
 * @param state
 * @param action
 */
const reducer = (state = defaultState, action: ActionType) => {
    switch (action.type) {
        case Constants.INCREASE:
            return {...state, number: state.number + 1}
        case Constants.DECREASE:
            return {...state, number: state.number - 1}
        case Constants.USERINFO:
            return {...state, user: action.data}

        default:
            return state
    }
}

export default reducer