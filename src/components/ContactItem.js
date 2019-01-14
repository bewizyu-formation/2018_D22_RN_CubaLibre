import React, {Component} from 'react';
import {Text, View} from 'react-native';


export class ContactItem extends Component {
    constructor (props) {
        super(props);

    }

    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}

  