/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import LoginForm from '../../components/LoginForm/index'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../store/reducers/login';
import { loginUser, updateLoginInput } from '../../store/actions/auth';
import { INameInput } from '../../store/types';
import { checkValidity } from '../../utils/utility';

const Login: React.FC = () => {
  const  { loginForm } = useSelector(getLogin, shallowEqual);
  const dispatch = useDispatch();
  const formElementsArray = [];
  // @ts-ignore
  for (let key: any in loginForm) {
    formElementsArray.push({
      id: key,
      // @ts-ignore
      config: loginForm[key],
    });
  }

  const orderHandler = ( event:any ) => {
    event.preventDefault();
    const formData:any = {};
    for (let key in loginForm) {
      if(key!=='repeatPassword'){
        // @ts-ignore
        formData[key] = loginForm[key].value;
      }
    }
    console.log(222, formData);
    dispatch(
      loginUser(formData)
    );
  }

  const inputChangedHandler = (event:any, inputIdentifier: INameInput) => {
    const updatedOrderForm = {
      ...loginForm
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
      updateLoginInput({identifier: inputIdentifier, val: updatedFormElement, formIsValid: formIsValid})
    );
  }
  return (
    <LoginForm items={formElementsArray} onChange={inputChangedHandler} orderHandler={orderHandler} />
  );
};

export default Login;
