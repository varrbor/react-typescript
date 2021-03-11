import { createAction, createEmptyAction } from '../../utils/actions';

export const FETCH_USER_START = 'REGISTER/FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'REGISTER/FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'REGISTER/FETCH_USER_FAIL';
export const FETCH_USER = 'REGISTER/FETCH_USER';
export const UPDATE_REGISTER_INPUT = 'REGISTER/UPDATE_REGISTER_INPUT';
export const UPDATE_REGISTER_INPUT_ACTION = 'REGISTER/UPDATE_REGISTER_INPUT_ACTION';
export const UPDATE_LOGIN_INPUT_ACTION = 'REGISTER/UPDATE_LOGIN_INPUT_ACTION';
export const UPDATE_LOGIN_INPUT = 'REGISTER/UPDATE_LOGIN_INPUT';
export const UPDATE_INPUT_ACTION = 'REGISTER/UPDATE_INPUT_ACTION';
export const LOGIN_USER = 'LOGIN/LOGIN_USER';

export const types = {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  FETCH_USER,
  UPDATE_REGISTER_INPUT,
  UPDATE_LOGIN_INPUT,
  UPDATE_REGISTER_INPUT_ACTION,
  UPDATE_LOGIN_INPUT_ACTION,
  LOGIN_USER
};

export const fetchUserStart = createAction(FETCH_USER_START);
export const fetchUserSuccess = createAction(FETCH_USER_SUCCESS);
export const fetchUserFail = createEmptyAction(FETCH_USER_FAIL);
export const fetchUser = createAction(FETCH_USER);
export const updateRegisterInput = createAction(UPDATE_REGISTER_INPUT);
export const updateLoginInput = createAction(UPDATE_LOGIN_INPUT);
export const updateRegisterInputAction = createAction(UPDATE_REGISTER_INPUT_ACTION);
export const updateLoginInputAction = createAction(UPDATE_LOGIN_INPUT_ACTION);
export const loginUser = createAction(LOGIN_USER);

