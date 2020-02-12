import contacts from './contactsReducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    contacts,
});

export default reducer;
