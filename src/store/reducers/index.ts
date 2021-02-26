import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import todos from './todos';

export default (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    todos,
  });
