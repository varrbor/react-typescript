import React from 'react';
import Login from '../../containers/Login';
import Preloader from '../../components/Preloader';
import Header from '../../containers/Header';
import { Link, Redirect } from "react-router-dom";
import { shallowEqual, useSelector } from 'react-redux';
import { getApp } from '../../store/reducers/app';

const Root = (): React.ReactElement => {
  const  { authorized, isLoading } = useSelector(getApp, shallowEqual);
  if (authorized) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header />
      {!isLoading ? <Login /> : <Preloader/>}
    </>
  )
};

export default Root;
