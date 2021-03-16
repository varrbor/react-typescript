import { put, call, takeEvery } from 'redux-saga/effects';
import { getTodos, addTodoCall, deleteTodoCall } from '../../utils/api';
import {
  FETCH_TODOS,
  setTodos,
  addTodo,
  deleteTodo,
  ADD_NEW_TODO_REQUEST,
  DELETE_TODO_REQUEST,
} from '../actions/todos';
import { IAction } from '../../utils/redux-create-reducer';
import { setLoading } from '../actions/app';

export function* fetchTodosSaga() {
  try {
    // yield put(setLoading(true));
    const { data } = yield call(getTodos);
    if (data) {
      const fetchedTodos = [];
      for (const key in data) {
        fetchedTodos.push({
          ...data[key],
          id: key,
        });
      }
      console.log(111, data.todos);
      yield put(setTodos(data.todos));
      // yield put(setLoading(false));
      return;
    }
  } catch (e) {
    console.error(e);
  }
}

export function* addNewTodoSaga({ payload }: IAction) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(addTodoCall, payload);
    yield put(addTodo({ id: data.name, text: payload.text }));
    yield put(setLoading(false));
    return;
  } catch (e) {
    console.error(e);
  }
}

export function* deleteTodoSaga(payload: any) {
  try {
    yield put(setLoading(true));
    console.log(3333, payload.payload.id);
    yield call(deleteTodoCall, payload.payload.id);
    yield put(deleteTodo(payload.payload.text));
    yield put(setLoading(false));
    return;
  } catch (e) {
    console.error(e);
  }
}

export default function* todosSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(ADD_NEW_TODO_REQUEST, addNewTodoSaga);
  yield takeEvery(DELETE_TODO_REQUEST, deleteTodoSaga);
}
