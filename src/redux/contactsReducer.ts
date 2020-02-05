import { ADD_CONTACT, REMOVE_CONTACT } from './contactsActions';
import { ContactType } from '../types/ContactType';
import { AnyAction } from 'redux';

export interface State {
    readonly contacts: ContactType[];
}

const initState: State = {
    contacts: [
        {
            id: 'first',
            name: 'pero',
            email: 'pero@gmail.com',
            numbers: [
                {
                    label: 'mobile',
                    number: '0911531334',
                },
            ],
        },
    ],
};
const contactsReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.value] };
        case REMOVE_CONTACT:
            const newArray = state.contacts.filter(item => {
                if (item.id === action.value) {
                    return false;
                } else {
                    return true;
                }
            });
            return {
                ...state,
                contacts: newArray,
            };
        default:
            return state;
    }
};

export default contactsReducer;
