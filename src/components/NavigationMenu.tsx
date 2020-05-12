import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';
import {useMediaQuery} from 'react-responsive';

import {DESTINATIONS, PAGES} from '../config';

import styles from './navigationMenu.module.scss';
import LocalizedLink from './LocalizedLink';
import {PageStyle} from '../layout/App';

interface NavigationMenuProps {
  readonly pageStyle: PageStyle;
}

const NavigationMenu: React.SFC<NavigationMenuProps> = ({
  pageStyle,
}: NavigationMenuProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isTabletDeviceScreen = useMediaQuery({query: '(max-width: 1040px)'});

  function renderModal(pages: string[], destinations: string[]): JSX.Element {
    return (
      <div className={styles.modalOverlay} onClick={() => setMenuOpen(false)}>
        <div className={styles.modal}>
          <ul className={styles.menuList}>
            {pages.map((page) => (
              <LocalizedLink key={page} to={`/${page === 'home' ? '' : page}`}>
                <Translated id={`${page}-menu-entry`} />
              </LocalizedLink>
            ))}
            <hr className={styles.dividerModal} />
            {destinations.map((destination) => (
              <LocalizedLink
                key={destination}
                to={`/${destination === 'home' ? '' : destination}`}
              >
                <Translated id={`${destination}-menu-entry`} />
              </LocalizedLink>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  function renderPageLinks(
    pages: string[],
    destinations: string[],
    pageStyle: PageStyle
  ): JSX.Element {
    return (
      <ul
        className={
          pageStyle === 'home' ? styles.homeMenuList : styles.defaultMenuList
        }
      >
        {pages.map((page) => (
          <LocalizedLink key={page} to={`/${page === 'home' ? '' : page}`}>
            <Translated id={`${page}-menu-entry`} />
          </LocalizedLink>
        ))}
        <hr
          className={pageStyle === 'home' ? styles.dividerHome : styles.divider}
        />
        {destinations.map((destination) => (
          <LocalizedLink
            key={destination}
            to={`/${destination === 'home' ? '' : destination}`}
          >
            <Translated id={`${destination}-menu-entry`} />
          </LocalizedLink>
        ))}
      </ul>
    );
  }

  return (
    <div
      className={
        pageStyle === 'home'
          ? styles.homeMenuContainer
          : styles.defaultMenuContainer
      }
      onMouseLeave={() => setMenuOpen(false)}
    >
      <button
        className={menuOpen ? styles.menuButtonActive : styles.menuButton}
        onClick={() => setMenuOpen(menuOpen ? false : true)}
      >
        <img
          src={require(`../styling/icons/menu${
            pageStyle === 'home' ? '-white.svg' : '-brown.svg'
          }`)}
          alt="Menu"
        />
      </button>

      {menuOpen && isTabletDeviceScreen && renderModal(PAGES, DESTINATIONS)}
      {menuOpen &&
        !isTabletDeviceScreen &&
        renderPageLinks(PAGES, DESTINATIONS, pageStyle)}
    </div>
  );
};

export default NavigationMenu;
