import { storeJWT } from '../../dataStorage/AStorage';

const BASE_URL = 'https://familink-api.cleverapps.io/';
const LOGIN_URI = 'public/login';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default function login(phone, password) {
  const queryBody = {
    phone,
    password,
  };

  return fetch(BASE_URL + LOGIN_URI, {
    method: 'POST',
    headers,
    body: JSON.stringify(queryBody),
  }).then(response => response.json())
    .then((json) => {
      const jwt = json.token;
      storeJWT(jwt);
    });
}
