import React from 'react';

import styles from './page-layout.module.scss';

export interface ModuleLayoutProps {
  id: string;
  children: any;
}

const ModuleLayout = ({id, children}: ModuleLayoutProps) => (
  <section id={id} className={styles.section}>
    {children}
  </section>
);

export default ModuleLayout;
