import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class ContactDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: this.props.contact,
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.contact}</Text>
      </View>
    );
  }
}

ContactDetailContainer.propTypes = {
  contact: PropTypes.string.isRequired,
};
