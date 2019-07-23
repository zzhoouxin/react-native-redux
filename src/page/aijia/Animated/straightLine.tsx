import React from "react";
import { Animated, Easing, StyleSheet, View, Text } from "react-native";
import { route } from "../../../common/util/annotation";
@route("艾佳页面", "AiJia", "直线运动", "StraightLine")
export default class StraightLine extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.state.animatedValue.setValue(0);
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
      // delay:1000
    }).start(() => this.spin());
  }

  render() {
    let { animatedValue } = this.state;
    const marginLeft = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100]
    });
    const opacity = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    const movingMargin = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    });
    const textSize = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });
    const rotateX = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"]
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 40,
            backgroundColor: "red"
          }}
        />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: "blue"
          }}
        />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: "orange"
          }}
        />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: "green"
          }}
        >
          Animated Text!
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{ rotateX }],
            marginTop: 50,
            height: 30,
            width: 40,
            backgroundColor: "black"
          }}
        >
          <Text style={{ color: "white" }}>Hello from TransformX</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
