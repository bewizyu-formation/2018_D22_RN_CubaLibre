import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { View, Image } from 'react-native';

import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { contactsReducer } from './src/redux/store/contacts.reducer';

import AppContainer from './src/AppContainer';
import NavigationService from './src/NavigationService';

// Assemblage des différents reducers d'une application
const reducers = combineReducers({
  contacts: contactsReducer,
});
const logger = createLogger({
  level: 'log',
});

// Création du store
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.images} source={require('../../assets/Familink.png')}>
        </Image>
      </View>
    );
  }
}

/*
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>*/