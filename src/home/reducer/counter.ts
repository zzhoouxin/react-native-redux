import {Constants} from '../constants'

const defaultState = {
    number: 0,
    user: {name: "1"}
}

declare interface ActionType {
    type?: any;
    data?: any;
}


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