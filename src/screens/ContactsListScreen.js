import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactsListContainer from '../components/ContactsListContainer';
import { ContactContext } from '../components/ContactContext';

export const CONTACTSLIST_SCENE_NAME = 'CONTACTSLIST_SCENE';

export default class ContactsListScreen extends Component {
  static navigationOptions = {
    title: 'List des contacts',
  };

  constructor(props) {
    super(props);

    this.getContactDetail = (contact) => {
      this.props.navigation.navigate('Details', {
        contact,
        edit: false,
      });
    };

    this.addContact = () => {
      this.props.navigation.navigate('Details', {
        edit: true,
      });
    };

    this.state = {
      getContactDetail: this.getContactDetail,
      addContact: this.addContact,
    };
  }

  render() {
    return (
      <ContactContext.Provider value={this.state}>
        <ContactsListContainer />
      </ContactContext.Provider>
    );
  }
}

ContactsListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
