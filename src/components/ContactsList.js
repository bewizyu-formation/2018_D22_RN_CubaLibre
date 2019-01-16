import React, { Component } from 'react';

import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { addContact } from '../redux/store/contacts.action';
import ContactItem from './ContactItem';

export class ContactsList extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {
            this.props.contacts.map(contact => <ContactItem key={contact.phone} name={`${contact.firstName} ${contact.lastName}`} />)
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.list,
});
const mapDispatchToProps = dispatch => ({
  addContact: (phone, firstName, lastName, email, isEmergencyUser, isFamilinkUser, profile, gravatar) => dispatch(addContact(phone, firstName, lastName, email, isEmergencyUser, isFamilinkUser, profile, gravatar))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
