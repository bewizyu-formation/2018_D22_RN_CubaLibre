import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { logIn } from '../redux/store/contacts.action';

import NavigationService from '../NavigationService';

export const LOADING_SCENE_NAME = 'LOADING_SCENE';

const styles = StyleSheet.create({

});

export class LoadingScreen extends Component {
    static navigationOptions = {
        title: 'Familink',
    };

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            password: '',
        };

        this.navigateToContactsList = this.navigateToContactsList.bind(this);
        this.navigateToSignUp = this.navigateToLogin.bind(this);
    }

    navigateToContactsList() {
        this.props.navigation.navigate('ContactsList');
    }

    navigateToLogin() {
        NavigationService.navigate('SignUp');
    }

    navigateToPasswordForgotten() {
        NavigationService.navigate('PasswordForgotten');
    }

    render() {

        return (
            <View style={styles.container}>
                <Image
                    style={styles.images} source={require('../../assets/Familink.png')}>
                </Image>
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
)(LoadingScreen);