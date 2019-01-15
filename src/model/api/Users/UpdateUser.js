"use strict";

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': ''
};

export default async function updateUser(user, password, nbOfContacts) {
    user.password = password;
    return getJWT().then(jwt => {
        headers.Authorization = `Bearer: ${jwt}`;
        return fetch(BASE_URL + 'secured/users', {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then(json => {
                if (json.message) {
                    console.error('error at user update : ' + json.message);
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