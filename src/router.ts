import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./page/home"; //使用redux基础
import Index from "./page/Index";
import One from "./page/redux-actions"; //使用redux-actions基础
import Hook from "./page/hook"; //hook的主页
import { ColoreBanner } from "./page/hook/one"; //hook基本的改变颜色
import { ColoreBanner2 } from "./page/hook/two"; //自定义hook提取公共方法
import Modal from "./page/aijia/modal"; //编写modal的类
import loading from "./page/hoc/loading"; //编写modal的类
import HocLoading2 from "./page/hoc/two";
import sendGA from "./page/hoc/sendGA";
import HocAll from "./page/hoc";

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
    sendGA: sendGA
  },
  {
    initialRouteName: "Index"
  }
);

export const AppContainer = createAppContainer(RootStack);
