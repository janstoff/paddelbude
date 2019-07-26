import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './paddles.module.scss';
import SectionLayout from '../layout/Section';

const Paddles: React.FunctionComponent = () => (
  <SectionLayout id="paddles">
    <h1>
      <Translated id="paddles-headline" />
    </h1>
    <p className={styles.body}>
      <Translated id="paddles-subheadline" />
    </p>
  </SectionLayout>
);
export default Paddles;
