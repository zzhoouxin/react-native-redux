import React, { useReducer } from "react";

import { Text, View, Button } from "react-native";

/**
 *
 * @constructor
 */

function Reducer() {
  const [count, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "less":
        return state - 1;
      default:
        return 0;
    }
  }, 0);

  return (
    <View>
      <Text>{count}</Text>
      <Button
        title="点击+1"
        onPress={() => {
          dispatch({ type: "add" });
        }}
      />
      <Button
        title="点击-1"
        onPress={() => {
          dispatch({ type: "less" });
        }}
      />
    </View>
  );
}

export default Reducer;
