

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default async function createUser(user, password, nbOfContacts) {
  user.password = password;
  return getJWT().then(() => fetch(`${BASE_URL}public/sign-in?contactsLength=${nbOfContacts}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(user),
  }).then(response => response.json())
    .then((json) => {
      if (json.message) {
        console.error(`error at user creation : ${json.message}`);
        return -1;
      }
      return json;
    })
    .catch((error) => {
      console.error(error);
    }));
}
