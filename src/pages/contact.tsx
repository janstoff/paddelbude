import React from 'react';

import AppLayout from '../layout/App';
import ModuleLayout from '../layout/ModuleLayout';
import {PageProps} from '.';
import Contact from '../modules/Contact';

export default ({pathContext}: PageProps): JSX.Element => {
  const {locale, pagePath} = pathContext;

  return (
    <AppLayout locale={locale} path={pagePath}>
      <ModuleLayout id="paddles">
        <Contact />
      </ModuleLayout>
    </AppLayout>
  );
};
