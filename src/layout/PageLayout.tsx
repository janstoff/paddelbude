import React from 'react';

import styles from './page-layout.module.scss';
import {BreadCrumb} from '../components/BreadCrumb';
import PrimaryButton from '../components/PrimaryButton';

interface ButtonNavInfo {
  readonly label: string;
  readonly path: string;
}

export interface PageLayoutProps {
  id: string;
  enableHomeBreadCrumb?: boolean;
  children: any;
}

const navigationButtonSuggestion = (id: string): ButtonNavInfo => {
  if (id === 'paddles') {
    return {label: 'boards', path: '/boards'};
  }
  if (id === 'boards') {
    return {label: 'paddles', path: '/paddles'};
  }
  return {label: '', path: '/'};
};

const PageLayout = ({
  id,
  enableHomeBreadCrumb = false,
  children,
}: PageLayoutProps) => {
  const [showNavigationButtons, setShowNavigationButtons] = React.useState(
    false
  );

  return (
    <div className={styles.page}>
      <section id={id} className={styles.section}>
        {enableHomeBreadCrumb && (
          <BreadCrumb label={'Home'} linkTo={'/'}></BreadCrumb>
        )}
        {children}
      </section>
      <div className={styles.stickyButtonWrapper}>
        <PrimaryButton
          size="small"
          link
          linkTo={navigationButtonSuggestion(id).path}
          onHover={() => setShowNavigationButtons(true)}
        >
          {`${navigationButtonSuggestion(id).label}`}
          {' -> '}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PageLayout;
