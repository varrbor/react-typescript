import { put, call, takeEvery } from 'redux-saga/effects';
import { registerUser, loginUser } from '../../utils/api';
import {
  FETCH_USER,
  UPDATE_REGISTER_INPUT,
  UPDATE_LOGIN_INPUT,
  updateRegisterInputAction,
  updateLoginInputAction, LOGIN_USER,
} from '../actions/auth';
import { IAction } from '../reducers/todos';

export function* updateRegisterInputSaga({ payload }: IAction) {
  try {
    yield put(updateRegisterInputAction( payload ));
      return;
  } catch (e) {
    console.error(e);
  }
}

export function* updateLoginInputSaga({ payload }: IAction) {
  try {
    yield put(updateLoginInputAction( payload ));
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

export function* loginUserSaga({ payload }: IAction) {
  try {
    yield call(loginUser,  payload );
    return;
  } catch (e) {
    console.error(e);
  }
}

export default function* authSaga() {
  yield takeEvery(UPDATE_REGISTER_INPUT, updateRegisterInputSaga);
  yield takeEvery(UPDATE_LOGIN_INPUT, updateLoginInputSaga);
  yield takeEvery(FETCH_USER, createUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
}
