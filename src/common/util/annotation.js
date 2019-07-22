import Routecontainer from "./routeContainer";

//
// global.route  = (groupName, groupRouter, childName, childRouter) => {
//     return function (target) {
//         //这边就是已经有父分组。
//         if (Routecontainer[groupName]) {
//             //如果重来没有初始化过
//             if (!Routecontainer[groupName].routes) {
//                 Routecontainer[groupName].routes = [];
//             }
//             let data = {
//                 title: childName,
//                 routerName: childRouter,
//                 target: null
//             }
//
//             //如果是子路由有值--那就把实例付给子集
//             if (childName) {
//                 data.target = target;
//                 Routecontainer[groupName].routes.push(data);
//             } else {
//                 //否则就是父级的实例
//                 Routecontainer[groupName].target = target;
//             }
//         } else {
//             //1.不存在就初始化
//             Routecontainer[groupName] = {
//                 routes: [],
//                 routerName: groupName,
//                 routerUrl: groupRouter,
//                 target: null
//             };
//             //2.判断子路由没有就是父级组
//             if (!childName) {
//                 Routecontainer[groupName].target = target;
//             } else {
//                 Routecontainer[groupName].routes.push({
//                     title: childName,
//                     routerName: childRouter,
//                     target: target
//                 })
//             }
//
//         }
//     }
// };

export const route = (groupName, groupRouter, childName, childRouter) => {
  return function(target) {
    //这边就是已经有父分组。
    if (Routecontainer[groupName]) {
      //如果重来没有初始化过
      if (!Routecontainer[groupName].routes) {
        Routecontainer[groupName].routes = [];
      }
      let data = {
        title: childName,
        routerName: childRouter,
        target: null
      };

      //如果是子路由有值--那就把实例付给子集
      if (childName) {
        data.target = target;
        Routecontainer[groupName].routes.push(data);
      } else {
        //否则就是父级的实例
        Routecontainer[groupName].target = target;
      }
    } else {
      //1.不存在就初始化
      Routecontainer[groupName] = {
        routes: [],
        routerName: groupName,
        routerUrl: groupRouter,
        target: null
      };
      //2.判断子路由没有就是父级组
      if (!childName) {
        Routecontainer[groupName].target = target;
      } else {
        Routecontainer[groupName].routes.push({
          title: childName,
          routerName: childRouter,
          target: target
        });
      }
    }
  };
};

export const zhouxin = () => {
  console.log("说一菊花");
};
