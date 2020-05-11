import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {DESTINATIONS} from '../config';
import styles from './landing.module.scss';
import LocalizedLink from '../components/LocalizedLink';
import DownButton from '../components/DownButton';
import {useHideDownButton} from '../hooks/use-hide-down-button';

const StartingHeader: React.SFC = ({}) => (
  <h1>
    <span className={styles.headingMain}>
      <Translated id="landing-heading-main" />
    </span>
    <span className={styles.headingSub}>
      <Translated id="landing-heading-sub" />
    </span>
  </h1>
);

const NavigationHeader: React.SFC = () => (
  <div className={styles.navigationButtonsGrid}>
    {DESTINATIONS.map((destination: string) => (
      <LocalizedLink
        key={destination}
        className={styles.mainNavigationButton}
        to={`/${destination}`}
        state={{navigationOrigin: 'home'}}
      >
        <Translated id={`main-button-text-${destination}`} />
      </LocalizedLink>
    ))}
  </div>
);

const renderMainButton = (
  showNavigationHeader: boolean,
  setShowNavigationHeader: (value: boolean) => void
): JSX.Element => {
  return showNavigationHeader ? (
    <a
      className={styles.mainButtonSelected}
      onClick={() => setShowNavigationHeader(false)}
    >
      <Translated id={`main-button-selected-text`} />
    </a>
  ) : (
    <a
      className={styles.mainButton}
      onClick={() => setShowNavigationHeader(true)}
    >
      <Translated id={`main-button-text`} />
    </a>
  );
};

const Landing: React.SFC = () => {
  const [downButtonInitialized, setDownButtonInitialized] = React.useState(
    false
  );

  const [showNavigationHeader, setShowNavigationHeader] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setDownButtonInitialized(true);
    }, 5000);
  }, []);

  const hideDownButton = useHideDownButton();

  return (
    <header className={styles.base}>
      <div
        className={styles.headerContainer}
        onMouseLeave={() =>
          setShowNavigationHeader(showNavigationHeader && false)
        }
      >
        <div className={styles.headerContent}>
          {showNavigationHeader ? (
            <NavigationHeader />
          ) : (
            <>
              <StartingHeader />
            </>
          )}
        </div>
        {renderMainButton(showNavigationHeader, setShowNavigationHeader)}
      </div>
      {downButtonInitialized && !hideDownButton && !showNavigationHeader && (
        <DownButton />
      )}
    </header>
  );
};

export default Landing;
