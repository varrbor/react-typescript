import {
  IS_AUTHORIZED, LOGOUT_USER,
  UPDATE_INPUT_ACTION,
  UPDATE_LOGIN_INPUT_ACTION,
  UPDATE_REGISTER_INPUT_ACTION,
} from '../actions/auth';
import { IEmailInput, IPasswordInput} from '../types'

export interface ILoginForm {
  email: IEmailInput;
  password: IPasswordInput;
}

interface IState {
  loginForm: ILoginForm;
  isLoading: boolean;
  isAuthorized: boolean;
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
  isAuthorized: false,
}

export const getLogin = (state: {login: IState}): IState => state.login;

export interface IAction {
  type: string;
  payload: any;
}

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

      case IS_AUTHORIZED:
      return ({
        ...state,
       isAuthorized: true,
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

