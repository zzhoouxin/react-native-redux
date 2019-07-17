import React, { Component } from "react";
import { View, Text } from "react-native";
import { hijackRenderHoc } from "./hijack";

@hijackRenderHoc({ type: "add-style", style: { backgroundColor: "red" } })
class InheritanceInversion extends Component<any, any> {
  state = {
    name: "zhouxin"
  };

  componentDidMount() {
    console.log("didMount");
  }

  render() {
    return (
      <View>
        <Text>渲染劫持-</Text>
      </View>
    );
  }
}

export default InheritanceInversion;
