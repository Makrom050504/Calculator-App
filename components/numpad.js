import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class numpad extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]]

        return (
            <View style={{ flex: 3, backgroundColor: "darkgrey" }}>
                {nums.map((tab) => <View style={{ flex: 1, flexDirection: "row" }}>
                    {tab.map((num) => <TouchableOpacity style={styles.button} onPress={() => this.props.getNum(num)}>
                        <Text style={styles.text}>{num}</Text >
                    </TouchableOpacity>)}
                </View>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 48
    }
});