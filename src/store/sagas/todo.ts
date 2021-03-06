import { put, call, takeEvery } from 'redux-saga/effects';
import { getIncident, addTodoCall, deleteTodoCall } from '../../utils/api';
import {
  FETCH_TODOS,
  setTodos,
  addTodo,
  deleteTodo,
  ADD_NEW_TODO_REQUEST,
  DELETE_TODO_REQUEST,
} from '../actions/todos';
import { IAction } from '../reducers/todos';

export function* fetchTodosSaga() {
    try {
      const { data } = yield call(getIncident);
      if(data ) {
        const fetchedTodos = [];
        for (let key in data) {
          fetchedTodos.push({
            ...data[key],
            id: key
          });
        }
        yield put(setTodos(fetchedTodos));
        return;
      }
    } catch (e) {
      console.error(e);
    }
}

export function* addNewTodoSaga({ payload }: IAction) {
  try {
    const { data } = yield call(addTodoCall, payload );
    yield put(addTodo({ id:data.name, text: payload.text }));
    return;
  } catch (e) {
    console.error(e);
  }
}

export function* deleteTodoSaga( payload: any) {
  try {
    yield call(deleteTodoCall,  payload.payload.id );
    yield put(deleteTodo( payload.payload.text ));
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
