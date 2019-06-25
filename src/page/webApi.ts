import Fecht from './../utils/fetch';

/**
 * 批量加入购物车
 */
 const one =  () => {
    let body = {"osType":1,"appVersion":"5.4.0","timestamp":1561375106369,"deviceType":"iPhone Simulator","width":750,"parterValue":100,"accessToken":"2120BB18DADDA5E63375C2532D892831","systemVersion":"12.1","deviceToken":"79CB7F6B-3529-4E5B-A620-45E8AC3A26EC","mobileNum":"13200000092","type":2};
    return Fecht.Post("/productprogram/queryUserHouseList",body);;
}




export default {one};