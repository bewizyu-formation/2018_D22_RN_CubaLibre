const BASE_URL = 'https://familink-api.cleverapps.io/';
const LOGIN_URI = 'public/login';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};
import { storeJWT } from '../../dataStorage/AStorage';

export default function login(phone, password) {
    let queryBody = {
        phone: phone,
        password: password
    };

    return fetch(BASE_URL + LOGIN_URI, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(queryBody),
    }).then(response => response.json())
        .then(json => {
            let jwt = json.token;
            storeJWT(jwt);
        })
}