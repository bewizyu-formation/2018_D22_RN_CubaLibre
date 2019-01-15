"use strict";

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
const CONTACTS_URI = 'secured/users/contacts';
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': ''
};

export default async function DeleteContact() {
    return getJWT().then(jwt => {
        headers.Authorization = `Bearer: ${jwt}`;
        return fetch(BASE_URL + CONTACTS_URI, {
            method: 'GET',
            headers: headers
        }).then((response) => response.json())
            .then(json => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    });
}