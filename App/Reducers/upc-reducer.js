import { combineReducers } from 'redux';
import { FETCH_UPCCODES, CHECK_CODE_SUCCESS, CHECK_CODE_ERROR, RESET_CODE } from '../Actions/barcode-actions';

const initialState = {upcCodes: null, loaded: null, error: null};

const upcCodeReducer = (state = initialState, action) => {
  console.log('state', state, 'action', action);
  switch (action.type) {
    case `${FETCH_UPCCODES}_PENDING`:
      return {
        upcCodes: null,
        error: null,
        loaded: false
      };
    case `${FETCH_UPCCODES}_FULFILLED`:
      return {
        upcCodes: action.payload,
        error: null,
        loaded: true
      };
    case `${FETCH_UPCCODES}_REJECTED`:
      return {
        upcCodes: null,
        error: action.payload,
        loaded: false
      };
    case RESET_CODE:
      return initialState;
    default:
      return state;
  }
};

const upCode = (state = {message: null, code: null, err: null}, action) => {
  switch (action.type) {
    case CHECK_CODE_ERROR:
      return {
        ...state,
        message: action.message,
        err: true
      };
    case CHECK_CODE_SUCCESS:
      return {
        ...state,
        code: action.code,
        err: false
      };
    default:
      return state;
  }
};

export default combineReducers({
  upcCodeReducer,
  upCode
});
