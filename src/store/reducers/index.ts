import { combineReducers } from 'redux';
import app from './app';
import todos from './todos';
import register from './register';
import login from './login';

const rootReducer = combineReducers({
  app,
  todos,
  register,
  login
});

export default rootReducer;
