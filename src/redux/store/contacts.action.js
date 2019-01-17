import { login, getContacts } from '../../model/api/APIClient';

export const ADD_CONTACT = 'ADD_CONTACT';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const CONTACTS_LOADED = 'CONTACTS_LOADED';
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
  login('0600000002', '0000').then(() => {
    getContacts().then((contacts) => {
      resolve(contacts);
    });
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
