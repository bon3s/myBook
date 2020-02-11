import {
    ADD_CONTACT,
    REMOVE_CONTACT,
    UPDATE_CONTACT,
    UPDATE_FAVORITE,
} from './contactsActions';
import { ContactType } from '../types/ContactType';
import { AnyAction } from 'redux';

export interface State {
    readonly contacts: ContactType[];
    readonly buffer: ContactType[];
}

const initState: State = {
    contacts: [],
    buffer: [],
};

const contactsReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.value] };

        case REMOVE_CONTACT:
            const newArray = state.contacts.filter(item =>
                item.id === action.value ? false : true
            );
            return {
                ...state,
                contacts: newArray,
            };

        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(item =>
                    item.id === action.value.id ? action.value : item
                ),
            };

        case UPDATE_FAVORITE:
            return {
                ...state,
                contacts: state.contacts.map(item => {
                    if (item.id === action.value) {
                        item.favorite === false
                            ? (item.favorite = true)
                            : (item.favorite = false);
                    }
                    return item;
                }),
            };

        default:
            return state;
    }
};

export default contactsReducer;
