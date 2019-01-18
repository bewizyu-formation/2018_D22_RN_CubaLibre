import {
  ADD_CONTACT, UPDATE_CONTACT, LOAD_CONTACTS, CONTACTS_LOADED, LOG_IN,
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
      const newContact = {
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
        list: [...state.list, newContact],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        list: state.list.map((contact, index) => {
          if (contact._id === action.contact._id) {
            return {
              phone: action.contact.phone,
              firstName: action.contact.firstName,
              lastName: action.contact.lastName,
              email: action.contact.email,
              isEmergencyUser: action.contact.isEmergencyUser,
              isFamilinkUser: action.contact.isFamilinkUser,
              profile: action.contact.profile,
              gravatar: action.contact.gravatar,
              update: 0,
              _id: action.contact._id,
            };
          }
          return contact;
        }),
      };
    case LOG_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
}
