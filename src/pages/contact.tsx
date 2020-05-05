import React from 'react';

import AppLayout from '../layout/App';
import PageLayout from '../layout/PageLayout';
import {PageProps} from '.';
import Contact from '../modules/Contact';

export default ({pathContext}: PageProps): JSX.Element => {
  const {locale, pagePath} = pathContext;

  return (
    <AppLayout locale={locale} path={pagePath}>
      <PageLayout id="paddles">
        <Contact />
      </PageLayout>
    </AppLayout>
  );
};
