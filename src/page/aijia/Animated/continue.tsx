import React from "react";
import { Animated, StyleSheet, View } from "react-native";

/**
 * 旋转的动画
 */

const arr = [];
for (let i = 0; i < 500; i++) {
  arr.push(i);
}

export default class FadeInView extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      animatedValue: []
    };
    arr.forEach(value => {
      this.state.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const animations = arr.map(item => {
      return Animated.timing(this.state.animatedValue[item], {
        toValue: 1,
        duration: 10
      });
    });

    Animated.sequence(animations).start();
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.state.animatedValue[a],
            height: 20,
            width: 20,
            backgroundColor: "red",
            marginLeft: 3,
            marginTop: 3
          }}
        />
      );
    });

    return <View style={styles.container}>{animations}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: "row",

    flexWrap: "wrap"
  }
});
