import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './things-to-do.module.scss';
import SectionLayout from '../layout/Section';

const ThingsToDo: React.FunctionComponent = () => (
  <SectionLayout id="things-to-do">
    <h1>
      <Translated id="things-to-do-headline" />
    </h1>
    <p className={styles.body}>
      <Translated id="things-to-do-subheadline" />
    </p>
  </SectionLayout>
);

export default ThingsToDo;
