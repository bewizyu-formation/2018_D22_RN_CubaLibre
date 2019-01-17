import React, { Component } from 'react';
import {Button, TextInput, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

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
    images : {
            width: 100,
            height: 100
    }
});

export default class ConnectionScreen extends Component {

    static navigationOptions = {
        title: 'Connection',
      };

    constructor(props) {
        super(props);

        this.state = {login: '',
        password: ''
       }
          
        this.navigateToContactsList = this.navigateToContactsList.bind(this);
        this.navigateToSignUp = this.navigateToSignUp.bind(this);
        this.navigateToPasswordForgotten = this.navigateToPasswordForgotten.bind(this);

        }

        navigateToContactsList() {
            const tel = /^(0[67])(?:[ _.-]?([0-9]{2})){4}$/;
            const pass = /^([0-9]){4}$/;
            if (tel.test(this.state.login) === true && pass.test(this.state.password) === true){
                this.props.navigation.navigate('ContactsList');
            } else {
                alert('Numéro de téléphone ou mot de passe invalide');
            }
    
        }

        navigateToSignUp(){
            this.props.navigation.navigate('SignUp');
        }

        navigateToPasswordForgotten(){
            this.props.navigation.navigate('PasswordForgotten');
        }
  

render() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.images} source={require('../../assets/Logo.png')}>
            </Image>
            <TextInput
                keyboardType='numeric'
                value={this.state.login}
                onChangeText={(login) => this.setState({login})}
                placeholder={'Numéro de téléphone'}
            />
            <TextInput
                secureTextEntry={true}
                keyboardType='numeric'
                value={this.state.password}
                onChangeText={(password)=> this.setState({password})}
                placeholder={'Mot de passe'}
            />
            <Button
                style={styles.button}
                title={'Se connecter'}
                onPress={this.navigateToContactsList}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={this.navigateToSignUp}>
            <Text>Créer un compte</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={this.navigateToPasswordForgotten}>
            <Text>Mot de passe oublié</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
