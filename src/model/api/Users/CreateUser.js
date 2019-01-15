"use strict";

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export default async function createUser(user, password, nbOfContacts) {
    user.password = password;
    return getJWT().then(jwt => {
        return fetch(BASE_URL + 'public/sign-in?contactsLength=' + nbOfContacts, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then(json => {
                if (json.message) {
                    console.error('error at user creation : ' + json.message);
                    return -1;
                }
                else {
                    return json;
                }
            })
            .catch((error) => {
                console.error(error);
            });
    });
}