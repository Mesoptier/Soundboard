import { combineReducers, createStore } from 'redux';
import collection from './reducers/collection';
import player from './reducers/player';

export default function configureStore() {
  const reducer = combineReducers({
    collection,
    player,
  });

  const initialState = window.INITIAL_STATE;
  const enhancer = window.devToolsExtension ? window.devToolsExtension() : undefined;
  return createStore(reducer, initialState, enhancer);
}
