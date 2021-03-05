import { put, select, call, takeEvery, takeLatest, take } from 'redux-saga/effects';
import  { getIncident, addTodoCall, deleteTodoCall }  from '../../utils/api';
import { ADD_NEW_TODO, FETCH_TODOS, DELETE_TODO, setTodos, addTodo, deleteTodo } from '../actions/todos';
import { IAction } from '../reducers/todos';

export function* fetchTodosSaga() {
  console.log('ahtung');
    try {
      const { data } = yield call(getIncident);
      console.log('data', data);
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
    console.log('addNewTodoSaga',payload);
    const ddd = call(addTodoCall, payload );
    // yield put(setTodos(addTodo(payload)));
    return;
  } catch (e) {
    console.error(e);
  }
}
interface Iid {
  id: string;
}
export function* deleteTodoSaga( id : any) {
  console.log(6666, id);
  try {
    yield call(deleteTodoCall,  id.payload );
    return;
  } catch (e) {
    console.error(e);
  }
}

export default function* todosSaga() {
   yield takeEvery(FETCH_TODOS, fetchTodosSaga);
   yield takeEvery(ADD_NEW_TODO, addNewTodoSaga);
   yield takeEvery(DELETE_TODO, deleteTodoSaga);
}
