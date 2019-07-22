import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
const fill_width = Dimensions.get("window").width;
import { zhouxin } from "../../common/util/annotation";

const dataList = [
  { id: 1, name: "常规使用redux", url: "Home" },
  { id: 2, name: "使用redux-actions处理异步数据", url: "One" },
  { id: 3, name: "使用hook", url: "Hook" },
  { id: 4, name: "艾佳页面demo", url: "AiJia" },
  { id: 5, name: "高阶组件HOC", url: "HocAll" }
];

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    zhouxin();
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
