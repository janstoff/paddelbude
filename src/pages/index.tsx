import React from 'react';

import AppLayout from '../layout/App';
import Landing from '../modules/Landing';
import MotivationTeaser from '../modules/MotivationTeaser';
import Instagram from '../modules/Instagram';
import {BackToTopLink} from '../components/BackToTopLink';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]', {
    speed: 200,
    speedAsDuration: true,
    easing: 'easeOutCubic',
  });
}

interface PathContext {
  readonly locale: 'de' | 'en';
  readonly pagePath: string;
}

export interface PageProps {
  readonly pathContext: PathContext;
}

export default ({pathContext}: PageProps): JSX.Element => {
  const {locale, pagePath} = pathContext;

  return (
    <AppLayout locale={locale} pageStyle="home" path={pagePath}>
      <Landing />
      <MotivationTeaser />
      <Instagram />
      <BackToTopLink />
    </AppLayout>
  );
};
