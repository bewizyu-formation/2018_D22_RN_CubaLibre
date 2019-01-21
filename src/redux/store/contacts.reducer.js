import {
  ADD_CONTACT, LOAD_CONTACTS, CONTACTS_LOADED, LOG_IN, LOAD_PROFILES, PROFILES_LOADED,
} from './contacts.action';

export const initialState = {
  list: [],
  profiles: [],
  loadProfiles: false,
  loading: false,
  loaded: false,
};
export function contactsReducer(state = initialState, action) {
  console.log('toto');
  console.log(action);
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case CONTACTS_LOADED:
      return {
        ...state,
        list: action.contacts,
        loading: false,
        loaded: true,
      };
    case ADD_CONTACT:
      const contact = {
        phone: action.phone,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        isEmergencyUser: action.isEmergencyUser,
        isFamilinkUser: action.isFamilinkUser,
        profile: action.profile,
        gravatar: action.gravatar,
      };
      return {
        ...state,
        list: [...state.list, contact],
      };
    case LOAD_PROFILES:
      return {
        ...state,
        loadProfiles: true,
      };
    case PROFILES_LOADED:
      return {
        ...state,
        profiles: action.profiles,
        loadProfiles: false,
      };
    case LOG_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
}
