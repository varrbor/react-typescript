import {
  LOGOUT_USER,
  UPDATE_INPUT_ACTION,
  UPDATE_LOGIN_INPUT_ACTION,
  UPDATE_REGISTER_INPUT_ACTION,
} from '../actions/auth';
import { IEmailInput, IPasswordInput} from '../types';
import  { IAction } from '../../utils/redux-create-reducer';


export interface ILoginForm {
  email: IEmailInput;
  password: IPasswordInput;
}

interface IState {
  loginForm: ILoginForm;
  isLoading: boolean;
}

export const initialState: IState = {
  loginForm: {
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email address'
      },
      value: 'test@test.com',
      validation: {
        required: true,
        isEmail: true
      },
      valid: false,
      touched: false
    },
    password: {
      elementType: 'password',
      elementConfig: {
        type: 'text',
        placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
  },
  isLoading: false,
}

export const getLogin = (state: {login: IState}): IState => state.login;

const login = (state = initialState, action: IAction) => {
  switch (action.type) {
    case UPDATE_LOGIN_INPUT_ACTION:
      return ({
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.identifier]: action.payload.val
        },
      });
      case LOGOUT_USER:
      return ({
        ...state,
       isAuthorized: false,
      });
    default:
      return state;
  }
};
export default login;

