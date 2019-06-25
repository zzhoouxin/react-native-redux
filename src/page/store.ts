import Api from './webApi';


/**
 * store层做大量的计算操作
 * 异步请求等都在这边进行计算处理
 */
const initDataList = async () => {
    let res:any = await Api.one();
    if (res && res.code !== 1) return false;
    let {houseList} = res.obj;
    return houseList;
}


const AppStore = {
    initDataList
}
export default AppStore