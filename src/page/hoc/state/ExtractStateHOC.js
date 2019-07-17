import React, { Component } from "react";

export const ExtractStateHOC = WrappedComponent => {
  return class WrappingComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "111"
      };
      this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
      this.setState({ name: event.nativeEvent.text });
    }
    render() {
      const newProps = {
        name: this.state.name,
        onChange: this.onChange
      };
      return <WrappedComponent {...newProps} />;
    }
  };
};
