import { UPDATE_INPUT_ACTION } from '../actions/auth';
import { INameInput, IEmailInput, IPasswordInput} from '../types';
import  { IAction } from '../../utils/redux-create-reducer';

export interface IRegisterForm {
  name: INameInput;
  email: IEmailInput;
  password: IPasswordInput;
  repeatPassword: IPasswordInput;
}

interface IState {
  registerForm: IRegisterForm;
  isLoading: boolean;
}

export const initialState: IState = {
    registerForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'First Name',
        },
        value: '',
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

