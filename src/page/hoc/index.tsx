import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { route } from "../../common/util/annotation";

const fill_width = Dimensions.get("window").width;
const dataList = [
  { id: 1, name: "公共loading修饰器", url: "publicLoading" },
  { id: 2, name: "抽离出去state", url: "HocLoading2" },
  { id: 3, name: "埋点的修饰器编写", url: "sendGA" },
  { id: 4, name: "呼吸的动画", url: "Breathe" },
  { id: 5, name: "继承反转", url: "InheritanceInversion" },
  { id: 6, name: "渲染劫持", url: "renderHijack" }
];

@route("HOC高阶组件", "HocAll")
export default class HOC extends Component<any, any> {
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
