import { createAction, createEmptyAction } from '../../utils/actions';

export const FETCH_USER_START = 'REGISTER/FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'REGISTER/FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'REGISTER/FETCH_USER_FAIL';
export const FETCH_USER = 'REGISTER/FETCH_USER';
export const UPDATE_INPUT = 'REGISTER/UPDATE_INPUT';
export const UPDATE_INPUT_ACTION = 'REGISTER/UPDATE_INPUT_ACTION';

export const types = {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  FETCH_USER,
  UPDATE_INPUT,
  UPDATE_INPUT_ACTION
};

export const fetchUserStart = createAction(FETCH_USER_START);
export const fetchUserSuccess = createAction(FETCH_USER_SUCCESS);
export const fetchUserFail = createEmptyAction(FETCH_USER_FAIL);
export const fetchUser = createAction(FETCH_USER);
export const updateInput = createAction(UPDATE_INPUT);
export const updateInputAction = createAction(UPDATE_INPUT_ACTION);

