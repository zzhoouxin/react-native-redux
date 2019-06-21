import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Button} from 'react-native'
import {connect} from 'react-redux'
import * as Action from './action'

 class CounterApp extends Component<any, any> {
    constructor(props: any) {
        super(props)

    }

    render() {
        const {value, add, reduce, getUserInfo} = this.props as any;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => add()}>
                    <Text>+</Text>
                </TouchableOpacity>
                <Text>{value.number}</Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => reduce()}>
                    <Text>-</Text>
                </TouchableOpacity>

                <Text>名字叫:{value.user.name}</Text>
                <TouchableOpacity onPress={() => getUserInfo()}>
                    <Text>更改名称</Text>
                </TouchableOpacity>
                <Button
                    title="去第二个页面"
                    onPress={() => this.props.navigation.navigate("One")}
                />

            </View>
        )
    }
}



const mapStateToProps = (state: any) => {
    return {
        value: state.counter,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add: () => {
            return dispatch(Action.increase())
        },
        reduce: () => {
            return dispatch(Action.decrease())
        },
        getUserInfo: () => {
            return dispatch(Action.fetch())
        }
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterApp)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})