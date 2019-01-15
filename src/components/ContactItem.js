import React, { Component } from 'react';
import {
  Text, View, TouchableHighlight, Image, StyleSheet,
} from 'react-native';
import { ContactContext } from './ContactContext';


export class ContactItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContactContext.Consumer>
        {
                    ({ getContactDetail }) => (
                      <TouchableHighlight onPress={() => getContactDetail(this.props.name)}>
                        <View style={styles.item}>
                          <Image style={styles.images} source={require('../../assets/contact.png')} />
                          <Text style={styles.name}>{this.props.name}</Text>
                        </View>
                      </TouchableHighlight>
                    )
                }
      </ContactContext.Consumer>

    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  images: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#000000',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  name: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
