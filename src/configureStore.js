import { combineReducers, createStore } from 'redux';
import collection from './reducers/collection';

export default function configureStore() {
  const reducer = combineReducers({
    collection,
  });

  const initialState = window.__INITIAL_STATE__;
  
  return createStore(reducer, initialState);
};
