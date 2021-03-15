import React from 'react';
import Todo from '../../containers/Todo';
import Header from '../../containers/Header';
import Login from '../../containers/Login';
import Preloader from '../../components/Preloader';
import { shallowEqual, useSelector } from 'react-redux';
import { getApp } from '../../store/reducers/app';
import { Link, Redirect } from "react-router-dom";

const Root = (): React.ReactElement => {
  const  { authorized, isLoading } = useSelector(getApp, shallowEqual);
  if (!authorized) {
    return <Redirect to="/login" />;
  }
  const Content = authorized ? Todo : Login;
  console.log(88888,isLoading);
  return (
    <>
      <Header />
      <Content />
    </>
  )
};

export default Root;
