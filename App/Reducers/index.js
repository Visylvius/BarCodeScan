import { combineReducers } from 'redux';
import CodeReducer from './upc-reducer';
import uiReducer from './ui-reducer';

export default combineReducers({
  code: CodeReducer,
  ui: uiReducer
});
