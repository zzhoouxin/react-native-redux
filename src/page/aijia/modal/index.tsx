import React, { PureComponent } from "react";
import {
  Text,
  View,
  Modal,
  Button,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

export default class index extends PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  componentWillMount() {}

  render() {
    let url =
      "https://yanxuan.nosdn.127.net/7c1e14b2736484bf92b76b9fc3a0c50b.png";
    return (
      <View>
        <View style={{ marginTop: 80 }}>
          <Text>这是内容</Text>
          <Button
            title="显示蒙城"
            onPress={() =>
              this.setState({
                isShow: true
              })
            }
          />
        </View>
        <Modal
          visible={this.state.isShow} // 根据isModal决定是否显示
          transparent={true}
          animationType={"fade"} //淡入淡出none：没有动画 slide：从底部滑入 fade：淡入视野
        >
          <TouchableHighlight
            onPress={() =>
              this.setState({
                isShow: false
              })
            }
            style={{ flex: 1 }}
          >
            <Image source={{ uri: url }} style={{ flex: 1 }} />
          </TouchableHighlight>

          {/* <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
          >
            <Text
              onPress={() => {
                console.log("点击了关闭");
                this.setState({
                  isShow: false
                });
              }}
            >
              关闭蒙城
            </Text>
          </View> */}
        </Modal>
      </View>
    );
  }
}
