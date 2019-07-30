import React from 'react';

import AppLayout from '../layout/App';
import ModuleLayout from '../layout/Module';
import Contact from '../modules/Contact';

export default ({pathContext}): JSX.Element => {
  const {locale, pagePath} = pathContext;

  console.log('pathContext', pathContext);

  return (
    <AppLayout locale={locale} path={pagePath}>
      <ModuleLayout id="contact">
        <Contact />
      </ModuleLayout>
    </AppLayout>
  );
};
