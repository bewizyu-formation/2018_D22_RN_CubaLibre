import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import {addUser, logIn} from '../redux/store/contacts.action';

export const SIGN_UP_SCENE_NAME = 'SIGN_UP_SCENE';

const white = '#fff';
const blue = '#015666';
const red = '#FF0000';

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
        marginLeft: 10,
        color: blue,
        fontSize: 15,
        fontWeight: 'bold',
    },
    textInput: {
        marginLeft: 10,
        //textAlign: 'center',
    },
    errorMessage: {
        marginLeft: 10,
        color: red,
        fontStyle: 'italic'
    }
});

export class SignUpScreen extends Component {

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
            profile: 'SENIOR',
            email: '',
            showErrorPhone: false,
            showErrorFirstname: false,
            showErrorLastname: false,
            showErrorPassword: false,
            showErrorMail: false
        };

        this.navigateToContactsList = this.navigateToContactsList.bind(this);

    }

    validatePhone = (phone) => {
        const tel = /^(0[67])(?:[ _.-]?([0-9]{2})){4}$/;
        return tel.test(phone);
    }

    validatePassword = (password) => {
        const pass = /^([0-9]){4}$/;
        return pass.test(password);
    }

    validateEmail = (email) => {
        const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mail.test(email);
    }

    navigateToContactsList() {
        this.setState({showErrorPhone: false})
        this.setState({showErrorFirstname: false})
        this.setState({showErrorLastname: false})
        this.setState({showErrorPassword: false})
        this.setState({showErrorMail: false})


        let error = false;

        if (!this.validatePhone(this.state.phone)) {
            this.setState({showErrorPhone: true})
            error = true
        }
        if (this.state.firstname === ''){
            this.setState({showErrorFirstname: true})
            error = true
        }
        if (this.state.lastname === ''){
            this.setState({showErrorLastname: true})
            error = true
        }
        if (!this.validatePassword(this.state.password)) {
            this.setState({showErrorPassword: true})
            error = true
        } 
        if (!this.validateEmail(this.state.email)) {
            this.setState({showErrorMail: true })
            error = true
        }
        if (error === false) {
            this.props.addUser(this.state.phone, this.state.password, this.state.firstname, this.state.lastname, this.state.email, this.state.profile, (errorMessage) => {
                if (errorMessage.message) {
                    alert(errorMessage.message);
                }
                else {
                    this.props.logIn(this.state.phone, this.state.password, (errorMessage) => {
                        if (errorMessage) {
                            alert(errorMessage);
                        } else {
                            this.props.navigation.navigate('ContactsList');
                        }
                    })
                }
            });
        }
    }
    render() {
        let phoneMessage = undefined;
        let firstnameMessage = undefined;
        let lastnameMessage = undefined;
        let passwordMessage = undefined;
        let mailMessage = undefined;


        if (this.state.showErrorPhone) {
            phoneMessage = <Text style={styles.errorMessage}>{this.state.showErrorPhone ? 'Numéro de téléphone invalide' : ''}</Text>
        }

        if (this.state.showErrorFirstname){
            firstnameMessage = <Text style={styles.errorMessage}>{this.state.showErrorFirstname ? 'Champ obligatoire' : ''}</Text>
        }

        if (this.state.showErrorLastname) {
            lastnameMessage = <Text style={styles.errorMessage}>{this.state.showErrorLastname ? 'Champ obligatoire' : ''}</Text>
        }

        if (this.state.showErrorPassword) {
            passwordMessage = <Text style={styles.errorMessage}>{this.state.showErrorPassword ? 'Mot de passe invalide' : ''}</Text>
        }

        if (this.state.showErrorMail) {
            mailMessage = <Text style={styles.errorMessage}>{this.state.showErrorMail ? 'Mail invalide' : ''}</Text>
        }
    
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.textTitle}>NUMERO DE TELEPHONE</Text>
                <TextInput style={styles.textInput}
                    keyboardType='numeric'
                    value={this.state.phone}
                    onChangeText={(phone) => this.setState({ phone })}
                    placeholder={'Saisissez un numéro'}/>
                    {phoneMessage}

                <Text style={styles.textTitle}>PRENOM</Text>
                <TextInput style={styles.textInput}
                    value={this.state.firstname}
                    onChangeText={(firstname) => this.setState({ firstname })}
                    placeholder={'Saisissez un prénom'}/>
                    {firstnameMessage}

                <Text style={styles.textTitle}>NOM</Text>
                <TextInput style={styles.textInput}
                    value={this.state.lastname}
                    onChangeText={(lastname) => this.setState({ lastname })}
                    placeholder={'Saisissez un nom de famille'}/>
                    {lastnameMessage}

                <Text style={styles.textTitle}>MOT DE PASSE (4 chiffres)</Text>
                <TextInput style={styles.textInput}
                    keyboardType='numeric'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Saisissez un mot de passe'}/>
                    {passwordMessage}

                <Text style={styles.textTitle}>PROFIL</Text>
                <Picker
                    selectedValue={this.state.profile}
                    onValueChange={(profile) => this.setState({ profile })}>
                    <Picker.Item label="Senior" value="SENIOR" />
                    <Picker.Item label="Famille" value="FAMILLE" />
                    <Picker.Item label="Médecin" value="MEDECIN" />
                </Picker>

                <Text style={styles.textTitle}>E MAIL</Text>
                <TextInput style={styles.textInput}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={'Saisissez un email'}/>
                    {mailMessage}

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.navigateToContactsList}
                    underlayColor="#fff">
                    <Text style={styles.buttonText}>Créer et se connecter</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    logIn: (phone, password, callback) => dispatch(logIn(phone, password, callback)),
    addUser: (phone, password, firstName, lastName, email, profile, callback) => dispatch(addUser(phone, password, firstName, lastName, email, profile, callback)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpScreen);
}
