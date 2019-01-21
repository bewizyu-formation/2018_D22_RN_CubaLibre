const BASE_URL = 'https://familink-api.cleverapps.io/';
const PROFILE_URI = 'public/profiles';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default function getProfiles() {
  return fetch(BASE_URL + PROFILE_URI, {
    method: 'GET',
    headers,
  });
}