import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
const fill_width = Dimensions.get("window").width;
const dataList = [
  { id: 1, name: "常规使用redux", url: "Home" },
  { id: 2, name: "使用redux-actions处理异步数据", url: "One" },
  { id: 3, name: "使用hook", url: "Hook" }
];

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {dataList.map(item => {
          return (
            <View style={styles.item} key={item.id}>
              <Text
                onPress={() => this._jump(item.url)}
                style={{ color: 'black' }}
              >
                {item.name}
              </Text>
            </View>
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