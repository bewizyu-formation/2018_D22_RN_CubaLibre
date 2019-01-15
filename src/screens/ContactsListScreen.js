import React, { Component } from 'react';
import {Alert} from 'react-native';
import {ContactsListContainer} from '../components/ContactsListContainer';
import {ContactContext} from '../components/ContactContext';

export const CONTACTSLIST_SCENE_NAME = 'CONTACTSLIST_SCENE';

export default class ContactsListScreen extends Component {
  constructor(props){
    super(props);

    this.getContactDetail = (contact) => {
      this.props.navigation.navigate('Details',{
        contact: contact
      })
    }

    this.state = {
      getContactDetail : this.getContactDetail,
      testFunction : this.testFunction
    }
  }

  static navigationOptions = {
    title: 'List des contacts',
  };

  render() {
    return (
      <ContactContext.Provider value={this.state}>
        <ContactsListContainer/>
      </ContactContext.Provider>
    );
  }
}
