import { ADD_CONTACT } from './contacts.action';
export const contacts = [
    {
        phone: '0710657376',
        firstName: 'Florent',
        lastName: 'Cerfon',
        email: 'florent.cerfon@gmail.com',
        isEmergencyUser: false,
        isFamilinkUser: true,
        profile: 'SENIOR',
        gravatar: 'https://1.gravatar.com/avatar/aee4e2f2a433d1daa08bc3fdf3595134'
    },
    {
        phone: '0685421230',
        firstName: 'Amandine',
        lastName: 'Richaudeau',
        email: 'test@nomail.com',
        isEmergencyUser: false,
        isFamilinkUser: true,
        profile: 'MEDECIN',
        gravatar: ''
    },
    {
        phone: '0785421236',
        firstName: 'Kevin',
        lastName: 'Richelieu',
        email: 'nomail@nomail.com',
        isEmergencyUser: false,
        isFamilinkUser: true,
        profile: 'FAMILLE',
        gravatar: ''
    }
];
export const initialState = {
    list: contacts,
};
export function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            const contact = {
                phone: action.phone,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email,
                isEmergencyUser: action.isEmergencyUser,
                isFamilinkUser: action.isFamilinkUser,
                profile: action.profile,
                gravatar: action.gravatar
            }
            return {
                ...state,
                list: [...state.list, training],
            }
        default:
            return state;
    }
}