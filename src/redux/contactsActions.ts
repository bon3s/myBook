import { ContactType } from '../types/ContactType';

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';

export const addContact = (value: ContactType) => ({
    type: ADD_CONTACT,
    value,
});

export const removeContact = (value: string) => ({
    type: REMOVE_CONTACT,
    value,
});

export const updateContact = (value: ContactType) => ({
    type: UPDATE_CONTACT,
    value,
});

export const updateFavorite = (value: string) => ({
    type: UPDATE_FAVORITE,
    value,
});
