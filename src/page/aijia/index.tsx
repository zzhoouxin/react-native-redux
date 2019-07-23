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
@route("艾佳页面", "AiJia")
class AiJia extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {RouteContainer["艾佳页面"].routes.map((item, index) => {
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

export default AiJia;

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
