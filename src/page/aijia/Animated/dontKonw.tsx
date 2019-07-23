import React, { Component } from "react";

import { Animated, StyleSheet, View } from "react-native";

const arr = [];
for (let i = 0; i < 200; i++) {
  arr.push(i);
}
import { route } from "../../../common/util/annotation";
@route("艾佳页面", "AiJia", "很多一起的动画", "dontKonw")
export default class animations extends Component<any, any> {
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
    this.state.animatedValue.map(c => {
      c.setValue(0);
    });
    const animations = arr.map(item => {
      return Animated.timing(this.state.animatedValue[item], {
        toValue: 1,

        duration: 1000
      });
    });

    Animated.stagger(10, animations).start(() => {
      this.animate();
    });
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.state.animatedValue[a].interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0, 1, 0.3]
            }),
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
