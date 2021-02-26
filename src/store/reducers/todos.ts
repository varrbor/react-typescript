import createReducer from '../../utils/redux-create-reducer';
import {

} from '../actions/todos';

export interface ITodos {
  id: string;
  text: string;
}

interface IState {
  input: ITodos;
}

export const initialState: ITodos = { id: Math.random().toString(), text: 'Start·the·course.' };

export const getTodos = (state: IState): ITodos => initialState;

export default createReducer(initialState, {

});
