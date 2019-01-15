import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ContactsListScreen, { CONTACTSLIST_SCENE_NAME } from './screens/ContactsListScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[CONTACTSLIST_SCENE_NAME] = {
  screen: ContactsListScreen,
};

const applicationNavigator = createStackNavigator(
  {
    Home: {
      screen: ContactsListScreen
    }
  }
);

export default createAppContainer(applicationNavigator);
