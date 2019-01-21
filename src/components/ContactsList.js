import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { 
  Text, View, FlatList, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { loadContacts, loadProfiles } from '../redux/store/contacts.action';
import { ContactContext } from './ContactContext';
import { Colors } from '../Colors';

import ContactItem from './ContactItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  textInput: {
    display: 'flex',
    marginLeft: 42,
    marginRight: 42,
    marginTop: 12,
    marginBottom: 12,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    height: 43,
    borderBottomWidth: 0.5,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0000',
  },
  addContactButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 16,
    right: 16,
    justifyContent: 'center',
    backgroundColor: Colors.family,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginLeft: 16,
  },
  flatlistview: {
    marginBottom: 110
  }
});

class ContactsList extends Component {

  constructor(props) {
    super(props);

    this.state = {

      filter: '',
      selectedProfile: '',
      contacts: [],
      filteredContacts : [],
      profiles: []
    }

    this.filterByType = this.filterByType.bind(this.filterByType);
    this.changeSearchBar = this.changeSearchBar.bind(this.changeSearchBar);
    this.filterContacts = this.filterContacts.bind(this.filterContacts);
  }

  componentDidMount() {
    this.props.loadContacts().then(() => {
      this.setState({ contacts: this.props.contacts });
      this.setState({ filteredContacts: this.props.contacts })
    });
    this.props.loadProfiles();
  }

  getDerivedStateFromProps() {
    console.log('tessssst');
    
    return {
      contacts : this.props.contacts
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.contacts!==prevState.contacts){
      return { contacts: nextProps.contacts, filteredContacts: nextProps.contacts, filter: '', selectedProfile: '' };
   }
   else return null;
 }

  keyExtractor = (item, index) => `${item.firstName}${item.lastName}${item.phone}${item.email}${item.profile}`; // eslint-disable-line no-unused-vars

  renderItem = ({ item }) => (
    <ContactItem contact={item} key={item.phone}/>
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
    let filteredContacts = this.props.contacts.filter(contact => {
      let fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      return fullName.includes(this.state.filter);
    });
    if (this.state.selectedProfile) {
      filteredContacts = filteredContacts.filter(contact => {
        return contact.profile == this.state.selectedProfile
      });
    }

    this.setState({ filteredContacts });
  }

  displayActivatedProfileButton(name, profile, key) {
    return (
      <Button key={key}
        style={styles.button}
        color='#03436A'
        title={name} onPress={() => this.filterByType(profile)}>
      </Button>
    )
  }

  displayStandardProfileButton(name, profile, key) {
    return (
      <Button key={key}
        style={styles.button}
        color='#3D9AD1'
        title={name} onPress={() => this.filterByType(profile)}>
      </Button>
    )
  }

  lowercaseAndCapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  displayContacts() {
    if (this.props.loading) {
      return <Text>Loading ....</Text>;
    }
    return (
      <ContactContext.Consumer>
      {
        ({ addContact }) => (
          <View style={styles.container}>
            <View>
              <ScrollView
                horizontal={true}
                data={this.state.contacts}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
              >
                <View style={styles.filterContainer}>
                  {
                    this.state.selectedProfile == '' ?
                      this.displayActivatedProfileButton('Tous les contacts', '') :
                      this.displayStandardProfileButton('Tous les contacts', '')
                  }
                  {
                    this.props.profiles.map((profile, index) => {
                      const button = this.state.selectedProfile == profile ?
                        this.displayActivatedProfileButton(this.lowercaseAndCapitalizeFirstLetter(profile), profile, index) :
                        this.displayStandardProfileButton(this.lowercaseAndCapitalizeFirstLetter(profile), profile, index)
                        return button;
                    })
                  }
                </View>
              </ScrollView>
              <TextInput
                style={styles.textInput}
                value={this.state.filter}
                onChangeText={(filter) => this.changeSearchBar(filter.toLowerCase())}
                placeholder={'Je cherche quelqu\'un ...'}
                placeholderTextColor={'#999'}
                underlineColorAndroid={'#fff'}
                autoCorrect={false}
              />
            </View>
            <View style={styles.flatlistview}>
              <FlatList
                data={this.state.filteredContacts}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
              />
            </View>

            <TouchableOpacity
              style={styles.addContactButton}
              onPress={() => addContact()}
              underlayColor="#fff"
            >
              <Image style={styles.icon} source={require('../../assets/add.png')} />
            </TouchableOpacity>
          </View >
        )
      }
      </ContactContext.Consumer>
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
