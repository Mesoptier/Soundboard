import { createAction, handleActions } from 'redux-actions';

// Actions
const SEARCH = 'collection/SEARCH';

export const search = createAction(SEARCH, (searchQuery) => ({ searchQuery }));

// Initial state
const initialState = {
  items: [],
  filteredItems: [],
  searchQuery: '',
};

// Reducers
export default handleActions({
  [SEARCH]: (state, { payload }) => {
    const { searchQuery } = payload;

    const filteredItems = state.items.filter((item) => (
      item.name.includes(searchQuery) ||
      item.location.includes(searchQuery)
    ));

    return {
      ...state,
      searchQuery,
      filteredItems,
    };
  },
}, initialState);
