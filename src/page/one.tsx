import React from "react";
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>第二个2s22页面</Text>
      </View>
    );
  }
}

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
  }
});
