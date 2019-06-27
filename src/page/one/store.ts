// import Api from './webApi';


/**
 * store层做大量的计算操作
 * 异步请求等都在这边进行计算处理
 */
const initDataList = async () => {
    return new Promise((resvole) => {
        let dataList = [{id: 1, name: "异步数据第一条"}, {id: 2, name: "异步数据第二条"}, {id: 3, name: "异步数据第三条"}]
        setTimeout(() => {
            resvole(dataList)
        }, 100)
    })
}


const AppStore = {
    initDataList
}
export default AppStore