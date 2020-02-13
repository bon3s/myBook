import { createStore, Reducer } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redux';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer: Reducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
