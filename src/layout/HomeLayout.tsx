import React from 'react';

import styles from './home-layout.module.scss';

export interface HomeLayoutProps {
  children: any;
}

const HomeLayout = ({children}: HomeLayoutProps) => (
  <div className={styles.homeLayout}>{children}</div>
);

export default HomeLayout;
