import React from 'react';

import AppLayout from '../layout/App';
import ModuleLayout from '../layout/ModuleLayout';
import {PageProps} from '.';

import {FormattedMessage as Translated} from 'react-intl';
import LocalizedLink from '../components/LocalizedLink';

export default ({pathContext}: PageProps): JSX.Element => {
  const {locale, pagePath} = pathContext;

  return (
    <AppLayout locale={locale} path={pagePath}>
      <ModuleLayout id="paddles">
        <h1>
          <Translated id="paddles-headline" />
        </h1>
        <p>
          <Translated id="paddles-introduction" />
        </p>
        <p>
          <LocalizedLink
            to={`/paddles/definitive-guide`}
            style={{color: '#ff4b33'}}
          >
            <Translated id="paddles-link-to-definitive-guide" />
          </LocalizedLink>
        </p>
        <h2>
          <Translated id="paddles-length-calculator-headline" />
        </h2>
        <p>
          <Translated id="paddles-length-calculator-subheadline" />
        </p>
        <h2>
          <Translated id="paddles-i-wish-i-owned-headline" />
        </h2>
      </ModuleLayout>
    </AppLayout>
  );
};
