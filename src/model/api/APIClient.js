import getContactList from './Contacts/GetContactList';
import createContactFunc from './Contacts/CreateContact';

import getUsersFunc from './Users/GetUsers';
import createUserFunc from './Users/CreateUser';
import updateUserFunc from './Users/UpdateUser';
import getAuthenticatedUserFunc from './Users/getAuthenticatedUser';
import getProfileFunc from './getProfiles';
import loginFunc from './Users/login';
import forgotPasswordFunc from './Users/forgotPassword';

import NavigationService from '../../NavigationService';

const EXPIRED_JWT = 'EXPIRED_JWT'

function manageExpiredJwt(responseApi) {
console.log('je passe');
console.log(responseApi);
  let answer = responseApi.then(response => {
    Console.log('tes');
    Console.log(response);
    if (response.status == 401) {
      NavigationService.navigate('Connection', { reason : EXPIRED_JWT } );
    }
    return response.json();
  });
  return answer.then(json => {

    Console.log('poire');
    Console.log(json);
    return json;
  }).catch((error) => {
  });
}

export function login(phone, password) {
  return loginFunc(phone, password);
}

export function getProfiles() {
  return manageExpiredJwt(getProfileFunc());
}

export function getContacts() {
  return manageExpiredJwt(getContactList());
}

export function forgotPassword(phone) {
  return manageExpiredJwt(forgotPasswordFunc(phone));
}

export function createContact(contact) {
  return manageExpiredJwt(createContactFunc(contact));
}

export function createUser(user, password, nbOfContacts) {
  nbOfContacts = nbOfContacts || 20; // defaut value 20
  return manageExpiredJwt(createUserFunc(user, password, nbOfContacts));
}

export function updateUser(user) {
  return manageExpiredJwt(updateUserFunc(user));
}

export function getUsers() {
  return manageExpiredJwt(getUsersFunc());
}

export function getAuthenticatedUser() {
  return manageExpiredJwt(getAuthenticatedUserFunc());
}
