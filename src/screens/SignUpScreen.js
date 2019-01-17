import React, { Component } from 'react';
import {View, Text} from 'react-native';

export const SIGN_UP_SCENE_NAME = 'SIGN_UP_SCENE';

export default class SignUpScreen extends Component {

    static navigationOptions = {
        title: 'SignUp',
      };

    constructor(props) {
        super(props);

       }

       render() {
        return (
            <View>
                <Text>
                Créer un compte
                </Text>  
            </View>
            );
        }
    }
    
