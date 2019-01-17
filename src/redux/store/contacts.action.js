export const ADD_CONTACT = 'ADD_CONTACT';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const CONTACTS_LOADED = 'CONTACTS_LOADED';
// export const DELETE_CONTACT = 'DELETE_CONTACT';

const data = [
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
  setTimeout(() => resolve(data), 2000);
});

export function contactsLoaded(datas) {
  return {
    type: CONTACTS_LOADED,
    contacts: datas,
  };
}

export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: LOAD_CONTACTS });
    return mockFetch()
      .then(datas => dispatch(contactsLoaded(datas)));
  };
}
