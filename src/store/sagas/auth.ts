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
  isAuthorized,
} from '../actions/auth';
import { IAction } from '../reducers/todos';
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
    yield call(registerUser,  payload );
    return;
  } catch (e) {
    console.error(e);
  }
}

export function* loginUserSaga({ payload }: IAction) {
  try {
    const {data} = yield call(loginUser, payload);
    console.log(123456, data.data.token);
    const maxAge = 3600 * 24 * 30;
    if(data.data.token) {
      yield put(isAuthorized())
    }
    document.cookie = `jwtToken=${data.data.token}; max-age=${maxAge}`;
    document.cookie = `userId=${data.data.userId}; max-age=${maxAge}`;
    return;
  } catch (e) {
    console.error(e);
  }
}
export function* logoutUserSaga({ payload }: IAction) {
  try {
    document.cookie = `jwtToken=''; max-age=-1`;
    document.cookie = `userId=''; max-age=-1`;
    return;
  } catch (e) {
    console.error(e);
  }
}

export function* authT() {
  try {
    console.log('varrbor', getAuthData().token);
    if (getAuthData().token) {
      yield put(isAuthorized())
    }
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
