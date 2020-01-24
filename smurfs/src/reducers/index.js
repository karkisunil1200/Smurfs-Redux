import {SMURF_START, SMURF_SUCCESS} from '../actions';

export const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURF_START:
      return {
        ...state,
        fetchingSmurf: true,
        error: null
      };

    case SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
