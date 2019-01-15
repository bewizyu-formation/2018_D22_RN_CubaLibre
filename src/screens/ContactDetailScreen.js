import React, { Component } from 'react';
import {ContactDetailContainer} from '../components/ContactDetailContainer';

export const CONTACTDETAIL_SCENE_NAME = 'CONTACTDETAIL_SCENE';

export default class ContactDetailScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      contact: this.props.navigation.getParam('contact', 'NO-CONTACT')
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('contact', 'NO-CONTACT')
    };
  };

  render() {
    return (
        <ContactDetailContainer contact={this.state.contact}/>
    );
  }
}
