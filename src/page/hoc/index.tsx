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

import RouteContainer from "../../common/util/routeContainer";

@route("HOC高阶组件", "HocAll")
export default class HOC extends Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log("组件里面使用的=====>", RouteContainer);
  }

  render() {
    return (
      <View style={styles.container}>
        {RouteContainer["HOC高阶组件"].routes.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.item}
              key={index}
              onPress={() => this._jump(item.routerName)}
            >
              <Text style={{ color: "black" }}>{item.title}</Text>
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
