import { createAction, createEmptyAction } from '../../utils/actions';

export const ADD_NEW_TODO = 'APP/ADD_TODO';
export const DELETE_TODO = 'APP/DELETE_TODO';
export const FETCH_TODOS = 'APP/FETCH_TODOS';
export const SET_TODOS = 'APP/SET_TODOS';

export const types = {
  ADD_NEW_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  SET_TODOS,
};

export const addTodo = createAction(ADD_NEW_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const fetchTodos = createEmptyAction(FETCH_TODOS);
export const setTodos = createAction(SET_TODOS);
