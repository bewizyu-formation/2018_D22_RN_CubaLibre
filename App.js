import React, {Component} from 'react';
import {View} from 'react-native';
import ContactsListScreen from './src/screens/ContactsListScreen';


export default class App extends Component {
  render() {
    return (
      <View>
        {/* <NavigationContainer /> */}
        <ContactsListScreen/>
      </View>
    );
  }
}

