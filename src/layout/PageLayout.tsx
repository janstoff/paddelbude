import React from 'react';

import styles from './page-layout.module.scss';
import {BreadCrumb} from '../components/BreadCrumb';
import PrimaryButton from '../components/PrimaryButton';
import {DESTINATIONS} from '../config';
import {useIsScrolling} from '../hooks/use-is-scrolling';

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
  const [
    quickNavButtonInitialized,
    setQuickNavButtonInitialized,
  ] = React.useState(false);

  const [
    showNavigationOptionsButtons,
    setShowNavigationOptionsButtons,
  ] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setQuickNavButtonInitialized(true);
    }, 2000);
  }, []);

  const isScrolling = useIsScrolling();

  console.log('scrolling', isScrolling);

  return (
    <div className={styles.page}>
      <section id={id} className={styles.section}>
        {enableHomeBreadCrumb && (
          <BreadCrumb label={'Home'} linkTo={'/'}></BreadCrumb>
        )}
        {children}
      </section>
      <div className={styles.stickyButtonWrapper}>
        {showNavigationOptionsButtons &&
          DESTINATIONS.map((destination: string) => (
            <PrimaryButton
              key={destination}
              size="small"
              link
              linkTo={`/${destination}`}
            >
              {destination}
            </PrimaryButton>
          ))}
        {quickNavButtonInitialized && !isScrolling && (
          <PrimaryButton
            size="small"
            link
            linkTo={navigationButtonSuggestion(id).path}
            onHover={() => setShowNavigationOptionsButtons(true)}
          >
            {`${navigationButtonSuggestion(id).label}`}
            {' -> '}
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default PageLayout;
