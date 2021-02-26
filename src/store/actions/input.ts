import { createAction, createEmptyAction } from '../../utils/actions';

export interface IInput {
  message: string;
}

export const UPDATE_INPUT = 'INPUT/UPDATE';
export const INPUT_CHANGE = 'INPUT/CHANGE';
export const INPUT_SUBMIT = 'INPUT/SUBMIT';
export const INPUT_CLEAR = 'INPUT/CLEAR';
export const SET_KEYBOARD_STATE = 'INPUT/SET_KEYBOARD_STATE';

export const types = {
  UPDATE_INPUT,
  INPUT_CHANGE,
  INPUT_SUBMIT,
  INPUT_CLEAR,
  SET_KEYBOARD_STATE,
};

export const updateInput = createAction(UPDATE_INPUT);
export const inputChange = createAction(INPUT_CHANGE);
export const inputSubmit = createAction(INPUT_SUBMIT);
export const inputClear = createEmptyAction(INPUT_CLEAR);
export const setKeyboardState = createAction(SET_KEYBOARD_STATE);

export default {
  updateInput,
  inputChange,
  inputSubmit,
  inputClear,
  setKeyboardState,
};
