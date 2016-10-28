import { combineReducers } from 'redux';

const fakeReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  fakeReducer
});
