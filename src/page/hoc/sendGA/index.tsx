import React, { Component } from "react";
import { Text, View } from "react-native";
import { sendGaComponents } from "./sendGaComponents";

/**
 * 这边页面是做埋点的测试demo
 * 比如我们进入页面需要处理什么东西。通过修饰器的方式进行处理。避免代码的荣誉
 */

@sendGaComponents("配置埋点的内容")
class HocLoading extends Component<any, any> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>埋点操作的修饰器</Text>
        <Text>使用方式 @sendGaComponents(xxxx)</Text>
        <Text>进入页面会进行埋点操作</Text>
        <Text>这边控制台会输出一句话</Text>
        <Text>其他操作以此类推</Text>
      </View>
    );
  }
}

export default HocLoading;
