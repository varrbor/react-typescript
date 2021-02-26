import createReducer from '../../utils/redux-create-reducer';
import {
  UPDATE_INPUT,
  INPUT_CLEAR,
  SET_KEYBOARD_STATE,
} from '../actions/input';

export interface IInput {
  message: string;
  isKeyboardVisible: string;
}

interface IState {
  input: IInput;
}

export const initialState: IInput = { message: '', isKeyboardVisible: 'test' };

export const getInput = (state: IState): IInput => initialState;

export default createReducer(initialState, {
  [UPDATE_INPUT]: message => ({ message }),
  [INPUT_CLEAR]: () => initialState,
  [SET_KEYBOARD_STATE]: isKeyboardVisible => ({
    isKeyboardVisible: isKeyboardVisible.payload,
  }),
});
