import { login, getContacts } from '../../model/api/APIClient';

export const ADD_CONTACT = 'ADD_CONTACT';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const CONTACTS_LOADED = 'CONTACTS_LOADED';
export const LOG_IN = 'LOG_IN';
// export const DELETE_CONTACT = 'DELETE_CONTACT';

export function addContact(phone, firstName, lastName, email,
  isEmergencyUser, isFamilinkUser, profile, gravatar) {
  return {
    type: ADD_CONTACT,
    phone,
    firstName,
    lastName,
    email,
    isEmergencyUser,
    isFamilinkUser,
    profile,
    gravatar,
  };
}

const mockFetch = () => new Promise((resolve) => {
    getContacts().then((contacts) => {
      resolve(contacts);
    });
});

export function contactsLoaded(contacts) {
  return {
    type: CONTACTS_LOADED,
    contacts,
  };
}

export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    return mockFetch()
      .then(contacts => dispatch(contactsLoaded(contacts)));
  };
}

export function logIn(phone, password, callback) {
  return (dispatch) => {
    dispatch({type: LOG_IN});
    return login(phone, password).then((errorMessage) => {
      callback(errorMessage)
    })
  }
}
