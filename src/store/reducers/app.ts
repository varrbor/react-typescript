import createReducer from '../../utils/redux-create-reducer';
import {
  AUTHORIZE,
  SET_LOADING,
} from '../actions/app';
import  { IAction } from '../../utils/redux-create-reducer';

export interface IAuthState {
  authorized: boolean;
  isLoading: boolean;
}

export const initialState: IAuthState = {
  authorized: false,
  isLoading: false,
};

export const getApp = (state: { app: IAuthState }): IAuthState => state.app;

const app = (state = initialState, action: IAction) => {
  switch (action.type) {
    case AUTHORIZE:
      return ({
        ...state,
        authorized: action.payload,
      });

    case SET_LOADING:
    return ({
      ...state,
      isLoading: action.payload,
    });

    default:
      return state;
  }
};

export default app;
