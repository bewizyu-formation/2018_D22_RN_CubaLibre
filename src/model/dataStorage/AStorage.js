import { AsyncStorage } from 'react-native';

const JWT_KEY = 'jwt';

async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(`error while stocking value of key ${key}`, e);
  }
}

async function retrieveData(key) {
  return AsyncStorage.getItem(key).then((value) => {
    if (value !== null) {
      return value;
    }
    return null;
  }).catch((error) => {
    console.error(`error while retrieving value of key ${key}`);
    console.error(error);
  });
}

export function storeJWT(jwt) {
  storeData(JWT_KEY, jwt);
}

export function getJWT() {
  return retrieveData(JWT_KEY);
}
