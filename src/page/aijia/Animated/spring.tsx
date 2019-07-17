import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

/**
 * 旋转的动画
 */

export default class FadeInView extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      springValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.spring();
  }

  spring() {
    this.state.springValue.setValue(0);
    Animated.spring(this.state.springValue, {
      toValue: 1, //放大的值:越大放大越大
      friction: 1, //摩擦力:越大就越不能晃动的厉害
      tension: 1 //张力:越大就越有弹性-生动点
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ marginBottom: 100 }}
          onPress={() => {
            this.spring();
          }}
        >
          点击可以出发动画
        </Text>

        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ scale: this.state.springValue }]
          }}
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
