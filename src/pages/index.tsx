import React from 'react';

import AppLayout from '../layout/App';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Instagram from '../sections/Instagram';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]', {
    speed: 30,
    speedAsDuration: true
  });
}

export default ({pathContext: {locale}}): JSX.Element => (
  <AppLayout locale={locale} pageStyle="home">
    <Landing />
    <About />
    <Instagram />
  </AppLayout>
);
