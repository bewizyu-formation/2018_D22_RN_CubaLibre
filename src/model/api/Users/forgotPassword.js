

import { getJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default async function forgotPassword(phone) {
  return getJWT().then(() => fetch(`${BASE_URL}public/forgot-password`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ phone }),
  }).then((response) => {
    if (response.status === 204) {
      // code ok
    } else {
      return response.json();
    }
    return null;
  }).then((json) => {
    // On success there is no passage here
    if (json) {
      console.error(`error while requesting new password : ${json.message}`);
      return -1;
    }
    return null;
  }).catch((error) => {
    console.error(error);
  }));
}
