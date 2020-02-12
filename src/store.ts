import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './redux/index';

const store = createStore(
    reducer,
    undefined,
    devToolsEnhancer({})
    // Specify custom devTools options
);

const persistor = persistStore(store);

export default { store, persistor };
