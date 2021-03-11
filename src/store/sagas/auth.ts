import { put, call, takeEvery } from 'redux-saga/effects';
import { registerUser } from '../../utils/api';
import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  FETCH_USER,
  UPDATE_INPUT,
  updateInput,
  updateInputAction,
} from '../actions/auth';
import { IAction } from '../reducers/todos';

export function* updateInputSaga({ payload }: IAction) {
  try {
    yield put(updateInputAction( payload ));
      return;
  } catch (e) {
    console.error(e);
  }
}

export function* createUserSaga({ payload }: IAction) {
  try {
    yield call(registerUser,  payload );
    return;
  } catch (e) {
    console.error(e);
  }
}

export default function* authSaga() {
  yield takeEvery(UPDATE_INPUT, updateInputSaga);
  yield takeEvery(FETCH_USER, createUserSaga);
}
