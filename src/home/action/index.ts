import {Constants} from '../constants'


function increase() {
    return {
        type: Constants.INCREASE
    }
}


function decrease() {
    return {
        type: Constants.DECREASE
    }
}


interface userInfo {
    name?: string
}

function getUserInfo(data: userInfo) {
    return {
        type: Constants.USERINFO, data
    }
}

function fetch() {
    return async (dispatch: any) => {
        let res:userInfo = await webApi();
        dispatch(getUserInfo(res))

    }
}


function webApi() {
    return new Promise((resvole) => {
        setTimeout(() => {
            resvole({name: "33333"})
        }, 100)
    })
}


export {increase, decrease, fetch}