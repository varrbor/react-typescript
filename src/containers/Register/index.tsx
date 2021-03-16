/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { clearConfigCache } from 'prettier';
import { getRegister } from '../../store/reducers/register';
import { INameInput } from '../../store/types';
import { checkValidity } from '../../utils/utility';

import RegisterForm from '../../components/RegisterForm';
import { fetchUser, updateRegisterInput } from '../../store/actions/auth';

const Register: React.FC = () => {
  const { registerForm, isLoading } = useSelector(getRegister, shallowEqual);
  const dispatch = useDispatch();

  const formElementsArray = [];
  // @ts-ignore
  for (const key: any in registerForm) {
    formElementsArray.push({
      id: key,
      // @ts-ignore
      config: registerForm[key],
    });
  }

  console.log(11111, registerForm);

  const orderHandler = (event: any) => {
    event.preventDefault();
    const formData: any = {};
    for (const key in registerForm) {
      if (key !== 'repeatPassword') {
        // @ts-ignore
        formData[key] = registerForm[key].value;
      }
    }

    console.log(22222, formData);
    dispatch(fetchUser(formData));
  };

  const inputChangedHandler = (event: any, inputIdentifier: INameInput) => {
    const updatedOrderForm = {
      ...registerForm,
    };

    const updatedFormElement = {
      // @ts-ignore
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    // @ts-ignore
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (const inputIdentifier in updatedOrderForm) {
      // @ts-ignore
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    dispatch(
      updateRegisterInput({
        identifier: inputIdentifier,
        val: updatedFormElement,
        formIsValid,
      })
    );
  };
  return (
    <RegisterForm
      items={formElementsArray}
      onChange={inputChangedHandler}
      orderHandler={orderHandler}
    />
  );
};

export default Register;
