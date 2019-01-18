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
  static navigationOptions = () => {
    return {
      headerRight: (
        <>
          <TouchableHighlight onPress={() => Alert.alert('Supprimer')}>
            <Image style={styles.icon} source={require('../../assets/delete.png')} />
          </TouchableHighlight>
        </>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      contact: this.props.navigation.getParam('contact', 'NO-CONTACT'),
      edit: this.props.navigation.getParam('edit', false),
    };
  }

  render() {
    return (
      <ContactDetailContainer contact={this.state.contact} edit={this.state.edit} />
    );
  }
}

ContactDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
