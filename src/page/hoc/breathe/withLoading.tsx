import React from "react";
import { Animated, Easing } from "react-native";

export const WithLoading = (params = { duration: 600 }) => WrappedComponent =>
  class extends React.PureComponent {
    oritention: boolean;
    isAnimating: boolean;
    opacity: any;

    componentWillMount() {
      this._initAnimation();
      this._playAnimation();
    }

    componentWillUnmount() {
      this._stopAnimation();
    }

    componentDidUpdate() {}

    _initAnimation() {
      this.oritention = true;
      this.isAnimating = true;
      this.opacity = new Animated.Value(1);
    }

    _playAnimation() {
      Animated.timing(this.opacity, {
        isInteraction: false,
        duration: params.duration,
        toValue: this.oritention ? 0.2 : 1,
        easing: this.oritention ? Easing.in : Easing.easeOut
      }).start(() => {
        this.oritention = !this.oritention;
        this.isAnimating && this._playAnimation();
      });
    }

    _stopAnimation = () => (this.isAnimating = false);

    render = () => <WrappedComponent opacity={this.opacity} {...this.props} />;
  };
