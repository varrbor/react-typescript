import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { SagaMiddlewareOptions } from 'redux-saga';

import reducer from './reducers/index';
// import createSagaMonitor from '@clarketm/saga-monitor';
import appSagas from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaConfig: SagaMiddlewareOptions = {};
const sagaMiddleware = createSagaMiddleware(sagaConfig);
const middlewares = [sagaMiddleware];

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  undefined,
  composer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(appSagas);

export default store;

// export default createStore(  reducer,
//   undefined,
//   composer(applyMiddleware(
//     ...middlewares
//   )));
