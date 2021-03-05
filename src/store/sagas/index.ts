import { all } from 'redux-saga/effects';

import  todoSaga from './todo';

const allSagas = [
  todoSaga,
];

export default function* appSagas() {
  yield all(allSagas.map(f => f()));
}
