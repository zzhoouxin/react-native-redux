import React from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

/**
 * 旋转的动画
 */

export default class FadeInView extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue1: new Animated.Value(0),
      animatedValue2: new Animated.Value(0),
      animatedValue3: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.state.animatedValue1.setValue(0);
    this.state.animatedValue2.setValue(0);
    this.state.animatedValue3.setValue(0);
    const createAnimation = function(value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay
      });
    };
    Animated.parallel([
      createAnimation(this.state.animatedValue1, 2000, Easing.ease),
      createAnimation(this.state.animatedValue2, 1000, Easing.ease, 1000),
      createAnimation(this.state.animatedValue3, 1000, Easing.ease, 2000)
    ]).start();
  }

  spring() {
    this.state.springValue.setValue(0.3);
    Animated.spring(this.state.springValue, {
      toValue: 1,
      friction: 1
      // tension:1
    }).start();
  }

  render() {
    const scaleText = this.state.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2]
    });
    const spinText = this.state.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "720deg"]
    });
    const introButton = this.state.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 400]
    });
    return (
      <View style={[styles.container]}>
        <Animated.View style={{ transform: [{ scale: scaleText }] }}>
          <Text>Welcome</Text>
        </Animated.View>
        <Animated.View
          style={{ marginTop: 20, transform: [{ rotate: spinText }] }}
        >
          <Text style={{ fontSize: 20 }}>to the App!</Text>
        </Animated.View>
        <Animated.View style={{ top: introButton, position: "absolute" }}>
          <TouchableHighlight
            onPress={this.animate.bind(this)}
            style={styles.button}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              Click Here To Start
            </Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 320,
    height: 90,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});
