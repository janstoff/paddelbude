import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './about.module.scss';
import SectionLayout from '../layout/Section';

const About: React.FunctionComponent = () => (
  <SectionLayout id="about">
    <h1>
      <Translated id="about-headline" />
    </h1>
    <p className={styles.body}>
      <Translated id="about-subheadline" />
    </p>
  </SectionLayout>
);

export default About;
