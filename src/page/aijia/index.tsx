import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
const fill_width = Dimensions.get("window").width;
const dataList = [
  { id: 1, name: "modal的页面", url: "Modal" },
  { id: 2, name: "旋转的动画", url: "Animated" },
  { id: 3, name: "直线运动", url: "StraightLine" },
  { id: 4, name: "放大效果", url: "spring" },
  { id: 5, name: "几个动画一起控制", url: "allControl" },
  { id: 6, name: "持续的动画", url: "Continue" },
  { id: 7, name: "先看看", url: "dontKonw" },
  { id: 8, name: "zhouxin", url: "zhouxin" }
];

export default class Hook extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {dataList.map(item => {
          return (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => this._jump(item.url)}
            >
              <Text style={{ color: "black" }}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  _jump = url => {
    this.props.navigation.navigate(url);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DEDEDE"
  },
  item: {
    height: 30,
    width: fill_width - 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#FFFFFF"
  }
});
