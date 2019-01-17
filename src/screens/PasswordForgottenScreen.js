import React, { Component } from 'react';
import {View, Text} from 'react-native';

export const PASSWORD_FORGOTTEN_SCENE_NAME = 'PASSWORD_FORGOTTEN_SCENE';

export default class PasswordForgottenScreen extends Component {

    static navigationOptions = {
        title: 'PasswordForgotten',
      };

    constructor(props) {
        super(props);

       }

       render() {
        return (
            <View>
                <Text>
                Mot de passe oublié
                </Text>  
            </View>
            );
        }
    }