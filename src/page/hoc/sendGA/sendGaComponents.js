// import React, { Component } from "react";
// import { View, Text } from "react-native";

/**
 * 这边有2个写法
 * 一个是直接继承传过来的目标类----------render 写法就是 super.render()---当然这个就不能给目标类拓展熟悉了
 * 另外一个就是直接return 目标类就可以了---可以给目标类增加属性
 * @param value
 * @returns {function(*): NewComponent}
 */
export const sendGaComponents = value => {
  return WrappedComponent =>
    class NewComponent extends WrappedComponent {
      constructor(props) {
        super(props);
        console.log("这边就是埋点的值了=====>", value);
      }
      render() {
        // return <WrappedComponent {...this.props} />;
        return super.render();
      }
    };
};
