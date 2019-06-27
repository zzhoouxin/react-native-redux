# react-native-redux
在react-native 应用中使用redux 以及redux各个中间件。新手可学习

## 技术支持
- 使用：`React-native`、`React-Navigtion`、`redux`、`react-redux`、`redux-actions`、`redux-promise`、`redux-thunk`


## 运行步骤
1. `npm install`  ——下载依赖
2. `react-native link react-native-gesture-handler`  ——link所有原生依赖
3. `npm start` ——启动服务
4. `react-native run-ios`  ——启动ios模拟器



## 项目目录结构

```
|__src
      |__ node_modules 依赖
      |
      |__ _redux     //redux基本处理层
          |__ index    //集成redux中间件
          |__ reducers   //汇聚所有的reducer
      |
      |__ page //业务-页面展示层
          |__ action.ts //创建action地方
          |__ components //子组件      
          |__ reducer //处理数据源的地方  
          |__ index.tsx //页面入口
          |__ store.ts //处理数据以及计算
          |__ webApi.ts //接口请求
      |
      |__ utils //业务-页面展示层
          |__ config //基础配置
          |__ decorator //修饰器编写
          |__ fetch //fetch请求
      |
      |__ index.tsx //页面总入口

```
