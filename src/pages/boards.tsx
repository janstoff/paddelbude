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
        id="boards"
        enableHomeBreadCrumb
        navigationOrigin={location?.state?.navigationOrigin}
      >
        <h1>
          <Translated id="boards-headline" />
        </h1>
        <p>
          <Translated id="boards-introduction" />
        </p>
        <p>
          <Translated id="boards-jump-to-definitive-guide" />
          <LocalizedLink
            to={`/boards/definitive-guide`}
            style={{color: '#ff7260', fontWeight: 600}}
          >
            <Translated id="boards-link-to-definitive-guide" />
          </LocalizedLink>
          <Translated id="boards-jump-to-choosing-the-right-one" />
          <LocalizedLink
            to={`/boards/choosing-the-right-one`}
            style={{color: '#ff7260', fontWeight: 600}}
          >
            <Translated id="boards-link-to-choosing-the-right-one" />
          </LocalizedLink>
          <Translated id="boards-jump-to-choosing-the-right-one-after" />
        </p>
      </PageLayout>
    </AppLayout>
  );
};
