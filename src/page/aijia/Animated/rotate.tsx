import React from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

/**
 * 旋转的动画
 */

export default class FadeInView extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.state.spinValue.setValue(0);
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
      // delay:1000
    }).start(() => this.spin());
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 300,
            height: 300,
            transform: [{ rotate: spin }]
          }}
          resizeMode={"contain"}
          source={{
            uri:
              "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
