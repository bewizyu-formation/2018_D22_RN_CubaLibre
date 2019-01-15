import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ContactsListScreen, { CONTACTSLIST_SCENE_NAME } from './screens/ContactsListScreen';
import ContactDetailScreen, { CONTACTDETAIL_SCENE_NAME } from './screens/ContactDetailScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[CONTACTSLIST_SCENE_NAME] = {
  screen: ContactsListScreen,
};

stackNavigatorConfig[CONTACTDETAIL_SCENE_NAME] = {
  screen: ContactDetailScreen,
};

const applicationNavigator = createStackNavigator(
  {
    Home: {
      screen: ContactsListScreen
    },
    Details: {
      screen : ContactDetailScreen
    }
  }
);

export default createAppContainer(applicationNavigator);
