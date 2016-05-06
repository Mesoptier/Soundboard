import { createAction, handleActions } from 'redux-actions';

// Actions
const SET_ACTIVE_SAMPLE = 'player/SET_ACTIVE_SAMPLE';

export const setActiveSample = createAction(SET_ACTIVE_SAMPLE);

// Initial state
const initialState = {
  activeSample: null,
};

// Reducers
export default handleActions({

  [SET_ACTIVE_SAMPLE]: (state, { payload }) => ({
    ...state,
    activeSample: payload,
  }),

}, initialState);
