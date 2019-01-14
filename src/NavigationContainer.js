import React from 'react';
import { StackNavigator } from 'react-navigation';

import ContactsListScreen, { CONTACTSLIST_SCENE_NAME } from './screens/ContactsListScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[CONTACTSLIST_SCENE_NAME] = {
  screen: ContactsListScreen,
};

const ApplicationNavigator = StackNavigator(stackNavigatorConfig, {
  initialRouteName: CONTACTSLIST_SCENE_NAME,
});

export default () => <ApplicationNavigator />;
