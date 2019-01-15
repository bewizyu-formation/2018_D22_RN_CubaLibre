import React, { Component } from 'react';
import {ScrollView, View, Text, StyleSheet } from 'react-native';
import {ContactItem} from './ContactItem';

export class ContactsList extends Component {

  render() {
    return (
        <View>
            <Text>Test out</Text>
            <ScrollView>
                <Text>Test in</Text>
                <ContactItem name={"Test"}></ContactItem>
                <ContactItem name={"Test 2"}></ContactItem>
                <ContactItem name={"Test 3"}></ContactItem>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});