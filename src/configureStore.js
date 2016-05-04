import { combineReducers, createStore } from 'redux';
import collection from './reducers/collection';

export default function configureStore() {
  const reducer = combineReducers({
    collection,
  });

  const initialState = window.INITIAL_STATE;
  const enhancer = window.devToolsExtension ? window.devToolsExtension() : undefined;
  return createStore(reducer, initialState, enhancer);
}
