import React from "react";
import { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux';
import Home from './home';
import One from './page';
import store from './home/store'


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>

    );
  }
}

/**
 * 路由
 * @type {NavigationContainer}
 */
const RootStack = createStackNavigator(
    {
        Home: Home,
        One: One
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(RootStack);

