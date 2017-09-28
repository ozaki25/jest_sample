import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { add } from '../utils/Calc'

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: '0',
      val2: '0',
      result: '0',
    };
  }

  onChangeVal1(val1) {
    const result = add(Number(val1), Number(this.state.val2));
    this.setState({ val1, result });
  }

  onChangeVal2(val2) {
    const result = add(Number(val2), Number(this.state.val2));
    this.setState({ val2, result });
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TextInput onChangeText={val1 => this.onChangeVal1(val1)} value={this.state.val1} keyboardType="numeric" />
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text> ＋ </Text>
        </View>
        <TextInput onChangeText={val2 => this.onChangeVal2(val2)} value={this.state.val2} keyboardType="numeric" />
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text> = </Text>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text>{ this.state.result }</Text>
        </View>
      </View>
    );
  }
}