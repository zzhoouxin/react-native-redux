import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./page/home"; //使用redux基础
import Index from "./page/Index";
import One from "./page/redux-actions"; //使用redux-actions基础
import Hook from "./page/hook"; //hook的主页
import { ColoreBanner } from "./page/hook/one"; //hook基本的改变颜色
import { ColoreBanner2 } from "./page/hook/two"; //自定义hook提取公共方法
import Modal from "./page/aijia/modal"; //编写modal的类
import loading from "./page/hoc/loading"; //编写modal的类
import HocLoading2 from "./page/hoc/state"; //抽离state
import sendGA from "./page/hoc/sendGA";
import HocAll from "./page/hoc";
import Breathe from "./page/hoc/breathe";
import InheritanceInversion from "./page/hoc/InheritanceInversion"; //继承反转
import renderHijack from "./page/hoc/renderHijack"; //渲染劫持

import AiJia from "./page/aijia";
import Rotate from "./page/aijia/Animated/rotate"; //旋转的动画
import StraightLine from "./page/aijia/Animated/straightLine"; //直线运动
import spring from "./page/aijia/Animated/spring"; //放大效果
import allControl from "./page/aijia/Animated/allControl"; //全部控制
import Continue from "./page/aijia/Animated/continue"; //持续的动画
import dontKonw from "./page/aijia/Animated/dontKonw"; //全部控制
import zhouxin from "./page/aijia/Animated/zhouxin";

/**
 * 注册路由信息
 * @type {NavigationContainer}
 */
const RootStack = createStackNavigator(
  {
    Home: Home,
    One: One,
    Index: Index,
    Hook: Hook,
    HookUsState: ColoreBanner,
    HookUsState2: ColoreBanner2,
    Modal: Modal,
    publicLoading: loading,
    HocLoading2: HocLoading2,
    HocAll: HocAll,
    sendGA: sendGA,
    Animated: Rotate,
    AiJia: AiJia,
    StraightLine: StraightLine,
    spring: spring,
    allControl: allControl,
    Continue: Continue,
    dontKonw: dontKonw,
    zhouxin: zhouxin,
    Breathe: Breathe,
    InheritanceInversion: InheritanceInversion,
    renderHijack: renderHijack
  },
  {
    initialRouteName: "Index"
  }
);

export const AppContainer = createAppContainer(RootStack);
