import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_ERROR = 'SMURF_ERROR';

export const getSmurfs = () => dispatch => {
  dispatch({type: 'SMURF_START'});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('this is from action: ', res.data);
      dispatch({type: SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: SMURF_ERROR, payload: err.data});
    });
};
