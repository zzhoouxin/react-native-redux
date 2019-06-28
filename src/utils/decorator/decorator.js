import React, { Component } from "react";
import { View, Text } from "react-native";

/**
 * 修饰器通用的处理方式
 * @param value
 * @returns {Function}
 */
export const sendGA = value => {
  return function() {
    console.log("打点的页面为------>", value);
  };
};

/**
 * 用来显示网络加载状态的修饰器
 * @param WrappedComponent
 * @return {NewComponent}
 */
export const loadingComponents = WrappedComponent => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        isFirstLoad: true,
        loadError: false
      };

      this.setSuccessPage = this.setSuccessPage.bind(this);
      this.setErrorPage = this.setErrorPage.bind(this);
    }

    setSuccessPage() {
      this.setState({
        isFirstLoad: false,
        loadError: null
      });
    }

    setErrorPage() {
      if (this.state.isFirstLoad === false) {
        return;
      }
      this.setState({
        isFirstLoad: false,
        loadError: true
      });
    }

    render() {
      let { isFirstLoad, loadError } = this.state;

      const newProps = {
        ...this.props,
        setSuccessPage: this.setSuccessPage,
        setErrorPage: this.setErrorPage
      };
      debugger;

      return (
        <View style={{ flex: 1 }}>
          <WrappedComponent {...newProps} />

          {isFirstLoad && (
            <View
              style={{
                position: "absolute",
                width: 375,
                height: 667,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>加载中。。。。。。</Text>
            </View>
          )}
          {isFirstLoad === false && loadError ? (
            <View
              style={{
                position: "absolute",
                width: 375,
                height: 667,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>加载失败。。。。。。</Text>
            </View>
          ) : null}
        </View>
      );
    }
  }

  return NewComponent;
};

const Loading = {
  sendGA,
  loadingComponents
};
export default Loading;
