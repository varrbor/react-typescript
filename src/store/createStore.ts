import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { SagaMiddlewareOptions } from 'redux-saga';

import reducer from './reducers/index';
// import createSagaMonitor from '@clarketm/saga-monitor';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaConfig: SagaMiddlewareOptions = {};
const sagaMiddleware = createSagaMiddleware(sagaConfig);
const middlewares = [sagaMiddleware];

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(  reducer,
  undefined,
  composer(applyMiddleware(
    ...middlewares
  )));
