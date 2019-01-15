import React, {Component} from 'react';
import {View} from 'react-native';
import ContactsListScreen from './src/screens/ContactsListScreen';
import NavigationContainer from './src/NavigationContainer';


export default class App extends Component {
  render() {
    return (
        <NavigationContainer />    
    );
  }
}

