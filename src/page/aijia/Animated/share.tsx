import React, { Component } from "react";
import { View, Button } from "react-native";
import { route } from "../../../common/util/annotation";

// import SharePanelComponent from "react-native-zhouxinzz";

@route("艾佳页面", "AiJia", "分享组件测试", "share")
class Share extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  renderShare() {
    return null;
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.renderShare()}

        <Button
          title={"点击分享"}
          onPress={() => {
            // this.refs.shareModal && this.refs.shareModal.open();
          }}
        />
      </View>
    );
  }
}

export default Share;
