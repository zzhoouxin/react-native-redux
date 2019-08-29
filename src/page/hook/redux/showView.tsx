import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ColorContext } from "./color";

function ShowView() {
  let { color } = useContext(ColorContext) as any;

  return (
    <View>
      <Text style={{ color: color }}>颜色为{color}</Text>
    </View>
  );
}

export default ShowView;
