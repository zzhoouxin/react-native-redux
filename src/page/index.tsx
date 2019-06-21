import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import actionCreators from "./action/action";
import {connect} from "react-redux";
import Number from './components/number';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const { decrement, increment} = this.props as any;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => increment()}>
                    <Text>+</Text>
                </TouchableOpacity>
                <Number/>
                <TouchableOpacity
                    onPress={() => decrement()}>
                    <Text>-</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(actionCreators.increment())
        },
        decrement: () => {
            dispatch(actionCreators.decrement())
        },

    }
}

export default connect(
    null,
    mapDispatchToProps
)(App)

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
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
