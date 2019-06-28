/**
 * 这边代码主要用于统一编写调接口的函数
 */
import Fecht from "../../utils/fetch";

/**
 * 批量加入购物车
 */
const one = () => {
  let body = {};
  return Fecht.Post("/xxx/xxx", body);
};

export default { one };
