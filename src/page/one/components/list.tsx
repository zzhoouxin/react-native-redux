import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import actionCreators from "./../action/action";

interface IProps {
  value: any;
  addData: () => void;
}

class List extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, addData } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.firstTitle}>下面的 数据是模拟异步请求的</Text>
        {value.dataList.map(item => {
          return <Text key={item.id}>{item.name}</Text>;
        })}
        <Button
          title={"异步添加数据"}
          onPress={() => {
            addData();
          }}
        />
      </View>
    );
  }
}

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
    addData: () => {
      dispatch(actionCreators.addData());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

const styles = StyleSheet.create({
  container: {
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
  },
  firstTitle: {
    color: "red",
    marginBottom: 10
  }
});
