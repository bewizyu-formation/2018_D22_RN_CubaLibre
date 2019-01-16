

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
const USERS_URI = 'secured/users';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: '',
};

export default async function getUsers() {
  return getJWT().then((jwt) => {
    headers.Authorization = `Bearer: ${jwt}`;
    return fetch(BASE_URL + USERS_URI, {
      method: 'GET',
      headers,
    }).then(response => response.json())
      .then((json) => {
        if (json.message) {
          console.error(`error at get users : ${json.message}`);
          return -1;
        }
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  });
}
