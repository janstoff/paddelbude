import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {DESTINATIONS} from '../config';
import styles from './landing.module.scss';
import LocalizedLink from '../components/LocalizedLink';
import DownButton from '../components/DownButton';
import {useHideDownButton} from '../hooks/useHideDownButton';

interface MainButtonProps {
  readonly children: any;
  readonly to: string;
}

interface StartingHeaderProps {
  readonly setShowNavigationHeader: (boolean: boolean) => void;
}

const MainButton: React.SFC<MainButtonProps> = ({
  children,
  to,
}: MainButtonProps) => (
  <LocalizedLink className={styles.mainButton} to={to}>
    {children}
  </LocalizedLink>
);

const StartingHeader: React.SFC<StartingHeaderProps> = ({
  setShowNavigationHeader,
}) => (
  <div className={styles.heading}>
    <h1>
      <span className={styles.headingMain}>
        <Translated id="landing-heading-main" />
      </span>
      <span className={styles.headingSub}>
        <Translated id="landing-heading-sub" />
      </span>
    </h1>
    <a
      className={styles.mainButton}
      onClick={() => setShowNavigationHeader(true)}
    >
      <Translated id={`main-button-text`} />
    </a>
  </div>
);

const NavigationHeader: React.SFC = () => (
  <div className={styles.heading}>
    {DESTINATIONS.map((destination: string) => (
      <MainButton to={`/${destination}`}>
        <Translated id={`main-button-text-${destination}`} />
      </MainButton>
    ))}
  </div>
);

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
      {showNavigationHeader ? (
        <NavigationHeader />
      ) : (
        <>
          <StartingHeader setShowNavigationHeader={setShowNavigationHeader} />
          {downButtonInitialized && !hideDownButton && <DownButton />}
        </>
      )}
    </header>
  );
};

export default Landing;
