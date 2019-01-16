import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, TouchableHighlight, Image, StyleSheet,
} from 'react-native';
import { ContactContext } from './ContactContext';

const white = '#fff';
const black = '#000';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 4,
    borderRadius: 8,
    shadowColor: black,
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
    borderColor: black,
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

export default class ContactItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: this.props.contact,
    };
  }

  render() {
    return (
      <ContactContext.Consumer>
        {
                    ({ getContactDetail }) => (
                      <TouchableHighlight onPress={() => getContactDetail(this.state.contact)}>
                        <View style={styles.item}>

                          <Image style={styles.images} source={require('../../assets/contact.png')} />
                          <Text style={styles.name}>{`${this.state.contact.firstName} ${this.state.contact.lastName}`}</Text>
                        </View>
                      </TouchableHighlight>
                    )
                }
      </ContactContext.Consumer>

    );
  }
}

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
// };
