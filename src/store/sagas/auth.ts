import { put, call, takeEvery } from 'redux-saga/effects';
import { registerUser, loginUser } from '../../utils/api';
import {
  FETCH_USER,
  UPDATE_REGISTER_INPUT,
  UPDATE_LOGIN_INPUT,
  updateRegisterInputAction,
  updateLoginInputAction,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/auth';

import {
  authorize,
  setLoading
} from '../actions/app';

import  { IAction } from '../../utils/redux-create-reducer';
import { getAuthData } from '../../utils/cookies';


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
    console.log(777777,payload);
    yield put(setLoading(true));
    yield call(registerUser,  payload );
    yield put(setLoading(false));

    return;
  } catch (e) {
    console.error(e);
  }
}

export function* loginUserSaga({ payload }: IAction) {
  try {
    yield put(setLoading(true));
    const {data} = yield call(loginUser, payload);
    console.log(123456, data.data.token);
    const maxAge = 3600 * 24 * 30;
    if(data.data.token) {
      yield put(authorize(true));
      document.cookie = `jwtToken=${data.data.token}; max-age=${maxAge}`;
      document.cookie = `userId=${data.data.userId}; max-age=${maxAge}`;
    }
    yield put(setLoading(false));
    return;
  } catch (e) {
    console.error(e);
  }
}
export function* logoutUserSaga({ payload }: IAction) {
  try {
    yield put(setLoading(true));

    document.cookie = `jwtToken=''; max-age=-1`;
    document.cookie = `userId=''; max-age=-1`;
    yield put(authorize(false));
    yield put(setLoading(false));
    return;
  } catch (e) {
    console.error(e);
  }
}

export function* authT() {
  try {
    // yield put(setLoading(true));
    if (getAuthData().token) {
      yield put(authorize(true))
    }
    // yield put(setLoading(false));
    return;
  } catch (err) {
    console.log(err);
  }
}

export function* authSaga() {
  yield takeEvery(UPDATE_REGISTER_INPUT, updateRegisterInputSaga);
  yield takeEvery(UPDATE_LOGIN_INPUT, updateLoginInputSaga);
  yield takeEvery(FETCH_USER, createUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
}
