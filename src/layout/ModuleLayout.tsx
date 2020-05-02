import React from 'react';

import styles from './module-layout.module.scss';
import {BreadCrumb} from '../components/BreadCrumb';

export interface ModuleLayoutProps {
  id: string;
  enableHomeBreadCrumb?: boolean;
  children: any;
}

const ModuleLayout = ({
  id,
  enableHomeBreadCrumb = false,
  children,
}: ModuleLayoutProps) => (
  <section id={id} className={styles.section}>
    {enableHomeBreadCrumb && (
      <BreadCrumb label={'Home'} linkTo={'/'}></BreadCrumb>
    )}
    {children}
  </section>
);

export default ModuleLayout;
