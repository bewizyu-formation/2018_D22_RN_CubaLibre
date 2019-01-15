import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ContactDetailContainer extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.contact}</Text>
      </View>
    );
  }
}
