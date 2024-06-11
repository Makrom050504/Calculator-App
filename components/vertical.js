import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class vertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
        result: "",
        wynik: ""
    };
  }

  render() {

    operatory = ["/", "*", "-", "+"]

    zrob = (num) => {
        console.log(this.state.result.slice(-1));
        if (!operatory.includes(this.state.result.slice(-1)) || !operatory.includes(num)) {
         
        this.setState({result: this.state.result + num})   
        }
    }

    policz = () => {
        let cos = this.state.result
        if (operatory.includes(this.state.result.slice(-1))) {
            cos = this.state.result.slice(0, -1)
        }
        this.setState({wynik: eval(cos).toString(), result: eval(cos).toString()})
    }

    usun = () => {
        console.log(this.state.result);
        this.setState({result: this.state.result.slice(0, -1)})
    }

    wyczysc = () => {
        this.setState({result: "", wynik: ""})
    }


    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'darkgreen'}}>
            <View><Text style={{color: 'white', fontSize: 50}}>{this.state.result}</Text></View>
            <View><Text style={{color: 'white', fontSize: 50}}>{this.state.wynik}</Text></View>
        </View>
        <View style={{flex:2, flexDirection: 'row'}}>
            <View style={{flex:3, backgroundColor: 'darkgrey', flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{flex:1}} onPress={() => zrob(1)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob(2)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob(3)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>3</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{flex:1}} onPress={() => zrob(4)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob(5)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob(6)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>6</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{flex:1}} onPress={() => zrob(7)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob(8)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob(9)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>9</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{flex:1}} onPress={() => zrob(".")}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob(0)}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{textAlign: 'center', fontSize: 50}} onPress={() => policz()}>=</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1, backgroundColor: 'grey', flexDirection: 'column'}}>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{textAlign: 'center', fontSize: 50}} onPress={() => usun()}>Del</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{textAlign: 'center', fontSize: 50}} onPress={() => wyczysc()}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob("+")}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob("-")}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob('*')}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob("/")}>
                    <Text style={{textAlign: 'center', fontSize: 50}}>/</Text>
                </TouchableOpacity>

            </View>
            </View>
      </View>
    );
  }
}
