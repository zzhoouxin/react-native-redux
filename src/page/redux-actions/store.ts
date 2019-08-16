// import Api from './webApi';

/**
 * store层做大量的计算操作
 * 异步请求等都在这边进行计算处理
 */
const initDataList = async () => {
  return new Promise(resvole => {
    let dataList = [
      { id: 1, name: "异步数据第一条" },
      { id: 2, name: "异步数据第二条" },
      { id: 3, name: "异步数据第三条" }
    ];
    setTimeout(() => {
      resvole(dataList);
    }, 5000);
  });
};

/**
 * 点击异步正价额外的数据
 * 异步请求等都在这边进行计算处理
 */
const addData = async () => {
  return new Promise(resvole => {
    let dataList = {
      id: Math.random(),
      name: `这是额外添加的数据${Math.random()}`
    };
    setTimeout(() => {
      resvole(dataList);
    }, 100);
  });
};

const AppStore = {
  initDataList,
  addData
};
export default AppStore;
