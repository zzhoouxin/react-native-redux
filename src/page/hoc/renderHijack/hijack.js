import React from "react";
import { View } from "react-native";

export const hijackRenderHoc = config => WrappedComponent =>
  class extends WrappedComponent {
    render() {
      const { style = {} } = config;
      const elementsTree = super.render();
      console.log(elementsTree, "elementsTree");
      if (config.type === "add-style") {
        return <View style={{ ...style }}>{elementsTree}</View>;
      }
      return elementsTree;
    }
  };
