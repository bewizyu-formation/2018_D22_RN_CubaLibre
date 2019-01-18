import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Text, View, FlatList, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { loadContacts, loadProfiles } from '../redux/store/contacts.action';
import ContactItem from './ContactItem';

const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    marginLeft: 42,
    marginRight: 42,
    marginTop: 12,
    marginBottom: 12,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    height: 28,
    borderBottomWidth: 0.5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0000',
  },
});

class ContactsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      selectedProfile: '',
      contacts: [],
      profiles: []
    }

    this.filterByType = this.filterByType.bind(this.filterByType);
    this.changeSearchBar = this.changeSearchBar.bind(this.changeSearchBar);
    this.filterContacts = this.filterContacts.bind(this.filterContacts);
  }

  componentDidMount() {
    this.props.loadContacts().then(() => {
      this.setState({ contacts: this.props.contacts });
    });
    this.props.loadProfiles();
  }

  keyExtractor = (item, index) => item.phone; // eslint-disable-line no-unused-vars

  renderItem = ({ item }) => (
    <ContactItem contact={item} key={item.phone} />
  )

  changeSearchBar = (filter) => {
    this.setState({ filter }, () => {
      this.filterContacts();
    });
  }

  filterByType = (selectedProfile) => {
    this.setState({ selectedProfile }, () => {
      this.filterContacts();
    });
  }

  filterContacts = () => {
    let contacts = this.props.contacts.filter(contact => {
      let fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      return fullName.includes(this.state.filter);
    });
    if (this.state.selectedProfile) {
      contacts = contacts.filter(contact => {
        return contact.profile == this.state.selectedProfile
      });
    }

    this.setState({ contacts });
  }

  displayContacts() {
    if (this.props.loading) {
      return <Text>Loading ....</Text>;
    }
    return (
      <View>
        <View>
          <ScrollView
            horizontal={true}
            data={this.state.contacts}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          >
            <View style={styles.container}>
              <Button
                style={styles.button}
                color={this.state.selectedProfile == '' ? '#00008b' : ''}
                title="Tous les contacts" onPress={() => this.filterByType('')}>
              </Button>
              {
                this.props.profiles.map((profile, index) => {
                  return (
                    <Button key={index}
                      style={styles.button}
                      color={this.state.selectedProfile == profile ? '#00008b' : ''}
                      title={profile.toLowerCase()} onPress={() => this.filterByType(profile)}>
                    </Button>
                  )
                })
              }
            </View>
          </ScrollView>
          <TextInput
            style={styles.textInput}
            onChangeText={(filter) => this.changeSearchBar(filter.toLowerCase())}
            placeholder={'Je cherche quelqu\'un ...'}
            placeholderTextColor={'#999'}
            underlineColorAndroid={'#fff'}
            autoCorrect={false}
          />
        </View>

        <FlatList
          data={this.state.contacts}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View >
    );
  }

  render() {
    return (
      <>
        {this.displayContacts()}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.list,
  profiles: state.contacts.profiles,
  loading: state.contacts.loading,
});
const mapDispatchToProps = dispatch => ({
  loadContacts: () => dispatch(loadContacts()),
  loadProfiles: () => dispatch(loadProfiles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);


ContactsList.propTypes = {
  loadContacts: PropTypes.func.isRequired,
  loadProfiles: PropTypes.func.isRequired,
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
  profiles: PropTypes.arrayOf(PropTypes.string.isRequired)
};
