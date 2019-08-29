import React, { useState, createContext, useContext } from "react";

import { Button, Text, View } from "react-native";

const CountContext = createContext({});

/**
 * 共享其他组件的值 需要：
 * 1.通过createContext创建一个共享的对象
 * 2.在provider里面生产一个共享值
 * 3.其他组件里面需要使用useContext防止创建的容器
 * 4.使用变量接收即可实现父子组件value值得共享
 * @constructor
 */
function Child() {
  let count = useContext(CountContext);

  return (
    <View>
      <Text>共享的数据为:{count}</Text>
    </View>
  );
}

function Count() {
  let [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button
        title={"点击"}
        onPress={() => {
          setCount(count + 1);
        }}
      />

      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </View>
  );
}

export default Count;
