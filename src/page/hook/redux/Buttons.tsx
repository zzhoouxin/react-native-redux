import React, { useContext } from "react";
import { Button, View } from "react-native";
import { ColorContext, updateColor } from "./color";

function Buttons() {
  const { dispatch } = useContext(ColorContext) as any;

  return (
    <View>
      <Button
        title="红色"
        onPress={() => {
          dispatch({ type: updateColor, color: "red" });
        }}
      />
      <Button
        title="黄色"
        onPress={() => {
          dispatch({ type: updateColor, color: "yellow" });
        }}
      />
    </View>
  );
}

export default Buttons;
