import axios from 'axios';
import { toggleModel } from '../Reducers/ui-reducer';


export const FETCH_UPCCODES = 'FETCH_UPCCODES';

export const CHECK_CODE_ERROR = 'CHECK_CODE_ERROR';
export const CHECK_CODE_SUCCESS = 'CHECK_CODE_SUCCESS';
export const RESET_CODE = 'RESET_CODE';

const fetchUpcCodes = () => {
  const promise = new Promise((resolve, reject) => {
    axios.get('https://pure-cliffs-83404.herokuapp.com/upccode')
      .then(res => resolve(res.data))
      .catch(err => reject(err));
    });
    return {
      type: FETCH_UPCCODES,
      payload: promise
    };
};

const checkCodeError = () => ({ type: CHECK_CODE_ERROR, message: 'Not Found!' });
const checkCodeSuccess = code => ({ type: CHECK_CODE_SUCCESS, code });
const resetCode = () => ({type: RESET_CODE})

export const checkUpcCode = code => { // eslint-disable-line
  return (dispatch, getState) => {
    const upReducer = getState().code.upcCodeReducer;
    if (upReducer.upcCodes === null) {
      dispatch(fetchUpcCodes())
        .then((data) => {
          console.log('data', data, 'userCode', code)
          data.value.upc.filter((upcs) => {
            console.log('upcs', upcs, 'code', code, 'upcs === code', upcs.upc === code.data);
          });
          const found = data.value.upc.filter(upcs => upcs.upc === code.data);
          console.log('found', found);
          if (found.length === 0) {
            dispatch(toggleModel('There was no code found', true));
            dispatch(checkCodeError());
            return dispatch(resetCode());
          }
          dispatch(toggleModel('Code was found', false));
          dispatch(checkCodeSuccess(code));
          return dispatch(resetCode());
        });
      // dispatch(checkUpcCode(code));
    }
  };
};
