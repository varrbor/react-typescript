import { ADD_NEW_TODO, DELETE_TODO, SET_TODOS } from '../actions/todos';

export interface ITodos {
  _id: string;
  text: string;
}

interface IState {
  todos: ITodos[];
  isLoading: boolean;
}

export const initialState: IState = {
  todos: [],
  isLoading: false,
};

export const getTodos = (state: {todos: IState}): IState => state.todos;

export interface IAction {
  type: string;
  payload: any;
}

const todos = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return ({
        ...state,
        todos: [...state.todos, action.payload],
      });
    case DELETE_TODO:
      return ({
        ...state,
        todos: [...action.payload],
      });

    case SET_TODOS:
      return ({
        ...state,
        todos: [...action.payload],
      });
    default:
      return state;
  }
};
export default todos;

