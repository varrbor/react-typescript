import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default (fn: () => any) => (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME || '/'}>{fn()}</BrowserRouter>
);
