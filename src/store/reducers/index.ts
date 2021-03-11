import { combineReducers } from 'redux';
import todos from './todos';
import register from './register';

const rootReducer = combineReducers({
  todos,
  register,
});

export default rootReducer;
