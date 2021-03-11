import { UPDATE_INPUT_ACTION } from '../actions/auth';

export interface IRegisterForm {
  name: INameInput;
  email: IEmailInput;
  password: IPasswordInput;
  repeatPassword: IPasswordInput;
}
export interface INameInput {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation :INameValidation;
  valid: boolean;
  touched: boolean
}

export interface IEmailInput {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation :IEmailValidation;
  valid: boolean;
  touched: boolean
}

export interface IPasswordInput {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation :IPasswordValidation;
  valid: boolean;
  touched: boolean
}

interface IState {
  registerForm: IRegisterForm;
  isLoading: boolean;
}

interface INameValidation {
  required: boolean;
}

interface IEmailValidation {
  required: boolean;
  isEmail: boolean;
}

interface IPasswordValidation {
  required: boolean;
}

export const initialState: IState = {
    registerForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'First Name',
        },
        value: 'bohdan',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
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
        value: '123456',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      repeatPassword: {
        elementType: 'password',
        elementConfig: {
          type: 'text',
          placeholder: 'Repeat Password',
        },
        value: '123456',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
  },
  isLoading: false,
}

export const getRegister = (state: {register: IState}): IState => state.register;

export interface IAction {
  type: string;
  payload: any;
}

const register = (state = initialState, action: IAction) => {
  switch (action.type) {
    case UPDATE_INPUT_ACTION:
      return ({
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.identifier]: action.payload.val
        },
      });
    default:
      return state;
  }
};
export default register;

