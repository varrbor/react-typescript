import { combineReducers } from 'redux';
import todos from './todos';
import register from './register';
import login from './login';

const rootReducer = combineReducers({
  todos,
  register,
  login
});

export default rootReducer;
