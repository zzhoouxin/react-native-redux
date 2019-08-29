import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

/**
 * 1.函数最后的 [count] 当count发生改变的时候会触发销毁的函数
 * 2.如果传一个空数组的话 生命周期就只出发一次
 *
 */

function useEffect1() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("出发did和updata函数");
    return () => {
      console.log("出发销毁函数");
    };
  }, []);

  return (
    <View>
      <Text>{count}</Text>
      <Button
        title={"点击"}
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
}

export default useEffect1;
