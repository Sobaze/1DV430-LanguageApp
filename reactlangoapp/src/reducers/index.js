import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';

// creating our rootReducer with combinereducer
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});