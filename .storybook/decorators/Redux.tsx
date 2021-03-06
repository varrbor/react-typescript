import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from '../../src/store';

export const prepareState = (actions = []) => () => actions.forEach(a => store.dispatch(a));

export const dispatch = store.dispatch.bind(store);

const StateComp = () => {
  const state = useSelector(s => s);
  return <pre>{JSON.stringify(state, null, '\t')}</pre>;
};

export const WithState = fn => {
  return (
    <div>
      {fn()}
      <StateComp />
    </div>
  );
};
export default (fn: () => any) => <Provider store={store}>{fn()}</Provider>;
