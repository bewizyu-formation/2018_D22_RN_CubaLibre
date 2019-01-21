import { login, getContacts, getProfiles } from '../../model/api/APIClient';

export const ADD_CONTACT = 'ADD_CONTACT';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const CONTACTS_LOADED = 'CONTACTS_LOADED';
export const LOG_IN = 'LOG_IN';
export const LOAD_PROFILES = 'LOAD_PROFILES';
export const PROFILES_LOADED = 'PROFILES_LOADED';

const mockedContacts = [
  {
    phone: '0710657376',
    firstName: 'Florent',
    lastName: 'Cerfon',
    email: 'florent.cerfon@gmail.com',
    isEmergencyUser: false,
    isFamilinkUser: true,
    profile: 'SENIOR',
    gravatar: 'https://1.gravatar.com/avatar/aee4e2f2a433d1daa08bc3fdf3595134',
  },
  {
    phone: '0685421230',
    firstName: 'Amandine',
    lastName: 'Richaudeau',
    email: 'test@nomail.com',
    isEmergencyUser: false,
    isFamilinkUser: true,
    profile: 'MEDECIN',
    gravatar: '',
  },
  {
    phone: '0785421236',
    firstName: 'Kevyn',
    lastName: 'Buchet',
    email: 'nomail@nomail.com',
    isEmergencyUser: false,
    isFamilinkUser: true,
    profile: 'FAMILLE',
    gravatar: '',
  },
];

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

export function profilesLoaded(profiles) {
  return {
    type: PROFILES_LOADED,
    profiles,
  };
}

export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    return mockFetch()
      .then(contacts => dispatch(contactsLoaded(contacts)));
  };
}

export function loadProfiles() {
  return (dispatch) => {
    dispatch({ type: LOAD_PROFILES });
    return profilesFetch()
      .then(profiles => dispatch(profilesLoaded(profiles)));
  };
}

export function logIn(phone, password, callback) {
  return (dispatch) => {
    dispatch({ type: LOG_IN });
    return login(phone, password).then((errorMessage) => {
      callback(errorMessage);
    });
  };
}
