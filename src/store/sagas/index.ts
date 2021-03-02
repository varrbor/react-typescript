import { all } from 'redux-saga/effects';

import input from './input';


const allSagas = [
  input,
];

export default function* appSagas() {
  yield all(allSagas.map(f => f()));
}
