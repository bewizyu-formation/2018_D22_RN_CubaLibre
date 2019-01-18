import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { loadContacts, updateContact } from '../redux/store/contacts.action';
import ContactItem from './ContactItem';

class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };

    this.updateContact = this.updateContact.bind(this);
  }

  componentDidMount() {
    this.props.loadContacts().then((contacts) => {
      this.setState(contacts);
    });
  }

  keyExtractor = (item, index) => `${item.firstName}${item.lastName}${item.phone}${item.email}${item.profile}`; // eslint-disable-line no-unused-vars

  renderItem = ({ item }) => (
    <ContactItem contact={item} key={item.phone} callBack={this.updateContact} />
  )

  updateContact(contact) {
    this.props.updateContact(contact);
  }

  displayContacts() {
    if (this.props.loading) {
      return <Text>Loading ....</Text>;
    }
    console.log(this.props.contacts);
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
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.list,
  loading: state.contacts.loading,
});
const mapDispatchToProps = dispatch => ({
  loadContacts: () => dispatch(loadContacts()),
  updateContact: contact => dispatch(updateContact(contact)),
  // addContact: (phone, firstName, lastName, email, isEmergencyUser, isFamilinkUser,
  // profile, gravatar) => dispatch(addContact(phone, firstName, lastName, email,
  // isEmergencyUser, isFamilinkUser, profile, gravatar)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);


ContactsList.propTypes = {
  loadContacts: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      phone: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      profile: PropTypes.string.isRequired,
      isFamilinkUser: PropTypes.bool.isRequired,
      isEmergencyUser: PropTypes.bool.isRequired,
      gravatar: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
