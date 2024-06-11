import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Numpad from './numpad';
import Operators from './operators';

export default class buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 2, backgroundColor: "grey", flexDirection: "row" }}>
                <Numpad getNum={this.props.getNum} or={this.props.or} />
                <Operators getNum={this.props.getNum} or={this.props.or} />
            </View>
        );
    }
}
