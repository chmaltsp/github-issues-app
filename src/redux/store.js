import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';

import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';

import reducers from './reducer';

const config = {
    key: 'root',
    storage
};

const reducer = persistCombineReducers(config, reducers);

export default function store() {
    const middlewares = [thunk];

    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enchancers = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(reducer, enchancers);

    const persistor = persistStore(store);

    return { store, persistor };
}
