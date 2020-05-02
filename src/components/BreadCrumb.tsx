import React from 'react';
import LocalizedLink from './LocalizedLink';
import styles from './breadCrumb.module.scss';

interface BreadCrumbProps {
  readonly label: string;
  readonly linkTo: string;
}

export const BreadCrumb: React.SFC<BreadCrumbProps> = ({label, linkTo}) => (
  <span className={styles.breadCrumb}>
    <LocalizedLink to={linkTo}>{label}</LocalizedLink>
    {' > '}
  </span>
);
