import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export const SIGN_UP_SCENE_NAME = 'SIGN_UP_SCENE';

const white = '#fff';
const blue = '#015666';

const styles = StyleSheet.create({

  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: blue,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: white,
  },
  buttonText: {
    color: white,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textTitle: {
    color: blue,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 12,
  }
});

export default class SignUpScreen extends Component {

    static navigationOptions = {
        title: 'SignUp',
      };

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            firstname: '',
            lastname: '',
            password: '',
            profileType: '',
            email: '',
          };
            
            this.navigateToContactsList = this.navigateToContactsList.bind(this);
    
            }

            navigateToContactsList(){
                this.props.navigation.navigate('ContactsList');
            }    

       render() {
        return (
            <View>
                <Text style={styles.textTitle}>NUMERO DE TELEPHONE</Text>
                <TextInput
                    value={this.state.phone}
                    onChangeText={(phone) => this.setState({phone})}
                    placeholder={'Saisissez un numéro'}
                />
                <Text style={styles.textTitle}>PRENOM</Text>
                <TextInput
                    value={this.state.firstname}
                    onChangeText={(firstname) => this.setState({firstname})}
                    placeholder={'Saisissez un prénom'}
                />
                <Text style={styles.textTitle}>NOM</Text>
                <TextInput
                    value={this.state.lastname}
                    onChangeText={(lastname) => this.setState({lastname})}
                    placeholder={'Saisissez un nom de famille'}
                />
                <Text style={styles.textTitle}>MOT DE PASSE</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={'Saisissez un mot de passe'}
                />
                <Text style={styles.textTitle}>PROFIL</Text>
                <TextInput
                    value={this.state.profileType}
                    onChangeText={(profile) => this.setState({profile})}
                    placeholder={'Profil'}
                />
                <Text style={styles.textTitle}>E MAIL</Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                    placeholder={'Saisissez un email'}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.navigateToContactsList}
                    underlayColor="#fff">
                <Text style={styles.buttonText}>Créer et se connecter</Text>
                </TouchableOpacity>
            </View>
            );
        }
    }
    
