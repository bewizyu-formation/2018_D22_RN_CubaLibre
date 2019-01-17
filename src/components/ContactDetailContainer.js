import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity, TextInput, Picker,
} from 'react-native';

const grey = '#F5FCFF';
const black = '#000';
const white = '#fff';
const purple = '#841584';
const yellow = '#f4e542';

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
    marginRight: 24,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginLeft: 16,
  },
  actionButton: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    backgroundColor: yellow,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  editButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: purple,
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
  },
  editActionButton: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    backgroundColor: white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: yellow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicker: {
    height: 20,
    width: '80%',
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
      edit: false,
    };

    this.changeEditStatus = this.changeEditStatus.bind(this);
    this.callButton = this.callButton.bind(this);
    this.emailButton = this.emailButton.bind(this);
    this.profilePicker = this.profilePicker.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return {
      edit: state.edit,
    };
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

  handleProfileChange(text) {
    this.setState({
      profile: text,
    });
  }

  changeEditStatus() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  callButton() {
    if (this.state.edit) {
      return (
        <TouchableOpacity
          style={styles.editActionButton}
          underlayColor="#fff"
        >
          <Image style={styles.icon} source={require('../../assets/phone.png')} />
          <TextInput value={this.state.phone} onChangeText={text => this.handlePhoneChange(text)} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => Linking.openURL(`${'tel://'}${this.state.phone}`)}
        underlayColor="#fff"
      >
        <Image style={styles.icon} source={require('../../assets/phone.png')} />
        <TextInput editable={false} style={styles.actionButtonText} value={this.state.phone} onChangeText={text => this.handlePhoneChange(text)} />
      </TouchableOpacity>
    );
  }

  emailButton() {
    if (this.state.edit) {
      return (
        <TouchableOpacity
          style={styles.editActionButton}
          underlayColor="#fff"
        >
          <Image style={styles.icon} source={require('../../assets/email.png')} />
          <TextInput value={this.state.email} onChangeText={text => this.handleEmailChange(text)} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => Linking.openURL(`${'mailto:'}${this.state.email}`)}
        underlayColor="#fff"
      >
        <Image style={styles.icon} source={require('../../assets/email.png')} />
        <TextInput editable={false} style={styles.actionButtonText} value={this.state.email} onChangeText={text => this.handleEmailChange(text)} />
      </TouchableOpacity>
    );
  }

  profilePicker() {
    if (this.state.edit) {
      return (
        <>
          <Picker
            selectedValue={this.state.profile}
            // style={styles.profilePicker}
            style={{width: 200, height: 44}} itemStyle={{height: 44}}
            onValueChange={(itemValue, itemIndex) => this.setState({ profile: itemValue })}
          >
            <Picker.Item label="FAMILLE" value="FAMILLE" />
            <Picker.Item label="AMI" value="AMI" />
            <Picker.Item label="MEDECIN" value="MEDECIN" />
          </Picker>
        </>
      );
    }
    return (
      <Text>{this.state.profile}</Text>
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
              {this.callButton()}
            </View>
            <View style={styles.info}>
              {this.emailButton()}
            </View>
            <View style={styles.info}>
              <Image style={styles.icon} source={require('../../assets/profile.png')} />
              {this.profilePicker()}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => this.changeEditStatus()}
          underlayColor="#fff"
        >
          <Image style={styles.icon} source={require('../../assets/edit.png')} />
        </TouchableOpacity>
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
};
