import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import actionCreators from "./action/action";
import { connect } from "react-redux";
import List from "./components/list";
import { loadingComponents } from "./../../utils/decorator/decorator";

interface IProps {
  value: any;
  initDataList: () => void;
  setSuccessPage: () => void;
}

/**
 * 这边用来注入数据源
 * @param state
 */
const mapStateToProps = state => {
  return {
    value: state.counter2
  };
};

/**
 * 这边用来注入action
 * @param state
 */
const mapDispatchToProps = dispatch => {
  return {
    initDataList: () => {
      dispatch(actionCreators.initDataList());
    }
  };
};

@loadingComponents
class App extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.initDataList();
    setTimeout(() => {
      this.props.setSuccessPage();
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  addNumberView: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 30
  }
});
