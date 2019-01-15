import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ContactItem } from './ContactItem';

export class ContactsList extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <ContactItem name="Test 1" />
          <ContactItem name="Test 2" />
          <ContactItem name="Test 3" />
          <ContactItem name="Test 4" />
          <ContactItem name="Test 5" />
          <ContactItem name="Test 6" />
          <ContactItem name="Test 7" />
          <ContactItem name="Test 8" />
          <ContactItem name="Test 9" />
          <ContactItem name="Test 10" />
          <ContactItem name="Test 11" />
          <ContactItem name="Test 12" />
          <ContactItem name="Test 13" />
          <ContactItem name="Test 14" />
          <ContactItem name="Test 15" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
