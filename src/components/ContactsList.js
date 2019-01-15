import React, { Component } from 'react';
import {ScrollView, View, StyleSheet } from 'react-native';
import {ContactItem} from './ContactItem';

export class ContactsList extends Component {

  render() {
    return (
        <View >
            <ScrollView>
                <ContactItem name={"Test 1"}></ContactItem>
                <ContactItem name={"Test 2"}></ContactItem>
                <ContactItem name={"Test 3"}></ContactItem>
                <ContactItem name={"Test 4"}></ContactItem>
                <ContactItem name={"Test 5"}></ContactItem>
                <ContactItem name={"Test 6"}></ContactItem>
                <ContactItem name={"Test 7"}></ContactItem>
                <ContactItem name={"Test 8"}></ContactItem>
                <ContactItem name={"Test 9"}></ContactItem>
                <ContactItem name={"Test 10"}></ContactItem>
                <ContactItem name={"Test 11"}></ContactItem>
                <ContactItem name={"Test 12"}></ContactItem>
                <ContactItem name={"Test 13"}></ContactItem>
                <ContactItem name={"Test 14"}></ContactItem>
                <ContactItem name={"Test 15"}></ContactItem>
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