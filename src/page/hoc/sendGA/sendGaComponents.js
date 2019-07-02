import React, { Component } from "react";
import { View, Text } from "react-native";

export const sendGaComponents = value => {
  return function(WrappedComponent) {
    class NewComponent extends Component {
      constructor(props) {
        super(props);
        console.log("发送的内容======>", value);
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
    return NewComponent;
  };
};
