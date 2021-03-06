import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TextInput, View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import { logIn } from '../redux/store/contacts.action';
import { Colors } from '../Colors';

import NavigationService from '../NavigationService';

export const CONNECTION_SCENE_NAME = 'CONNECTION_SCENE';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
  buttonConnect: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.darkBlue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  buttonTextConnect: {
    color: Colors.white,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
});

export class ConnectionScreen extends Component {
    static navigationOptions = {
      title: 'Connection',
    };

    /* componentDidMount() {
        console.log('poire');
        console.log(this.props.navigation);
    } */

    constructor(props) {
      super(props);

      this.state = {
        phone: '',
        password: '',
      };

      this.navigateToContactsList = this.navigateToContactsList.bind(this);
      this.navigateToSignUp = this.navigateToSignUp.bind(this);
      this.navigateToPasswordForgotten = this.navigateToPasswordForgotten.bind(this);
    }

    navigateToContactsList() {
      const tel = /^(0[67])(?:[ _.-]?([0-9]{2})){4}$/;
      const pass = /^([0-9]){4}$/;
      if (tel.test(this.state.phone) === true && pass.test(this.state.password) === true) {
        this.props.logIn(this.state.phone, this.state.password, (errorMessage) => {
          if (errorMessage) {
            alert(errorMessage);
          } else {
            this.props.navigation.navigate('ContactsList');
          }
        });
      } else {
        alert('Numéro de téléphone ou mot de passe invalide');
      }
    }

    navigateToSignUp() {
      NavigationService.navigate('SignUp');
    }

    navigateToPasswordForgotten() {
      NavigationService.navigate('PasswordForgotten');
    }

    render() {
      return (
        <View style={styles.container}>
          <Image
            style={styles.images}
            source={require('../../assets/Familink.png')}
          />
          <TextInput
            keyboardType="numeric"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            placeholder="Numéro de téléphone"
          />
          <TextInput
            secureTextEntry
            keyboardType="numeric"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Mot de passe"
          />
          <TouchableOpacity
            style={styles.buttonConnect}
            onPress={this.navigateToContactsList}
            underlayColor="#fff"
          >
            <Text style={styles.buttonTextConnect}>SE CONNECTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.navigateToSignUp}
          >
            <Text>Créer un compte</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.navigateToPasswordForgotten}
          >
            <Text>Mot de passe oublié</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  logIn: (phone, password, callback) => dispatch(logIn(phone, password, callback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectionScreen);
