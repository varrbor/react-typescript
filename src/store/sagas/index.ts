import { all } from 'redux-saga/effects';

import  todoSaga from './todo';
import  { authSaga, authT } from './auth';

const allSagas = [
  authT,
  authSaga,
  todoSaga,
];

export default function* appSagas() {
  yield all(allSagas.map(f => f()));
}
