import React, { Component } from "react";
import { View, Text } from "react-native";
import { hijackRenderHoc } from "./hijack";
import { route } from "../../../common/util/annotation";
@hijackRenderHoc({ type: "add-style", style: { backgroundColor: "red" } })
@route("HOC高阶组件", "HocAll", "渲染劫持", "renderHijack")
class renderHijack extends Component<any, any> {
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

export default renderHijack;
