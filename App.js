import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import NavigationContainer from './src/NavigationContainer';
import {ContactContext} from './src/components/ContactContext';
import ContactsListScreen from './src/screens/ContactsListScreen';


export default class App extends Component {

  constructor(props){
    super(props);

    this.getContactDetail = (contact) => {
      Alert.alert(contact)
    }

    this.state = {
      getContactDetail : this.getContactDetail,
    }
  }

  render() {
    return (
      <View>
        <ContactContext.Provider value={this.state}>
        <ContactsListScreen/>
        {/* <NavigationContainer /> */}
        </ContactContext.Provider>
        {/*<ContactsListScreen/>*/}
      </View>
    );
  }
}

