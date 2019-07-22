import React from "react";
import { Animated, View } from "react-native";
import { WithLoading } from "./withLoading";
import { route } from "../../../common/util/annotation";

@WithLoading()
@route("HOC高阶组件", "HocAll", "公共的呼吸组件", "breathe")
class Test extends React.PureComponent<any, any> {
  render() {
    const { opacity } = this.props;
    console.log("opacity====>", opacity);
    return (
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Animated.View
            style={{ opacity, backgroundColor: "red", width: 150, height: 20 }}
          />
          <Animated.View
            style={{ opacity, backgroundColor: "red", width: 150, height: 20 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Animated.View
            style={{ opacity, backgroundColor: "red", width: 150, height: 20 }}
          />
          <Animated.View
            style={{ opacity, backgroundColor: "red", width: 150, height: 20 }}
          />
        </View>
      </View>
    );
  }
}

export default Test;
