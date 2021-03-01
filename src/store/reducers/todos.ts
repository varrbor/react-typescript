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

export const initialState: ITodos[] = [{ id: Math.random().toString(), text: 'Start·the·course.' }];

export const getTodos = (state: IState): ITodos[] => state.todos;

export interface IAction {
  type: string;
  payload: any;
}

const todos = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [
        ...state,
         action.payload,

      ];
    default:
      return state;
  }
};
export default todos;

// export default createReducer(initialState, {
//   [ADD_NEW_TODO]: (todo: ITodos) => {
//     console.log(89898889, todo)
//     return [ todo, ...state.todos ];
//   }
// });
