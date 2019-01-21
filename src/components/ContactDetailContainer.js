import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity, TextInput, Picker,
} from 'react-native';
import { connect } from 'react-redux';
import { updateContact, addContact } from '../redux/store/contacts.action';
import { Colors } from '../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonText: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  editNameContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  editNameInput: {
    borderRadius: 10,
    borderWidth: 1,
    width: '50%',
    margin: 8,
  },
  editButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
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
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  familyBackgroundColor: {
    backgroundColor: Colors.family,
  },
  doctorBackgroundColor: {
    backgroundColor: Colors.doctor,
  },
  seniorBackgroundColor: {
    backgroundColor: Colors.senior,
  },
  familyBorderColor: {
    borderColor: Colors.family,
  },
  doctorBorderColor: {
    borderColor: Colors.doctor,
  },
  seniorBorderColor: {
    borderColor: Colors.senior,
  },
  profilePicker: {
    width: 200,
    height: 44,
  },
  itemPicker: {
    height: 44,
  },
});

export class ContactDetailContainer extends Component {
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
      id: this.props.contact._id,
      edit: this.props.edit,
      newContact: this.props.newContact,
    };

    if (this.state.profile === 'MEDECIN') {
      this.colorThemeBackground = styles.doctorBackgroundColor;
      this.colorThemeBorder = styles.doctorBorderColor;
    } else if (this.state.profile === 'FAMILLE') {
      this.colorThemeBackground = styles.familyBackgroundColor;
      this.colorThemeBorder = styles.familyBorderColor;
    } else {
      this.colorThemeBackground = styles.seniorBackgroundColor;
      this.colorThemeBorder = styles.seniorBorderColor;
    }

    this.changeEditStatus = this.changeEditStatus.bind(this);
    this.contactName = this.contactName.bind(this);
    this.callButton = this.callButton.bind(this);
    this.emailButton = this.emailButton.bind(this);
    this.profilePicker = this.profilePicker.bind(this);
  }

  handleFirstNameChange(text) {
    this.setState({
      firstName: text,
    });
  }

  handleLastNameChange(text) {
    this.setState({
      lastName: text,
    });
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
    if (this.state.edit) {
      const contact = {
        phone: this.state.phone,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        profile: this.state.profile,
        isFamilinkUser: this.state.isFamilinkUser,
        isEmergencyUser: this.state.isEmergencyUser,
        gravatar: this.state.gravatar,
        _id: this.state.id,
      };
      
      if(this.state.newContact) {
        this.props.addContact(contact);
      } else {
        this.props.updateContact(contact);
      }
    }


    this.setState({
      edit: !this.state.edit,
      newContact: false,
    });
  }

  contactName() {
    if (this.state.edit) {
      return (
        <View style={styles.editNameContainer}>
          <TextInput style={[styles.editNameInput, this.colorThemeBorder]} placeholder="Prénom" value={this.state.firstName} onChangeText={text => this.handleFirstNameChange(text)} />
          <TextInput style={[styles.editNameInput, this.colorThemeBorder]} placeholder="Nom" value={this.state.lastName} onChangeText={text => this.handleLastNameChange(text)} />
        </View>
      );
    }
    return (
      <Text style={styles.name}>{`${this.state.firstName} ${this.state.lastName}`}</Text>
    );
  }

  callButton() {
    if (this.state.edit) {
      return (
        <TouchableOpacity
          style={[styles.editActionButton, this.colorThemeBorder]}
          underlayColor="#fff"
        >
          <Image style={styles.icon} source={require('../../assets/phone.png')} />
          <TextInput value={this.state.phone} placeholder="N° téléphone" onChangeText={text => this.handlePhoneChange(text)} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={[styles.actionButton, this.colorThemeBackground]}
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
          style={[styles.editActionButton, this.colorThemeBorder]}
          underlayColor="#fff"
        >
          <Image style={styles.icon} source={require('../../assets/email.png')} />
          <TextInput value={this.state.email} placeholder="Email" onChangeText={text => this.handleEmailChange(text)} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={[styles.actionButton, this.colorThemeBackground]}
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
            style={styles.profilePicker}
            itemStyle={styles.itemPicker}
            onValueChange={(itemValue, itemIndex) => this.setState({ profile: itemValue })}
          >
            <Picker.Item label="FAMILLE" value="FAMILLE" />
            <Picker.Item label="SENIOR" value="SENIOR" />
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
            {this.contactName()}
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
          style={[styles.editButton, this.colorThemeBackground]}
          onPress={() => this.changeEditStatus()}
          underlayColor="#fff"
        >
          <Image style={styles.icon} source={require('../../assets/edit.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateContact: contact => dispatch(updateContact(contact)),
  addContact: contact => dispatch(addContact(contact)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDetailContainer);

ContactDetailContainer.propTypes = {
  contact: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    isFamilinkUser: PropTypes.bool.isRequired,
    isEmergencyUser: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
  }).isRequired,
  edit: PropTypes.bool.isRequired,
  updateContact: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};
