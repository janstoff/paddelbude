import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './landing.module.scss';
import LocalizedLink from '../components/LocalizedLink';
import DownButton from '../components/DownButton';

interface MainButtonProps {
  readonly children: any;
  readonly to: string;
}

const MainButton: React.SFC<MainButtonProps> = ({
  children,
  to,
}: MainButtonProps) => (
  <LocalizedLink className={styles.mainButton} to={to}>
    {children}
  </LocalizedLink>
);

const Landing: React.SFC = () => {
  const [downButtonInitialized, setDownButtonInitialized] = React.useState(
    false
  );
  const [shouldHideDownButton, setShouldHideDownButton] = React.useState(false);
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    setTimeout(() => {
      setDownButtonInitialized(true);
    }, 5000);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        prevScrollY.current < currentScrollY &&
        currentScrollY >= 10 &&
        !shouldHideDownButton
      ) {
        setShouldHideDownButton(true);
      }
      if (currentScrollY <= 250 && shouldHideDownButton) {
        setShouldHideDownButton(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldHideDownButton]);

  return (
    <header className={styles.base}>
      <div className={styles.heading}>
        <h1>
          <span className={styles.headingMain}>
            <Translated id="landing-heading-main" />
          </span>
          <span className={styles.headingSub}>
            <Translated id="landing-heading-sub" />
          </span>
        </h1>
        <MainButton to="/#motivation-teaser">
          <Translated id="main-button-text" />
        </MainButton>
      </div>
      {downButtonInitialized && !shouldHideDownButton && <DownButton />}
    </header>
  );
};

export default Landing;
