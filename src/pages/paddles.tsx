import React from 'react';

import AppLayout from '../layout/App';
import PageLayout from '../layout/PageLayout';
import {PageProps} from '.';

import {FormattedMessage as Translated} from 'react-intl';
import LocalizedLink from '../components/LocalizedLink';

export default ({pathContext, location}: PageProps): JSX.Element => {
  const {locale, pagePath} = pathContext;

  return (
    <AppLayout locale={locale} path={pagePath}>
      <PageLayout
        id="paddles"
        enableHomeBreadCrumb
        navigationOrigin={location?.state?.navigationOrigin}
      >
        <h1>
          <Translated id="paddles-headline" />
        </h1>
        <p>
          <Translated id="paddles-introduction" />
        </p>
        <p>
          <Translated id="paddles-jump-to-definitive-guide" />
          <LocalizedLink
            to={`/paddles/definitive-guide`}
            style={{color: '#ff7260', fontWeight: 600}}
          >
            <Translated id="paddles-link-to-definitive-guide" />
          </LocalizedLink>
          <Translated id="paddles-jump-to-choosing-the-right-one" />
          <LocalizedLink
            to={`/paddles/choosing-the-right-one`}
            style={{color: '#ff7260', fontWeight: 600}}
          >
            <Translated id="paddles-link-to-choosing-the-right-one" />
          </LocalizedLink>
          <Translated id="paddles-jump-to-choosing-the-right-one-after" />
        </p>

        <h2>
          <a id="calculator">
            <Translated id="paddles-length-calculator-headline" />
          </a>
        </h2>
        <p>
          <Translated id="paddles-length-calculator-subheadline" />
        </p>
        <h2>
          <Translated id="paddles-blades-headline" />
        </h2>
        <p>
          <Translated id="paddles-blades-subheadline" />
        </p>
        <h2>
          <Translated id="paddles-i-wish-i-owned-headline" />
        </h2>
      </PageLayout>
    </AppLayout>
  );
};
