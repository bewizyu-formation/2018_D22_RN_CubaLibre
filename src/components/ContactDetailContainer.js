import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, StyleSheet,
} from 'react-native';

const grey = '#F5FCFF';
const black = '#000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  images: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: black,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
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
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.images} source={require('../../assets/contact.png')} />
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
    );
  }
}

ContactDetailContainer.propTypes = {
  contact: PropTypes.string.isRequired,
};
