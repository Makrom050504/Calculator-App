import { useState } from 'react';
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default class result extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        st = styles.text

        if (!this.props.or) {
            st = styles.textOp
        }

        return (
            <View style={styles.container}>
                <ScrollView horizontal={true}
                    ref={ref => { this.scrollView = ref }}
                    onContentSizeChange={() =>
                        this.scrollView.scrollToEnd({ animated: true })
                    }>
                    <Text style={st}> {this.props.number}</Text>
                </ScrollView>
                <ScrollView horizontal={true}
                    ref={ref => { this.scrollView = ref }}
                    onContentSizeChange={() => this.scrollView.scrollTo({ x: 0, y: 0, animated: true })}>
                    <Text style={st}>{this.props.result}</Text>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgreen'
    },
    text: {
        textAlign: 'right',
        fontSize: 48,
        color: "white",
        flex: 1,
        padding: 10,
    },
    textOp: {
        textAlign: 'right',
        fontSize: 30,
        color: "white",
        flex: 1,
        padding: 10,

    }
});