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
  { id: 1, name: "useState正常使用", url: "HookUsState" },
  { id: 2, name: "hook自定义函数提取公共函数", url: "HookUsState2" },
  { id: 3, name: "使用useEffect", url: "useEffect" },
  { id: 4, name: "使用useContext", url: "useContext" },
  { id: 5, name: "使用reducer", url: "useReducer" },
  { id: 6, name: "使用ReduxDemo", url: "ReduxDemo" }
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
