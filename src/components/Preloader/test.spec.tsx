import React from 'react';
import Preloader from './index';
import { shallow } from 'enzyme';

it('component Preloader renders', () => {
  shallow(<Preloader />);
});
