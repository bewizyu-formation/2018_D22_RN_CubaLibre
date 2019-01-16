

import getContactList from './Contacts/GetContactList';
import createContactFunc from './Contacts/CreateContact';

import getUsersFunc from './Users/GetUsers';
import createUserFunc from './Users/CreateUser';
import updateUserFunc from './Users/UpdateUser';
import getAuthenticatedUserFunc from './Users/getAuthenticatedUser';
import getProfileFunc from './getProfiles';
import loginFunc from './Users/login';
import forgotPasswordFunc from './Users/forgotPassword';

export function login(phone, password) {
  return loginFunc(phone, password);
}

export function getProfiles() {
  return getProfileFunc();
}

export function getContacts() {
  return getContactList();
}

export function forgotPassword(phone) {
  return forgotPasswordFunc(phone);
}

export function createContact(contact) {
  return createContactFunc(contact);
}

export function createUser(user, password, nbOfContacts) {
  nbOfContacts = nbOfContacts || 20; // defaut value 20
  return createUserFunc(user, password, nbOfContacts);
}

export function updateUser(user) {
  return updateUserFunc(user);
}

export function getUsers() {
  return getUsersFunc();
}

export function getAuthenticatedUser() {
  return getAuthenticatedUserFunc();
}
