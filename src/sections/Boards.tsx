import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './boards.module.scss';
import SectionLayout from '../layout/Section';

const Boards: React.FunctionComponent = () => (
  <SectionLayout id="boards">
    <h1>
      <Translated id="boards-headline" />
    </h1>
    <p className={styles.body}>
      <Translated id="boards-subheadline" />
    </p>
  </SectionLayout>
);

export default Boards;
