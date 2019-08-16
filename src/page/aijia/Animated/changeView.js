import React from "react";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";
import { route } from "../../../common/util/annotation";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

@route("艾佳页面", "AiJia", "改变页面", "changeView")
export default class App extends React.Component {
  state = {
    index: 0
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({ index: (this.state.index + 1) % 5 });
  };

  render() {
    const style = [
      styles.box1,
      styles.box2,
      styles.box3,
      styles.box4,
      styles.box5
    ];
    const { index } = this.state;
    console.log(index % 5);
    console.log((index + 1) % 5);
    console.log((index + 2) % 5);
    console.log((index + 3) % 5);
    console.log((index + 4) % 5);
    return (
      <View style={styles.container}>
        <View style={[styles.box, style[index % 5], styles.tag1]} />
        <View style={[styles.box, style[(index + 1) % 5], styles.tag2]} />
        <View style={[styles.box, style[(index + 2) % 5], styles.tag3]} />
        <View style={[styles.box, style[(index + 3) % 5], styles.tag4]} />
        <View style={[styles.box, style[(index + 4) % 5], styles.tag5]} />

        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    position: "absolute"
  },
  box1: {
    left: 0,
    top: 120,
    width: 120,
    height: 120
  },
  box2: {
    left: 40,
    top: 160,
    zIndex: 2,
    width: 160,
    height: 160
  },
  box3: {
    left: 80,
    top: 240,
    zIndex: 3,
    width: 200,
    height: 200
  },
  box4: {
    left: 40,
    top: 340,
    zIndex: 2,
    width: 160,
    height: 160
  },
  box5: {
    left: 0,
    top: 420,
    width: 120,
    height: 120
  },
  tag1: {
    backgroundColor: "red"
  },
  tag2: {
    backgroundColor: "yellow"
  },
  tag3: {
    backgroundColor: "blue"
  },
  tag4: {
    backgroundColor: "black"
  },
  tag5: {
    backgroundColor: "#888"
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 415
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
