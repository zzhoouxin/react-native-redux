import React, { Component } from "react";
import { Text, View } from "react-native";
import { loadingComponents } from "./loadingComponents";

/**
 * 这边页面作为高阶组件编写了一个关于公共加载的loading组件
 */

@loadingComponents
class HocLoading extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.props.setSuccessPage();
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>公共加载loading的修饰器</Text>
        <Text>使用方式 @loadingComponents</Text>
        <Text>进入页面前会出现loading的页面</Text>
        <Text>当然也可以关闭的--关闭看修饰器写法</Text>
      </View>
    );
  }
}
export default HocLoading;
