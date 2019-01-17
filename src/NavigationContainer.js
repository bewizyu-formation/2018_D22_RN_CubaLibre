import { createStackNavigator, createAppContainer } from 'react-navigation';

import ContactsListScreen, { CONTACTSLIST_SCENE_NAME } from './screens/ContactsListScreen';
import ContactDetailScreen, { CONTACTDETAIL_SCENE_NAME } from './screens/ContactDetailScreen';
import ConnectionScreen, { CONNECTION_SCENE_NAME } from './screens/ConnectionScreen';
import SignUpScreen, {SIGN_UP_SCENE_NAME} from './screens/SignUpScreen';
import PasswordForgottenScreen, {PASSWORD_FORGOTTEN_SCENE_NAME} from './screens/PasswordForgottenScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[CONNECTION_SCENE_NAME] = {
  screen: ConnectionScreen,
};

stackNavigatorConfig[SIGN_UP_SCENE_NAME] = {
  screen: SignUpScreen,
};

stackNavigatorConfig[PASSWORD_FORGOTTEN_SCENE_NAME] = {
  screen: PasswordForgottenScreen,
};

stackNavigatorConfig[CONTACTSLIST_SCENE_NAME] = {
  screen: ContactsListScreen,
};

stackNavigatorConfig[CONTACTDETAIL_SCENE_NAME] = {
  screen: ContactDetailScreen,
};

const applicationNavigator = createStackNavigator(
  {
    Home: {
      screen: ConnectionScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    PasswordForgotten: {
      screen: PasswordForgottenScreen,
    },
    ContactsList: {
      screen: ContactsListScreen,
    },
    Details: {
      screen: ContactDetailScreen,
    },
  },
);

export default createAppContainer(applicationNavigator);
