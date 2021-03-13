import React from 'react';
import Login from '../../containers/Login';
import Preloader from '../../components/Preloader';
import Header from '../../containers/Header';
import { Link, Redirect } from "react-router-dom";
import { shallowEqual, useSelector } from 'react-redux';
import { getLogin } from '../../store/reducers/login';


const Root = (): React.ReactElement => {
  const  {isAuthorized} = useSelector(getLogin, shallowEqual);
  if (isAuthorized) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header />
      <Login />
    </>
  )
};

export default Root;
