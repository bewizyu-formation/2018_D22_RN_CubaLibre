import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, StyleSheet, Alert, TouchableOpacity, TextInput,
} from 'react-native';

const grey = '#F5FCFF';
const white = '#fff';
const purple = '#841584';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grey,
    margin: 6,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 8,
    fontSize: 40,
  },
  info: {
    marginLeft: 24,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  callButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: purple,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: white,
  },
  callButtonText: {
    color: white,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default class ContactDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: this.props.contact.phone,
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      email: this.props.contact.email,
      profile: this.props.contact.profile,
      isFamilinkUser: this.props.contact.isFamilinkUser,
      isEmergencyUser: this.props.contact.isEmergencyUser,
      gravatar: this.props.contact.gravatar,
      edit: this.props.edit,
    };

    this.callOrEditButton = this.callOrEditButton.bind(this);
  }

  handlePhoneChange(text) {
    this.setState({
      phone: text,
    });
  }

  handleEmailChange(text) {
    this.setState({
      email: text,
    });
  }

  callOrEditButton() {
    if (!this.props.edit) {
      return (
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Alert.alert('Appel en cours...')}
          underlayColor="#fff"
        >
          <Text style={styles.callButtonText}>Appeler</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.callButton}
        onPress={() => Alert.alert('Contact modifié')}
        underlayColor="#fff"
      >
        <Text style={styles.callButtonText}>Enregister</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            {this.state.gravatar !== null
              ? <Image style={styles.image} source={{ uri: this.state.gravatar }} />
              : <Image style={styles.image} source={require('../../assets/contact.png')} />
            }
            <Text style={styles.name}>{`${this.state.firstName} ${this.state.lastName}`}</Text>
          </View>
          <View>
            <View style={styles.info}>
              <Image style={styles.icon} source={require('../../assets/phone.png')} />
              {this.props.edit
                ? <TextInput value={this.state.phone} onChangeText={text => this.handlePhoneChange(text)} />
                : <Text>{this.state.phone}</Text>
              }
            </View>
            <View style={styles.info}>
              <Image style={styles.icon} source={require('../../assets/email.png')} />
              {this.props.edit
                ? <TextInput value={this.state.email} onChangeText={text => this.handleEmailChange(text)} />
                : <Text>{this.state.email}</Text>
              }
            </View>
            <View style={styles.info}>
              <Image style={styles.icon} source={require('../../assets/profile.png')} />
              {this.props.edit
                ? <TextInput value={this.state.profile} />
                : <Text>{this.state.profile}</Text>
              }
            </View>
          </View>
        </ScrollView>
        {this.callOrEditButton()}
      </View>
    );
  }
}

ContactDetailContainer.propTypes = {
  contact: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    isFamilinkUser: PropTypes.bool.isRequired,
    isEmergencyUser: PropTypes.bool.isRequired,
    gravatar: PropTypes.string.isRequired,
  }).isRequired,
  edit: PropTypes.bool.isRequired,
};
