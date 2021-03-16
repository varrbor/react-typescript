/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IState {
  [key: string]: any;
}

export interface IAction {
  type: string;
  payload: any;
}

export type Reducer = (payload: any, state: IState, type: string) => IState;

interface IHandlers {
  [key: string]: Reducer;
}

let __DEV__ = false;
try {
  __DEV__ = process.env.NODE_ENV !== 'production';
} catch (e) {}

const createReducer = (initialState: IState = {}, handlers: IHandlers) => {
  if (__DEV__ && handlers.undefined) {
    console.warn(
      'Reducer contains an "undefined" action type. Have you misspelled a constant?'
    );
  }

  return function reducer(state = initialState, action: IAction) {
    let newState = state;
    if (handlers.hasOwnProperty(action.type)) {
      const result = handlers[action.type](action.payload, state, action.type);
      newState = { ...state, ...result };
    }
    if (handlers['*']) {
      return {
        ...newState,
        ...handlers['*'](action.payload, newState, action.type),
      };
    }
    console.log('newState', newState);
    return newState;
  };
};

export default createReducer;
