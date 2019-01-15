"use strict";

import { storeJWT } from '../dataStorage/AStorage';
import getContactList from './Contacts/GetContactList';
import createContactFunc from './Contacts/CreateContact';
import deleteContactFunc from './Contacts/DeleteContact';
import updateContactFunc from './Contacts/UpdateContact';

import createUserFunc from './Users/CreateUser';

const BASE_URL = 'https://familink-api.cleverapps.io/';
const LOGIN_URI = 'public/login';
const PROFILE_URI = 'public/profiles';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export function login(phone, password) {
    let queryBody = {
        phone: phone,
        password: password
    };

    fetch(BASE_URL + LOGIN_URI, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(queryBody),
    }).then(response => response.json())
        .then(json => {
            let jwt = json.token;
            storeJWT(jwt);
        })
}

export function getProfiles() {
    return fetch(BASE_URL + PROFILE_URI, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .then(json => {
            if (json.message) {
                console.error('error while getting profiles');
                console.error(json.message);
                return -1;
            }
            else {
                return json;
            }
        })
}

export function getContacts() {
    return getContactList();
}

export function createContact(contact) {
    return createContactFunc(contact);
}

export function deleteContact() {
    return deleteContactFunc();
}

export function updateContact() {
    return updateContactFunc();
}

export function createUser(user, password, nbOfContacts) {
    nbOfContacts = nbOfContacts || 20; // defaut value 20
    return createUserFunc(user, password, nbOfContacts);
}