import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";

class Number extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {value} = this.props as any;
        return (
            <View style={styles.container}>

                <Text>{value.count}</Text>
            </View>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        value: state.counter2
    }
}
export default connect(mapStateToProps, null)(Number)


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
