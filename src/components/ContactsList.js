import React, { Component } from 'react';

import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { loadContacts } from '../redux/store/contacts.action';
import ContactItem from './ContactItem';

export class ContactsList extends Component {

  componentDidMount() {
    this.props.loadContacts();
  }

  keyExtractor = (item, index) => item.phone;

  renderItem = ({item}) => (
    <ContactItem contact={item} key={item.phone}/>
  )

  displayContacts() {
    if (this.props.loading) {
      return <Text>Loading ....</Text>;
    }

    return (
      <View>
        <FlatList
          data={this.props.contacts}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }

  render() {
    return (
      <>
        { this.displayContacts() }
      </>
      // <View>
      //   <FlatList
      //     data={this.props.contacts}
      //     renderItem={this.renderItem}
      //     keyExtractor={this.keyExtractor}
      //   />
      // </View>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.list,
  loading: state.contacts.loading,
});
const mapDispatchToProps = dispatch => ({
  loadContacts: () => dispatch(loadContacts()),
  // addContact: (phone, firstName, lastName, email, isEmergencyUser, isFamilinkUser, profile, gravatar) => dispatch(addContact(phone, firstName, lastName, email, isEmergencyUser, isFamilinkUser, profile, gravatar)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
