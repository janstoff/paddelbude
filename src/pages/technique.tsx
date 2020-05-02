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
      <ModuleLayout id="technique">
        <h1>
          <Translated id="technique-headline" />
        </h1>
        <p>
          <Translated id="technique-introduction" />
        </p>
        <p>
          <Translated id="technique-jump-to-paddling" />
          <LocalizedLink
            to={`/technique/paddling`}
            style={{color: '#ff7260', fontWeight: 600}}
          >
            <Translated id="technique-link-to-paddling" />
          </LocalizedLink>
          <Translated id="technique-jump-to-stance" />
          <LocalizedLink
            to={`/technique/stance`}
            style={{color: '#ff7260', fontWeight: 600}}
          >
            <Translated id="technique-link-to-stance" />
          </LocalizedLink>
          <Translated id="technique-jump-to-stance-after" />
        </p>
      </ModuleLayout>
    </AppLayout>
  );
};
