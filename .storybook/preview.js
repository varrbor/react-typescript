import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { addParameters } from '@storybook/react';
import { withI18n } from 'storybook-addon-i18n';
import { jsxDecorator } from 'storybook-addon-jsx';
import Router from './decorators/Router';
import i18n from '../src/i18n/config';
import Translation from './decorators/Translation';
import Redux from './decorators/Redux';
import '../src/App.scss';

addParameters({
  i18n: {
    provider: Translation,
    providerProps: {
      i18n,
    },
    supportedLocales: ['en', 'es'],
    providerLocaleKey: 'locale',
  },
});

addDecorator(jsxDecorator);
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withI18n);
addDecorator(Router);
addDecorator(Redux);
