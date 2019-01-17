import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
    
