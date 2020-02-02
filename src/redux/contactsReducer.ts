import { ADD_CONTACT } from './contactsActions';
import { ContactType } from '../types/ContactType';
import { AnyAction } from 'redux';

export interface State {
    contacts: ContactType[];
}

const initState = {
    contacts: [],
};
const contactReducer = (state: State = initState, action: AnyAction) => {
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
                selectedBulkyItems: newArray,
            };
    }
};

export default contactReducer;
