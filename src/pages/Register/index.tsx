import React from 'react';
import Register from '../../containers/Register';
import Preloader from '../../components/Preloader';
import Header from '../../containers/Header';

const Root = (): React.ReactElement => {

  return (
    <>
      <Header />
      <Register />
    </>

  )
};

export default Root;
