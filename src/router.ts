import "./common/util/annotation";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./page/home"; //使用redux基础
import Index from "./page/Index";
import One from "./page/redux-actions"; //使用redux-actions基础
import Hook from "./page/hook"; //hook的主页
import { ColoreBanner } from "./page/hook/one"; //hook基本的改变颜色
import { ColoreBanner2 } from "./page/hook/two"; //自定义hook提取公共方法
import Modal from "./page/aijia/modal"; //编写modal的类

import "./page/hoc/loading"; //编写modal的类
import "./page/hoc/state"; //抽离state
import "./page/hoc/sendGA"; //打点
import "./page/hoc"; //hoc的首页
import "./page/hoc/breathe"; //呼吸的动画
import "./page/hoc/InheritanceInversion"; //继承反转
import "./page/hoc/renderHijack"; //渲染劫持

import AiJia from "./page/aijia";
import Rotate from "./page/aijia/Animated/rotate"; //旋转的动画
import StraightLine from "./page/aijia/Animated/straightLine"; //直线运动
import spring from "./page/aijia/Animated/spring"; //放大效果
import allControl from "./page/aijia/Animated/allControl"; //全部控制
import Continue from "./page/aijia/Animated/continue"; //持续的动画
import dontKonw from "./page/aijia/Animated/dontKonw"; //全部控制
import zhouxin from "./page/aijia/Animated/zhouxin";

import RouteContainer from "./common/util/routeContainer";

console.log("RouteContainer=====>", RouteContainer);
//组装数据
let urlData = {};
Object.keys(RouteContainer).map(item => {
  urlData[RouteContainer[item].routerUrl] = RouteContainer[item].target;

  Object.keys(RouteContainer[item].routes).map(item2 => {
    console.log("item2=====>", item2);
  });
});

console.log("urlData====>", urlData);

let defaultData = {
  Home: Home,
  One: One,
  Index: Index,
  Hook: Hook,
  HookUsState: ColoreBanner,
  HookUsState2: ColoreBanner2,
  Modal: Modal,
  Animated: Rotate,
  AiJia: AiJia,
  StraightLine: StraightLine,
  spring: spring,
  allControl: allControl,
  Continue: Continue,
  dontKonw: dontKonw,
  zhouxin: zhouxin
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
