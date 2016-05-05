import { createAction, handleActions } from 'redux-actions';

// Actions
const SEARCH = 'collection/SEARCH';

export const search = createAction(SEARCH, (searchQuery) => ({ searchQuery }));

// Initial state
const initialState = {
  items: [],
  searchQuery: '',
};

// Reducers
export default handleActions({

  [SEARCH]: (state, { payload }) => {
    const { searchQuery } = payload;

    const items = state.items.map((item) => {
      let filtered;

      if (searchQuery === '') {
        filtered = false;
      } else {
        filtered = !item.name.includes(searchQuery) && !item.location.includes(searchQuery);
      }

      if (item.filtered === filtered) {
        return item;
      }

      return {
        ...item,
        filtered,
      };
    });

    return {
      ...state,
      searchQuery,
      items,
    };
  },

}, initialState);
