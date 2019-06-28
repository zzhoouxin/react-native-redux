import { Constants } from "../constants";

/**
 * 这边是创建action的地方
 */

/**
 * 增加
 */
function increase() {
  return {
    type: Constants.INCREASE
  };
}

/**
 * 减少
 */
function decrease() {
  return {
    type: Constants.DECREASE
  };
}

/**
 * 定义ts的数据类型
 */
interface userInfo {
  name?: string;
}

/**
 * 修改名称
 */
function getUserInfo(data: userInfo) {
  return {
    type: Constants.USERINFO,
    data
  };
}

function fetch() {
  return async (dispatch: any) => {
    let res: userInfo = await webApi();
    dispatch(getUserInfo(res));
  };
}

function webApi() {
  return new Promise(resvole => {
    setTimeout(() => {
      resvole({ name: "33333" });
    }, 100);
  });
}

export { increase, decrease, fetch };
