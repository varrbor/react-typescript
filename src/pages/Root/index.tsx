import React from 'react';
import Todo from '../../containers/Todo';
import Header from '../../containers/Header';
import Login from '../../containers/Login';
import Preloader from '../../components/Preloader';
import { shallowEqual, useSelector } from 'react-redux';
import { getLogin } from '../../store/reducers/login';
import { Link, Redirect } from "react-router-dom";


const Root = (): React.ReactElement => {
  const  {isAuthorized} = useSelector(getLogin, shallowEqual);
  if (!isAuthorized) {
    return <Redirect to="/login" />;
  }
  const Content = isAuthorized ? Todo : Login;
  console.log(Content);
  return (
    <>
      <Header />
      <Content />
    </>

  )
};

export default Root;
