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
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerRight: (
        <>
          <TouchableHighlight onPress={() => { params.handleThis(); }}>
            <Image style={styles.icon} source={require('../../assets/edit.png')} />
          </TouchableHighlight>
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
      edit: false,
    };

    this.changeEditStatus = this.changeEditStatus.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleThis: this.changeEditStatus,
    });
  }

  changeEditStatus() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  render() {
    return (
      <ContactDetailContainer edit={this.state.edit} contact={this.state.contact} />
    );
  }
}

ContactDetailScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
  }).isRequired,
};
