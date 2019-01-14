import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {ContactsListContainer} from '../components/ContactsListContainer';

export const CONTACTSLIST_SCENE_NAME = 'CONTACTSLIST_SCENE';

export default class ContactsListScreen extends Component {

  render() {
    return (
        <ContactsListContainer/>
    );
  }
}
