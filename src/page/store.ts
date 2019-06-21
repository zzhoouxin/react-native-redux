/**
 * store层做大量的计算操作
 * 异步请求等都在这边进行计算处理
 */
const fetch = async () => {
    let res = await webApi();
    return res;
}

const webApi = async () => {
    return new Promise((resvole) => {
        setTimeout(() => {
            resvole(11)
        }, 100)
    })
}


const AppStore = {
    fetch, webApi
}

export default AppStore