export interface INameInput {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation: INameValidation;
  valid: boolean;
  touched: boolean;
}

export interface IEmailInput {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation: IEmailValidation;
  valid: boolean;
  touched: boolean;
}

export interface IPasswordInput {
  elementType: string;
  elementConfig: {
    type: string;
    placeholder: string;
  };
  value: string;
  validation: IPasswordValidation;
  valid: boolean;
  touched: boolean;
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
