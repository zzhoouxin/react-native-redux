import React, { Component } from "react";
import { View, Text } from "react-native";

export const sendGA = value => {
  return function(WrappedComponent) {};
};

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
              <Text>这是一个loading的页面-可控制关闭</Text>
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
