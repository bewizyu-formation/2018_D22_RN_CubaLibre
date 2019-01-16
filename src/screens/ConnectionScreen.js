import React, { Component } from 'react';
import {
  Button, TextInput, View, Text, Image, StyleSheet,
} from 'react-native';


import { CONTACTSLIST_SCENE_NAME } from './ContactsListScreen';

export const CONNECTION_SCENE_NAME = 'CONNECTION_SCENE';

export default class ConnectionScreen extends Component {
    static navigationOptions = {
      title: 'Connection',
    };

    constructor(props) {
      super(props);

      this.state = {
        login: '',
        password: '',
      };

      this.navigate = this.props.navigation.navigate;

      this.navigateToContactsList = this.navigateToContactsList.bind(this);
    }

    navigateToContactsList() {
      const tel = /^(0[67])(?:[ _.-]?([0-9]{2})){4}$/;
      const pass = /^([0-9]){4}$/;
      if (tel.test(this.state.login) === true && pass.test(this.state.password) === true) {
        alert('Bienvenue sur l application');
        this.navigate(CONTACTSLIST_SCENE_NAME);
      } else {
        alert('Numéro de téléphone ou mot de passe invalide');
      }
    }


    render() {
      return (
        <View style={styles.container}>
          <Image
            style={styles.images}
            source={require('../../assets/Logo.png')}
          />
          <TextInput
            keyboardType="numeric"
            value={this.state.login}
            onChangeText={login => this.setState({ login })}
            placeholder="Numéro de téléphone"
          />
          <TextInput
            secureTextEntry
            keyboardType="numeric"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Mot de passe"
          />
          <Button
            title="Se connecter"
            onPress={this.navigateToContactsList}
          />
          <Text>
            Mot de passe oublié
          </Text>
          <Text>
            Créer un compte
          </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 100,
    height: 100,
  },
});
