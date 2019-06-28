import React, { useState } from "react";
import { Text, View } from "react-native";

export default function greeting() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Text
        onPress={() => {
          setCount(count + 1);
        }}
      >
        点击加1
      </Text>
    </View>
  );
}
