/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import HeaderTab from '../../components/Header/index'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../store/reducers/login';
import { loginUser, updateLoginInput } from '../../store/actions/auth';
import { INameInput } from '../../store/types';
import { checkValidity } from '../../utils/utility';

const Header: React.FC = () => {

  return (
    <HeaderTab />
  );
};

export default Header;
