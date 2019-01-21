import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight, Image, StyleSheet, Alert,
} from 'react-native';
import ContactDetailContainer from '../components/ContactDetailContainer';

export const CONTACTDETAIL_SCENE_NAME = 'CONTACTDETAIL_SCENE';

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
  },
});

export default class ContactDetailScreen extends Component {
  static navigationOptions = () => ({
    headerRight: (
      <>
        <TouchableHighlight onPress={() => Alert.alert('Supprimer')}>
          <Image style={styles.icon} source={require('../../assets/delete.png')} />
        </TouchableHighlight>
      </>
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
      contact: this.props.navigation.getParam('contact', null),
      edit: this.props.navigation.getParam('edit', false),
      newContact: false,
    };

    if(this.state.contact === null){
      const newContact = {
        phone: '',
        firstName: '',
        lastName: '',
        email: '',
        profile: 'FAMILLE',
        isFamilinkUser: '',
        isEmergencyUser: '',
        gravatar: null,
      };

      this.state = {
        contact: newContact,
        edit: true,
        newContact: true,
      };
    }

    console.log('state 2');
    console.log(this.state.contact);
  }

  render() {
    return (
      <ContactDetailContainer contact={this.state.contact} edit={this.state.edit} newContact={this.state.newContact} />
    );
  }
}

ContactDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
