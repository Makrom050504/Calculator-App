import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class horizontal extends Component {
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

    sinus = () => {
        this.setState({result: Math.sin(Math.PI*parseInt(eval(this.state.result))/180).toString(), wynik: Math.sin(Math.PI*parseInt(eval(this.state.result))/180).toString()})
    }

    cosinus = () => {
        this.setState({result: Math.cos(Math.PI*parseInt(eval(this.state.result))/180).toString(), wynik: Math.cos(Math.PI*parseInt(eval(this.state.result))/180).toString()})
    }

    pierwiastek = () => {
        this.setState({result: Math.sqrt(parseInt(eval(this.state.result))).toString(), wynik: Math.sqrt(parseInt(eval(this.state.result))).toString()})    
    }

    potega = () => {
        this.setState({result: Math.pow(parseInt(eval(this.state.result)), 2).toString(), wynik: Math.pow(parseInt(eval(this.state.result)), 2).toString()})
    }

    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'darkgreen'}}>
            <View><Text style={{color: 'white', fontSize: 50}}>{this.state.result}</Text></View>
            <View><Text style={{color: 'white', fontSize: 50}}>{this.state.wynik}</Text></View>
        </View>
        <View style={{flex:2, flexDirection: 'row'}}>
            <View style={{flex:2, backgroundColor: 'darkgrey', flexDirection: 'column'}}>
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
            <View style={{flex:2, backgroundColor: 'grey', flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                    <TouchableOpacity style={{flex: 1}} onPress={() => sinus()}>
                        <Text style={{textAlign: 'center', fontSize: 30}}>sin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => cosinus()}>
                        <Text style={{textAlign: 'center', fontSize: 30}}>cos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => pierwiastek()}>
                        <Text style={{textAlign: 'center', fontSize: 30}}>sqrt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={() => potega()}>
                        <Text style={{textAlign: 'center', fontSize: 30}}>pow</Text>
                    </TouchableOpacity>
                    </View>


                </View>
                <View style={{flex: 1}}>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{textAlign: 'center', fontSize: 30}} onPress={() => usun()}>Del</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{textAlign: 'center', fontSize: 30}} onPress={() => wyczysc()}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob("+")}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob("-")}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob('*')}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1}} onPress={() => zrob("/")}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>/</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
      </View>
    );
  }
}
