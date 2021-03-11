/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getRegister } from '../../store/reducers/register';
import { IRegisterForm, INameInput, IEmailInput,IPasswordInput} from '../../store/reducers/register';
import { checkValidity } from '../../utils/utility';

import styles from './Register.module.scss';
import cx from 'classnames';
import { getTodos } from '../../store/reducers/todos';
import RegisterForm from '../../components/RegisterForm';
import { fetchUser, updateInput } from '../../store/actions/auth';

const Register: React.FC = () => {
  const  {registerForm, isLoading} = useSelector(getRegister, shallowEqual);
  const dispatch = useDispatch();

  console.log(111, registerForm);
  const formElementsArray = [];
  // @ts-ignore
  for (let key: any in registerForm) {
    formElementsArray.push({
      id: key,
      // @ts-ignore
      config: registerForm[key],
    });
  }

  const orderHandler = ( event:any ) => {
    event.preventDefault();
    const formData:any = {};
    for (let key in registerForm) {
      if(key!=='repeatPassword'){
        // @ts-ignore
        formData[key] = registerForm[key].value;
      }
    }
    dispatch(
      fetchUser(formData)
    );
  }

  const inputChangedHandler = (event:any, inputIdentifier: INameInput) => {
    const updatedOrderForm = {
      ...registerForm
    };

    const updatedFormElement = {
      // @ts-ignore
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    // @ts-ignore
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      // @ts-ignore
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    dispatch(
      updateInput({identifier: inputIdentifier, val: updatedFormElement, formIsValid: formIsValid})
    );
  }
  return (
    <RegisterForm items={formElementsArray} onChange={inputChangedHandler} orderHandler={orderHandler}/>
  );
};

export default Register;
