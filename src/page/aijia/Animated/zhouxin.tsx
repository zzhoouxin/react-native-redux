import React from "react";
import { Animated } from "react-native";

export default class FadeInView extends React.Component {
  state = {
    fadeInOpacity: new Animated.Value(0) // 透明度初始值设为0
  };
  componentDidMount() {
    Animated.timing(
      // 随时间变化而执行动画
      this.state.fadeInOpacity, // 动画中的变量值
      {
        toValue: 1, // 透明度最终变为1，即完全不透明
        duration: 6000 // 让动画持续一段时间
      }
    ).start();
  }

  fade = () => {
    this.state.fadeInOpacity.setValue(0);
    // 开始执行动画
  };
  render() {
    const { fadeInOpacity } = this.state;
    return (
      <Animated.View // 使用专门的可动画化的View组件
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          opacity: fadeInOpacity // 将透明度指定为动画变量值
        }}
      />
    );
  }
}
