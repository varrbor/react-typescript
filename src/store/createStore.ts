import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';

// @ts-ignore
const composer = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

export default createStore(reducer, undefined, composer(applyMiddleware()));
