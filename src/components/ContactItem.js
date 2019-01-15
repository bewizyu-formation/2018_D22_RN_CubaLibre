import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {ContactContext} from './ContactContext';



export class ContactItem extends Component {
    constructor (props) {
        super(props);

    }

    render() {
        return (
            <ContactContext.Consumer>
                {
                    ({getContactDetail})=>{
                        return (
                            <TouchableHighlight onPress={() => getContactDetail(this.props.name)}>
                                <View>
                                    <Text>{this.props.name}</Text>
                                </View>
                            </TouchableHighlight> 
                        )
                    }
                }
            </ContactContext.Consumer>

        )
    }
}

  