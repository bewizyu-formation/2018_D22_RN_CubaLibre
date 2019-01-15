import React, { Component } from 'react';
import {ScrollView, View, StyleSheet } from 'react-native';
import {ContactItem} from './ContactItem';

export class ContactsList extends Component {

  render() {
    return (
        <View >
            <ScrollView>
                <ContactItem name={"Test"}></ContactItem>
                <ContactItem name={"Test 2"}></ContactItem>
                <ContactItem name={"Test 3"}></ContactItem>
                <ContactItem name={"Test"}></ContactItem>
                <ContactItem name={"Test 2"}></ContactItem>
                <ContactItem name={"Test 3"}></ContactItem>
                <ContactItem name={"Test"}></ContactItem>
                <ContactItem name={"Test 2"}></ContactItem>
                <ContactItem name={"Test 3"}></ContactItem>
                <ContactItem name={"Test"}></ContactItem>
                <ContactItem name={"Test 2"}></ContactItem>
                <ContactItem name={"Test 3"}></ContactItem>
                <ContactItem name={"Test"}></ContactItem>
                <ContactItem name={"Test 2"}></ContactItem>
                <ContactItem name={"Test 3"}></ContactItem>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1 
    },
});