import {
  ADD_CONTACT, UPDATE_CONTACT, LOAD_CONTACTS, CONTACTS_LOADED, LOG_IN, LOAD_PROFILES, PROFILES_LOADED, ADD_USER
} from './contacts.action';

export const initialState = {
  list: [],
  profiles: [],
  loadProfiles: false,
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
        phone: action.contact.phone,
        firstName: action.contact.firstName,
        lastName: action.contact.lastName,
        email: action.contact.email,
        isEmergencyUser: action.contact.isEmergencyUser,
        isFamilinkUser: action.contact.isFamilinkUser,
        profile: action.contact.profile,
        gravatar: action.contact.gravatar,
      };
      return {
        ...state,
        list: [newContact, ...state.list],
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
              _id: action.contact._id,
            };
          }
          return contact;
        }),
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
      }
    case ADD_USER:
      return {
        ...state,
      }
    default:
      return state;
  }
}
