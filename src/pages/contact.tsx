import React from 'react';

import AppLayout from '../layout/App';
import ModuleLayout from '../layout/Module';
import Contact from '../modules/Contact';

export default ({pathContext: {locale}}): JSX.Element => (
  <AppLayout locale={locale}>
    <ModuleLayout id="contact">
      <Contact />
    </ModuleLayout>
  </AppLayout>
);
