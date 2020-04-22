import React from 'react';

import styles from './downButton.module.scss';
import LocalizedLink from './LocalizedLink';
import {HOME_SECTIONS} from '../config';

const DownButton: React.SFC = () => {
  const firstSection = HOME_SECTIONS[0];

  return (
    <LocalizedLink className={styles.downButton} to={`/#${firstSection}`}>
      <div className={styles.chevron}></div>
      <div className={styles.chevron}></div>
      <div className={styles.chevron}></div>
    </LocalizedLink>
  );
};

export default DownButton;
