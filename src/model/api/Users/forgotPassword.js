"use strict";

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export default async function forgotPassword(phone) {
    return getJWT().then(jwt => {
        return fetch(BASE_URL + 'public/forgot-password', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ 'phone': phone })
        }).then(response => {
            if (response.status == 204) {
                // code ok
            }
            else {
                return response.json();
            }
        }).then(json => {
            // On success there is no passage here
            if (json) {
                console.error('error while requesting new password : ' + json.message);
                return -1;
            }
        }).catch((error) => {
            console.error(error);
        });
    });
}