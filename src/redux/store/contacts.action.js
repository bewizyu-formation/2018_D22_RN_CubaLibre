export const ADD_CONTACT = 'ADD_CONTACT';
// export const DELETE_CONTACT = 'DELETE_CONTACT';

export function addContact(phone, firstName, lastName, email,
  isEmergencyUser, isFamilinkUser, profile, gravatar) {
  return {
    type: ADD_CONTACT,
    phone,
    firstName,
    lastName,
    email,
    isEmergencyUser,
    isFamilinkUser,
    profile,
    gravatar,
  };
}
