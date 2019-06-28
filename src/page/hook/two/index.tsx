import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useRandomColor } from "./changeColor";

export const ColoreBanner2 = () => {
  const colors = [
    "#FFF68F",
    "#FF8C00",
    "#FF4500",
    "#C0FF3E",
    "#54FF9F",
    "#00EEEE"
  ];
  const [color, changeColor] = useRandomColor(colors, "white");
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Button title={"点击改变背景颜色"} onPress={changeColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
