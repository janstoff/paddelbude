import React from 'react';

import styles from './page-layout.module.scss';
import {BreadCrumb} from '../components/BreadCrumb';
import PrimaryButton from '../components/PrimaryButton';

export interface PageLayoutProps {
  id: string;
  enableHomeBreadCrumb?: boolean;
  children: any;
}

const PageLayout = ({
  id,
  enableHomeBreadCrumb = false,
  children,
}: PageLayoutProps) => (
  <div className={styles.page}>
    <section id={id} className={styles.section}>
      {enableHomeBreadCrumb && (
        <BreadCrumb label={'Home'} linkTo={'/'}></BreadCrumb>
      )}
      {children}
    </section>
    <PrimaryButton sticky size="small">
      Click me
    </PrimaryButton>
  </div>
);

export default PageLayout;
