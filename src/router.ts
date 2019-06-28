import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./page/home"; //使用redux基础
import Index from "./page/Index";
import One from "./page/one"; //使用redux-actions基础
import Hook from "./page/hook"; //hook的主页
import { ColoreBanner } from "./page/hook/one"; //hook基本的改变颜色
import { ColoreBanner2 } from "./page/hook/two"; //自定义hook提取公共方法

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
    HookUsState2: ColoreBanner2
  },
  {
    initialRouteName: "Index"
  }
);

export const AppContainer = createAppContainer(RootStack);
