import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class operators extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let oper = ["Del", "C", "/", "*", "-", "+"]
        let oper2 = ["Sqrt", "Pow", "Sin", "Cos"]


        if (this.props.or) {
            return (
                <View style={{ flex: 1 }}>
                    {oper.map((op) => <TouchableOpacity style={styles.button} onPress={() => this.props.getNum(op)}>
                        <Text style={styles.text}>{op}</Text>
                    </TouchableOpacity>)}
                </View>
            );
        }
        else {
            return (
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        {oper2.map((op) => <TouchableOpacity style={styles.button} onPress={() => this.props.getNum(op)}>
                            <Text style={styles.textOp}>{op}</Text>
                        </TouchableOpacity>)}
                    </View>

                    <View style={{ flex: 1 }}>
                        {oper.map((op) => <TouchableOpacity style={styles.button} onPress={() => this.props.getNum(op)}>
                            <Text style={styles.textOp}>{op}</Text>
                        </TouchableOpacity>)}
                    </View>
                </View>
            )
        }
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
    },
    textOp: {
        fontSize: 30
    }
});