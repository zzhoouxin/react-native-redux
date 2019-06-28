import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export const ColoreBanner = () => {
  const colors = [
    "#FFF68F",
    "#FF8C00",
    "#FF4500",
    "#C0FF3E",
    "#54FF9F",
    "#00EEEE"
  ];
  const lenColors = colors.length;
  const [color, setColor] = useState("white");
  const changeColor = () => {
    const index = Math.floor(Math.random() * lenColors);
    setColor(colors[index]);
  };
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
