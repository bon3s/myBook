import { ContactType } from '../types/ContactType';

export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export const addContact = (value: ContactType) => ({
    type: ADD_CONTACT,
    value,
});

export const removeContact = (value: ContactType) => ({
    type: REMOVE_CONTACT,
    value,
});
