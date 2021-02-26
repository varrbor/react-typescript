import createReducer from '../../utils/redux-create-reducer';
import {
  ADD_NEW_TODO
} from '../actions/todos';

export interface ITodos {
  id: string;
  text: string;
}

interface IState {
  todos: ITodos[];
}

export const initialState: ITodos[] = [{ id: Math.random().toString(), text: 'Start·the·course.' }, { id: Math.random().toString(), text: 'Start·the·course.' }];

export const getTodos = (state: IState): ITodos[] => initialState;

export default createReducer(initialState, {
  [ADD_NEW_TODO]: (todo: ITodos) => {
    return ({ todo });
  }
});
