import { createAction } from '../../utils/actions';

export const ADD_NEW_TODO = 'APP/ADD_TODO';
export const DELETE_TODO = 'APP/DELETE_TODO';

export const types = {
  ADD_NEW_TODO,
  DELETE_TODO,
};

export const addTodo = createAction(ADD_NEW_TODO);
export const deleteTodo = createAction(DELETE_TODO);

