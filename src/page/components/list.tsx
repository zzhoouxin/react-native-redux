import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";


interface IProps {
    value: any,
}

class List extends Component<IProps, any> {
    constructor(props) {
        super(props);
    }



    render() {
        const {value} = this.props;
        return (
            <View style={styles.container}>
                {
                    value.dataList.map((item) => {
                        return <Text key={item.buildingId}>{item.buildingName}</Text>
                    })
                }
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        value: state.counter2
    }
}
export default connect(mapStateToProps, null)(List)


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
