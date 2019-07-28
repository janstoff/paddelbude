import React from 'react';

import AppLayout from '../layout/App';
import SectionLayout from '../layout/Section';
import Contact from '../sections/Contact';

export default ({pathContext: {locale}}): JSX.Element => (
  <AppLayout locale={locale}>
    <SectionLayout id="contact">
      <Contact />
    </SectionLayout>
  </AppLayout>
);
