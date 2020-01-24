import {
  SMURF_START,
  SMURF_SUCCESS,
  SMURF_ADD_START,
  SMURF_ADD_SUCCESS,
  SMURF_ADD_ERROR
} from '../actions';

export const initialState = {
  smurfs: [],
  fetchingSmurf: false,

  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //fetching smurfs
    case SMURF_START:
      return {
        ...state,
        fetchingSmurf: true,
        error: null
      };

    case SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: null
      };

    //Adding smurfs
    case SMURF_ADD_START:
      return {
        ...state,
        addingSmurf: true,
        error: null
      };

    case SMURF_ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };

    case SMURF_ADD_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };

    default:
      return state;
  }
};
