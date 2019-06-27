import React from "react";
import { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './page/home';
import Index from './page/Index';
import One from './page/one';
import { Provider } from 'react-redux';
import store from './_redux';



/**
 * 注册路由信息
 * @type {NavigationContainer}
 */
const RootStack = createStackNavigator(
    {
        Home: Home,
        One: One,
        Index:Index
    },
    {
        initialRouteName: "Index"
    }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>

    );
  }
}



