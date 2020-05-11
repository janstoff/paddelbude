import React from 'react';

import styles from './page-layout.module.scss';
import {BreadCrumb} from '../components/BreadCrumb';
import PrimaryButton from '../components/PrimaryButton';
import {DESTINATIONS} from '../config';
import {useHideNavButton} from '../hooks/use-hide-nav-button';

interface ButtonNavInfo {
  readonly label: string;
  readonly path: string;
}

export interface PageLayoutProps {
  id: string;
  enableHomeBreadCrumb?: boolean;
  navigationOrigin?: string;
  children: any;
}

const navigationButtonSuggestion = (
  id: string,
  navigationOrigin: string | undefined
): ButtonNavInfo => {
  if (id === 'paddles' && navigationOrigin !== 'boards') {
    return {label: 'boards', path: '/boards'};
  }
  if (id === 'boards' && navigationOrigin !== 'paddles') {
    return {label: 'paddles', path: '/paddles'};
  }

  const nextPossibleDestinations = DESTINATIONS.filter(
    (destination: string) =>
      destination !== id && destination !== navigationOrigin
  );

  const randomNextDestination =
    nextPossibleDestinations[
      Math.floor(Math.random() * nextPossibleDestinations.length)
    ];

  return {label: randomNextDestination, path: `/${randomNextDestination}`};
};

const PageLayout = ({
  id,
  enableHomeBreadCrumb = false,
  navigationOrigin,
  children,
}: PageLayoutProps) => {
  const hideQuickNavButton = useHideNavButton();

  return (
    <div className={styles.page}>
      <section id={id} className={styles.section}>
        {enableHomeBreadCrumb && (
          <BreadCrumb label={'Home'} linkTo={'/'}></BreadCrumb>
        )}
        {children}
      </section>
      <div className={styles.stickyButtonWrapper}>
        {!hideQuickNavButton && (
          <PrimaryButton
            size="small"
            link
            linkTo={navigationButtonSuggestion(id, navigationOrigin).path}
            navigationOrigin={id}
          >
            {`${navigationButtonSuggestion(id, navigationOrigin).label}`}
            {' -> '}
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default PageLayout;
