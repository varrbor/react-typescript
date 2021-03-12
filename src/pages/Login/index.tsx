import React from 'react';
import Login from '../../containers/Login';
import Preloader from '../../components/Preloader';
import Header from '../../containers/Header';

const Root = (): React.ReactElement => {

  return (
    <>
      <Header />
      <Login />
    </>
  )
};

export default Root;
