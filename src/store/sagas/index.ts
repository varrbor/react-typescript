import { all } from 'redux-saga/effects';

import  todoSaga from './todo';
import  authSaga from './auth';

const allSagas = [
  todoSaga,
  authSaga
];

export default function* appSagas() {
  yield all(allSagas.map(f => f()));
}
