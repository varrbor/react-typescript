import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, undefined, composer(applyMiddleware()));
