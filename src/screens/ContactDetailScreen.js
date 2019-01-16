import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactDetailContainer from '../components/ContactDetailContainer';

export const CONTACTDETAIL_SCENE_NAME = 'CONTACTDETAIL_SCENE';

export default class ContactDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('contact', 'NO-CONTACT'),
  });

  constructor(props) {
    super(props);

    this.state = {
      contact: this.props.navigation.getParam('contact', 'NO-CONTACT'),
    };
  }


  render() {
    return (
      <ContactDetailContainer contact={this.state.contact} />
    );
  }
}

ContactDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
