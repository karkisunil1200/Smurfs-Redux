import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_ERROR = 'SMURF_ERROR';

export const SMURF_ADD_START = 'SMURF_ADD_START';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_ERROR = 'SMURF_ADD_ERROR';

export const getSmurfs = () => dispatch => {
  dispatch({type: 'SMURF_START'});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({type: SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: SMURF_ERROR, payload: err.data});
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({type: SMURF_ADD_START});
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({type: SMURF_ADD_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: SMURF_ADD_ERROR, payload: err.msg});
    });
};
