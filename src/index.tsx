import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "./_redux";
import { AppContainer } from "./router";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
