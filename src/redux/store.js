import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

export default function store() {
  const middlewares = [thunk];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enchancers = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(reducers, {}, enchancers);

  return store;
}
