import "./common/util/annotation";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./page/home"; //使用redux基础
import Index from "./page/Index";
import One from "./page/redux-actions"; //使用redux-actions基础
import Hook from "./page/hook"; //hook的主页
import { ColoreBanner } from "./page/hook/one"; //hook基本的改变颜色
import { ColoreBanner2 } from "./page/hook/two"; //自定义hook提取公共方法
import "./page/aijia/modal"; //编写modal的类

import "./page/hoc/loading"; //编写modal的类
import "./page/hoc/state"; //抽离state
import "./page/hoc/sendGA"; //打点
import "./page/hoc"; //hoc的首页
import "./page/hoc/breathe"; //呼吸的动画
import "./page/hoc/InheritanceInversion"; //继承反转
import "./page/hoc/renderHijack"; //渲染劫持
import "./page/aijia"; //艾佳页面

import "./page/aijia/Animated/rotate"; //旋转的动画

import "./page/aijia/Animated/straightLine"; //直线运动
import "./page/aijia/Animated/spring"; //放大效果
import "./page/aijia/Animated/allControl"; //全部控制
import "./page/aijia/Animated/continue"; //持续的动画
import "./page/aijia/Animated/dontKonw"; //全部控制
import "./page/aijia/Animated/zhouxin";
import "./page/aijia/Animated/share";
import "./page/aijia/Animated/changeView";

import RouteContainer from "./common/util/routeContainer";

console.log("RouteContainer=====>", RouteContainer);
//组装数据-用来下方的路由使用
let urlData = {};
Object.keys(RouteContainer).map(item => {
  urlData[RouteContainer[item].routerUrl] = RouteContainer[item].target;
  RouteContainer[item].routes.map(item2 => {
    urlData[item2.routerName] = item2.target;
  });
});

console.log("urlData====>", urlData);

let defaultData = {
  Home: Home,
  One: One,
  Index: Index,
  Hook: Hook,
  HookUsState: ColoreBanner,
  HookUsState2: ColoreBanner2
};

let createStack = Object.assign(defaultData, urlData);

/**
 * 注册路由信息
 * @type {NavigationContainer}
 */
const RootStack = createStackNavigator(createStack, {
  initialRouteName: "Index"
});

export const AppContainer = createAppContainer(RootStack);
