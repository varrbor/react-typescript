import { ADD_NEW_TODO, DELETE_TODO } from '../actions/todos';

export interface ITodos {
  id: string;
  text: string;
}

interface IState {
  todos: ITodos[];
}

export const initialState: ITodos[] = [
  { id: Math.random().toString(), text: 'Start·the·course.' },
];

export const getTodos = (state: IState): ITodos[] => state.todos;

export interface IAction {
  type: string;
  payload: any;
}

const todos = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [...action.payload];
    default:
      return state;
  }
};
export default todos;
