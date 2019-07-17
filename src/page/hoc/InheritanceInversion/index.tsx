import React, { Component } from "react";
import { View, Text } from "react-native";
import { iiHoc } from "./iiHoc";

@iiHoc
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
