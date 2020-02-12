import contacts from './contactsReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

const reducer = combineReducers({
    contacts,
});

export default persistReducer(persistConfig, reducer);
