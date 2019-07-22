import React, { Component } from "react";
import { View, Text } from "react-native";
import { iiHoc } from "./iiHoc";
import { route } from "../../../common/util/annotation";

@iiHoc
@route("HOC高阶组件", "HocAll", "继承反转", "InheritanceInversion")
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
        <Text>继承反转</Text>
      </View>
    );
  }
}

export default InheritanceInversion;
