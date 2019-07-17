import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import { ExtractStateHOC } from "./ExtractStateHOC";

class TextInputComponent extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, name } = this.props;
    return (
      <View>
        <Text>{name}</Text>
        <TextInput
          autoFocus={true}
          onChange={onChange}
          style={{ width: 200, height: 200, backgroundColor: "#f0f0f0" }}
        ></TextInput>
      </View>
    );
  }
}

const ExtractStateComponent = ExtractStateHOC(TextInputComponent);
export default ExtractStateComponent;
