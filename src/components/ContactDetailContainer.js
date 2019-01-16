import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, StyleSheet, Alert, TouchableOpacity,
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
      contact: this.props.contact,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/contact.png')} />
            <Text style={styles.name}>{this.state.contact}</Text>
          </View>
          <View>
            <View style={styles.info}>
              <Image style={styles.icon} source={require('../../assets/phone.png')} />
              <Text>XX.XX.XX.XX.XX</Text>
            </View>
            <View style={styles.info}>
              <Image style={styles.icon} source={require('../../assets/email.png')} />
              <Text>nom.prenom@gmail.com</Text>
            </View>
            <View style={styles.info}>
              <Image style={styles.icon} source={require('../../assets/profile.png')} />
              <Text>profil</Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Alert.alert('Appel en cours...')}
          underlayColor="#fff"
        >
          <Text style={styles.callButtonText}>Appeler</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ContactDetailContainer.propTypes = {
  contact: PropTypes.string.isRequired,
};
