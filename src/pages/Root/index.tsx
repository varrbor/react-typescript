import React from 'react';
import Todo from '../../containers/Todo';
import Header from '../../containers/Header';
import Preloader from '../../components/Preloader';

const Root = (): React.ReactElement => {

  return (
    <>
      <Header />
      <Todo />
    </>

  )
};

export default Root;
