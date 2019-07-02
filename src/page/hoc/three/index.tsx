import React, { Component } from "react";
import { Text, View } from "react-native";
import { sendGA, loadingComponents } from "./loadingComponents";

/**
 * 这边页面作为高阶组件编写了一个关于公共加载的loading组件
 */

@sendGA(1)
@loadingComponents
class HocLoading extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "周鑫"
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.props.setSuccessPage();
    }, 2000);
  }

  render() {
    return (
      <View>
        <Text>这边使用的高阶组件-实现loading的功能</Text>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}
export default HocLoading;
