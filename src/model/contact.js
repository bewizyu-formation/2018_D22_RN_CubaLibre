const contactStore = {
  phone: '',
  firstName: '',
  lastName: '',
  email: '',
  profile: '',
  gravatar: '',
  isFamilinkUser: false,
  isEmergencyUser: false,
};

// clone contactStore object
export default function getContactObject() {
  return Object.assign({}, contactStore);
}
