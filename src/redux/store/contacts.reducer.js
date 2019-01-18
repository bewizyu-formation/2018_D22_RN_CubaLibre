import {
  ADD_CONTACT, LOAD_CONTACTS, CONTACTS_LOADED, LOG_IN,
} from './contacts.action';

export const initialState = {
  list: [],
  loading: false,
  loaded: false,
};
export function contactsReducer(state = initialState, action) {
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
    case LOG_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
}
