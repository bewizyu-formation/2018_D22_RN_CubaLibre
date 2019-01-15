import React from 'react';
// import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import ContactsListScreen, { CONTACTSLIST_SCENE_NAME } from './screens/ContactsListScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[CONTACTSLIST_SCENE_NAME] = {
  screen: ContactsListScreen,
};

// const ApplicationNavigator = StackNavigator(stackNavigatorConfig, {
//   initialRouteName: CONTACTSLIST_SCENE_NAME,
// });
const applicationNavigator = createStackNavigator(
  {
    Home: {
      screen: ContactsListScreen
    }
  }
);

// export default () => <ApplicationNavigator />;
export default createAppContainer(applicationNavigator);
