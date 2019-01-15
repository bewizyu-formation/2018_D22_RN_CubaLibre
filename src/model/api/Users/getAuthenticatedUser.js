"use strict";

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
const AUTHENTICATED_USERS_URI = 'secured/users/current';
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': ''
};

export default async function getAuthenticatedUser() {
    return getJWT().then(jwt => {
        headers.Authorization = `Bearer: ${jwt}`;
        return fetch(BASE_URL + AUTHENTICATED_USERS_URI, {
            method: 'GET',
            headers: headers
        }).then((response) => response.json())
            .then(json => {
                if (json.message) {
                    console.error('error while getting authentiated users : ' + json.message);
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